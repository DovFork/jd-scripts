"""
cron: 59 23 * * 0
每周日23:59，等待至0点开始发送
自动提交code到BOT
"""

import os
import re
import time
import requests
import datetime
from telethon import TelegramClient

# 注册TG App ID  https://my.telegram.org/auth
api_id = 0
api_hash = ''

# 是否代理，二选一
client = TelegramClient('anon', api_id, api_hash)  # 无
# client = TelegramClient('anon', api_id, api_hash, proxy=('http', '127.0.0.1', 1080))  # 有

client.start()


async def main():
    res = requests.get('https://cdn.jsdelivr.net/gh/Aaron-lv/sync@jd_scripts/jd_get_share_code.js').text
    file = 'jd_share_code.js'
    with open(file, 'w') as f:
        f.write(res)
    txt = os.popen(f'node {file}').read()
    txt = re.findall(r".*】.*", txt, re.M)
    codes = ''
    for line in txt:
        codes += line + '\n'
    codes = re.sub(f'【.*京东农场】', '/farm ', codes)
    codes = re.sub(f'【.*京东萌宠】', '/pet ', codes)
    codes = re.sub(f'【.*种豆得豆】', '/bean ', codes)
    codes = re.sub(f'【.*东东工厂】', '/ddfactory ', codes)
    codes = re.sub(f'【.*京喜工厂】', '/jxfactory ', codes)
    codes = re.sub(f'【.*闪购盲盒】', '/sgmh ', codes)
    for line in codes.split('\n')[:-1]:
        if '/' in line:
            print(line)

    while 1:
        if datetime.datetime.now().weekday() == 7:
            break
        time.sleep(1)

    for line in codes.split('\n')[:-1]:
        # DDO BOT
        await client.send_message('@JDShareCodebot', line)


with client:
    client.loop.run_until_complete(main())
