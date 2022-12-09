const vm = require("vm")
const fs = require("fs")

let js = fs.readFileSync('./utils/vendors.683f5a61.js').toString()
const fnMock = new Function;
const ctx = {
  window: {addEventListener: fnMock},
  document: {
    addEventListener: fnMock,
    removeEventListener: fnMock,
  },
  navigator: {userAgent: 'okhttp/3.12.1;jdmall;android;version/9.5.4;build/88136;screen/1440x3007;os/11;network/wifi;'}
}
vm.createContext(ctx)
vm.runInContext(js, ctx)

const smashUtils = ctx.window.smashUtils

module.exports = {
  smashUtils
}