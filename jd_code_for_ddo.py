"""
cron: 59 23 * * 0
每周日23:59，等待至0点开始发送
自动提交code到BOT
配合本仓库jd_getShareCodes.ts及依赖
"""
import datetime
import os
import re
import time

from telethon import TelegramClient

# 注册TG App ID  https://my.telegram.org/auth

api_id = 0
api_hash = ''

# 是否代理，二选一
client = TelegramClient('anon', api_id, api_hash)  # 无
# client = TelegramClient('anon', api_id, api_hash, proxy=('http', '127.0.0.1', 1080))  # 有

client.start()


async def main():
    for file in os.listdir('.'):
        if 'jd_getShareCodes' in file:
            txt = os.popen('ts-node jd_getShareCodes.ts').read()
            txt = re.findall(r".*: (?!null).*", txt, re.M)
            codes = ''
            for line in txt:
                codes += line + '\n'
            codes = codes \
                .replace('种豆得豆', '/bean') \
                .replace('东东农场', '/farm') \
                .replace('京东健康', '/health') \
                .replace('东东萌宠', '/pet') \
                .replace('东东工厂', '/ddfactory') \
                .replace('京喜工厂', '/jxfactory') \
                .replace('闪购盲盒', '/sgmh') \
                .replace(':', '')
            print(codes)
            while 1:
                if datetime.datetime.now().weekday() == 7:
                    break
                time.sleep(1)

            for line in codes.split('\n')[:-1]:
                # DDO BOT
                await client.send_message('@JDShareCodebot', line)
            break


with client:
    client.loop.run_until_complete(main())
