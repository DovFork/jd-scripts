/**
 * export validate_num = 5
 * 默认预存5个validate
 * cron 58 7,15,23 * * *
 */

const http = require('http');
const stream = require('stream');
const zlib = require('zlib');
const vm = require('vm');
const PNG = require('png-js');
const UA = require('./USER_AGENTS.js').USER_AGENT;
const fs = require('fs')

const {Worker, isMainThread, workerData} = require('worker_threads')
let validate_num = process.env.validate_num ? process.env.validate_num : 5 // validate个数

Math.avg = function average() {
  let sum = 0;
  let len = this.length;
  for (let i = 0; i < len; i++) {
    sum += this[i];
  }
  return sum / len;
};

function sleep(timeout) {
  return new Promise((resolve) => setTimeout(resolve, timeout));
}

class PNGDecoder extends PNG {
  constructor(args) {
    super(args);
    this.pixels = [];
  }

  decodeToPixels() {
    return new Promise((resolve) => {
      this.decode((pixels) => {
        this.pixels = pixels;
        resolve();
      });
    });
  }

  getImageData(x, y, w, h) {
    const {pixels} = this;
    const len = w * h * 4;
    const startIndex = x * 4 + y * (w * 4);

    return {data: pixels.slice(startIndex, startIndex + len)};
  }
}

const PUZZLE_GAP = 8;
const PUZZLE_PAD = 10;

class PuzzleRecognizer {
  constructor(bg, patch, y) {
    const imgBg = new PNGDecoder(Buffer.from(bg, 'base64'));
    const imgPatch = new PNGDecoder(Buffer.from(patch, 'base64'));

    this.bg = imgBg;
    this.patch = imgPatch;
    this.rawBg = bg;
    this.rawPatch = patch;
    this.y = y;
    this.w = imgBg.width;
    this.h = imgBg.height;
  }

  async run() {
    await this.bg.decodeToPixels();
    await this.patch.decodeToPixels();

    return this.recognize();
  }

  recognize() {
    const {ctx, w: width, bg} = this;
    const {width: patchWidth, height: patchHeight} = this.patch;
    const posY = this.y + PUZZLE_PAD + ((patchHeight - PUZZLE_PAD) / 2) - (PUZZLE_GAP / 2);
    // const cData = ctx.getImageData(0, a.y + 10 + 20 - 4, 360, 8).data;
    const cData = bg.getImageData(0, posY, width, PUZZLE_GAP).data;
    const lumas = [];

    for (let x = 0; x < width; x++) {
      let sum = 0;

      // y xais
      for (let y = 0; y < PUZZLE_GAP; y++) {
        let idx = x * 4 + y * (width * 4);
        let r = cData[idx];
        let g = cData[idx + 1];
        let b = cData[idx + 2];
        let luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;

        sum += luma;
      }

      lumas.push(sum / PUZZLE_GAP);
    }

    const n = 2; // minium macroscopic image width (px)
    const margin = patchWidth - PUZZLE_PAD;
    const diff = 20; // macroscopic brightness difference
    const radius = PUZZLE_PAD;
    for (let i = 0, len = lumas.length - 2 * 4; i < len; i++) {
      const left = (lumas[i] + lumas[i + 1]) / n;
      const right = (lumas[i + 2] + lumas[i + 3]) / n;
      const mi = margin + i;
      const mLeft = (lumas[mi] + lumas[mi + 1]) / n;
      const mRigth = (lumas[mi + 2] + lumas[mi + 3]) / n;

      if (left - right > diff && mLeft - mRigth < -diff) {
        const pieces = lumas.slice(i + 2, margin + i + 2);
        const median = pieces.sort((x1, x2) => x1 - x2)[20];
        const avg = Math.avg(pieces);

        // noise reducation
        if (median > left || median > mRigth) return;
        if (avg > 100) return;
        // console.table({left,right,mLeft,mRigth,median});
        // ctx.fillRect(i+n-radius, 0, 1, 360);
        // console.log(i+n-radius);
        return i + n - radius;
      }
    }

    // not found
    return -1;
  }
}

const DATA = {
  "appId": "17839d5db83",
  "scene": "cww",
  "product": "embed",
  "lang": "zh_CN",
};
const SERVER = '124.250.18.211';

// ping iv.jd.com

class JDJRValidator {
  constructor() {
    this.data = {};
    this.x = 0;
    this.t = Date.now();
  }

  async run(tag) {
    const tryRecognize = async () => {
      const x = await this.recognize();

      if (x > 0) {
        return x;
      }
      // retry
      return await tryRecognize();
    };
    const puzzleX = await tryRecognize();
    const pos = new MousePosFaker(puzzleX).run();
    const d = getCoordinate(pos);
    await sleep(pos[pos.length - 1][2] - Date.now());
    const result = await JDJRValidator.jsonp('/slide/s.html', {d, ...this.data});

    if (result.message === 'success') {
      console.log(result);
      console.log('JDJRValidator: %fs', (Date.now() - this.t) / 1000);
      return result;
    } else {
      process.stdout.write(`Thread-${tag}`)
      console.count(JSON.stringify(result));
      await sleep(300);
      return await this.run(tag);
    }
  }

  async recognize() {
    const data = await JDJRValidator.jsonp('/slide/g.html', {e: ''});
    const {bg, patch, y} = data;
    // const uri = 'data:image/png;base64,';
    // const re = new PuzzleRecognizer(uri+bg, uri+patch, y);
    const re = new PuzzleRecognizer(bg, patch, y);
    const puzzleX = await re.run();

    if (puzzleX > 0) {
      this.data = {
        c: data.challenge,
        w: re.w,
        e: '',
        s: '',
        o: '',
      };
      this.x = puzzleX;
    }
    return puzzleX;
  }

  async report(n) {
    console.time('PuzzleRecognizer');
    let count = 0;

    for (let i = 0; i < n; i++) {
      const x = await this.recognize();

      if (x > 0) count++;
      if (i % 50 === 0) {
      }
    }

    console.timeEnd('PuzzleRecognizer');
  }

  static jsonp(api, data = {}) {
    return new Promise((resolve, reject) => {
      const fnId = `jsonp_${String(Math.random()).replace('.', '')}`;
      const extraData = {callback: fnId};
      const query = new URLSearchParams({...DATA, ...extraData, ...data}).toString();
      const url = `http://${SERVER}${api}?${query}`;
      const headers = {
        'Accept': '*/*',
        'Accept-Encoding': 'gzip,deflate,br',
        'Accept-Language': 'zh-CN,en-US',
        'Connection': 'keep-alive',
        'Host': SERVER,
        'Proxy-Connection': 'keep-alive',
        'Referer': 'https://h5.m.jd.com/babelDiy/Zeus/2wuqXrZrhygTQzYA7VufBEpj4amH/index.html',
        'User-Agent': UA,
      };
      const req = http.get(url, {headers}, (response) => {
        let res = response;
        if (res.headers['content-encoding'] === 'gzip') {
          const unzipStream = new stream.PassThrough();
          stream.pipeline(
            response,
            zlib.createGunzip(),
            unzipStream,
            reject,
          );
          res = unzipStream;
        }
        res.setEncoding('utf8');

        let rawData = '';

        res.on('data', (chunk) => rawData += chunk);
        res.on('end', () => {
          try {
            const ctx = {
              [fnId]: (data) => ctx.data = data,
              data: {},
            };

            vm.createContext(ctx);
            vm.runInContext(rawData, ctx);

            // console.log(ctx.data);
            res.resume();
            resolve(ctx.data);
          } catch (e) {
            reject(e);
          }
        });
      });

      req.on('error', reject);
      req.end();
    });
  }
}

function getCoordinate(c) {
  function string10to64(d) {
    let c = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-~".split("")
      , b = c.length
      , e = +d
      , a = [];
    do {
      mod = e % b;
      e = (e - mod) / b;
      a.unshift(c[mod])
    } while (e);
    return a.join("")
  }

  function prefixInteger(a, b) {
    return (Array(b).join(0) + a).slice(-b)
  }

  function pretreatment(d, c, b) {
    let e = string10to64(Math.abs(d));
    let a = "";
    if (!b) {
      a += (d > 0 ? "1" : "0")
    }
    a += prefixInteger(e, c);
    return a
  }

  let b = new Array();
  for (let e = 0; e < c.length; e++) {
    if (e == 0) {
      b.push(pretreatment(c[e][0] < 262143 ? c[e][0] : 262143, 3, true));
      b.push(pretreatment(c[e][1] < 16777215 ? c[e][1] : 16777215, 4, true));
      b.push(pretreatment(c[e][2] < 4398046511103 ? c[e][2] : 4398046511103, 7, true))
    } else {
      let a = c[e][0] - c[e - 1][0];
      let f = c[e][1] - c[e - 1][1];
      let d = c[e][2] - c[e - 1][2];
      b.push(pretreatment(a < 4095 ? a : 4095, 2, false));
      b.push(pretreatment(f < 4095 ? f : 4095, 2, false));
      b.push(pretreatment(d < 16777215 ? d : 16777215, 4, true))
    }
  }
  return b.join("")
}

const HZ = 60;

class MousePosFaker {
  constructor(puzzleX) {
    this.x = parseInt(Math.random() * 20 + 20, 10);
    this.y = parseInt(Math.random() * 80 + 80, 10);
    this.t = Date.now();
    this.pos = [[this.x, this.y, this.t]];
    this.minDuration = parseInt(1000 / HZ, 10);
    // this.puzzleX = puzzleX;
    this.puzzleX = puzzleX + parseInt(Math.random() * 2 - 1, 10);

    this.STEP = parseInt(Math.random() * 6 + 5, 10);
    this.DURATION = parseInt(Math.random() * 7 + 14, 10) * 100;
    // [9,1600] [10,1400]
    this.STEP = 9;
    // this.DURATION = 2000;
  }

  run() {
    const perX = this.puzzleX / this.STEP;
    const perDuration = this.DURATION / this.STEP;
    const firstPos = [this.x - parseInt(Math.random() * 6, 10), this.y + parseInt(Math.random() * 11, 10), this.t];

    this.pos.unshift(firstPos);
    this.stepPos(perX, perDuration);
    this.fixPos();

    const reactTime = parseInt(60 + Math.random() * 100, 10);
    const lastIdx = this.pos.length - 1;
    const lastPos = [this.pos[lastIdx][0], this.pos[lastIdx][1], this.pos[lastIdx][2] + reactTime];

    this.pos.push(lastPos);
    return this.pos;
  }

  stepPos(x, duration) {
    let n = 0;
    const sqrt2 = Math.sqrt(2);
    for (let i = 1; i <= this.STEP; i++) {
      n += 1 / i;
    }
    for (let i = 0; i < this.STEP; i++) {
      x = this.puzzleX / (n * (i + 1));
      const currX = parseInt((Math.random() * 30 - 15) + x, 10);
      const currY = parseInt(Math.random() * 7 - 3, 10);
      const currDuration = parseInt((Math.random() * 0.4 + 0.8) * duration, 10);

      this.moveToAndCollect({
        x: currX,
        y: currY,
        duration: currDuration,
      });
    }
  }

  fixPos() {
    const actualX = this.pos[this.pos.length - 1][0] - this.pos[1][0];
    const deviation = this.puzzleX - actualX;

    if (Math.abs(deviation) > 4) {
      this.moveToAndCollect({
        x: deviation,
        y: parseInt(Math.random() * 8 - 3, 10),
        duration: 250,
      });
    }
  }

  moveToAndCollect({x, y, duration}) {
    let movedX = 0;
    let movedY = 0;
    let movedT = 0;
    const times = duration / this.minDuration;
    let perX = x / times;
    let perY = y / times;
    let padDuration = 0;

    if (Math.abs(perX) < 1) {
      padDuration = duration / Math.abs(x) - this.minDuration;
      perX = 1;
      perY = y / Math.abs(x);
    }

    while (Math.abs(movedX) < Math.abs(x)) {
      const rDuration = parseInt(padDuration + Math.random() * 16 - 4, 10);

      movedX += perX + Math.random() * 2 - 1;
      movedY += perY;
      movedT += this.minDuration + rDuration;

      const currX = parseInt(this.x + movedX, 10);
      const currY = parseInt(this.y + movedY, 10);
      const currT = this.t + movedT;

      this.pos.push([currX, currY, currT]);
    }

    this.x += x;
    this.y += y;
    this.t += Math.max(duration, movedT);
  }
}

Date.prototype.Format = function (fmt) {
  let e,
    n = this, d = fmt, l = {
      "M+": n.getMonth() + 1,
      "d+": n.getDate(),
      "D+": n.getDate(),
      "h+": n.getHours(),
      "H+": n.getHours(),
      "m+": n.getMinutes(),
      "s+": n.getSeconds(),
      "w+": n.getDay(),
      "q+": Math.floor((n.getMonth() + 3) / 3),
      "S+": n.getMilliseconds()
    };
  /(y+)/i.test(d) && (d = d.replace(RegExp.$1, "".concat(n.getFullYear() + '').substr(4 - RegExp.$1.length)));
  for (let k in l) {
    if (new RegExp("(".concat(k, ")")).test(d)) {
      let t, a = "S+" === k ? "000" : "00";
      d = d.replace(RegExp.$1, 1 === RegExp.$1.length ? l[k] : ("".concat(a) + l[k]).substr("".concat(l[k]).length))
    }
  }
  return d;
}

if (isMainThread) {
  console.log("🔔生成validate,开始！")
  fs.writeFileSync('validate.txt', '', 'utf-8')
  for (let i = 0; i < validate_num; i++) {
    new Worker(__filename, {
      workerData: {
        tag: i,
        start: new Date().Format("HH:mm:ss"),
      }
    })
  }
} else {
  new JDJRValidator().run(workerData.tag).then(r => {
    fs.appendFileSync('validate.txt', r.validate + '\n', 'utf-8')
    console.log(`Thread-${workerData.tag} time: `, workerData.start, new Date().Format("HH:mm:ss"))
  })
}
