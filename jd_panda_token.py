import asyncio
import re
import threading

from telethon import TelegramClient
from telethon.helpers import TotalList

api_id = 0
api_hash = ''
client = TelegramClient('anon', api_id, api_hash, proxy=('http', '127.0.0.1', 1080))


async def click(msg):
    print('click')
    await msg.click(0)


async def main():
    msg = await client.get_messages('@pang_da_bot', ids=39861)
    if type(msg) == list:
        msg = msg[0]
    t = threading.Thread(target=asyncio.run, args=(click(msg),))
    t.daemon = True
    t.start()
    await asyncio.sleep(2)

    print('main')
    msg = await client.get_messages('@pang_da_bot', limit=1)
    if type(msg) == TotalList:
        msg = msg[0]

    token = re.search(r"你的Token (.*)\n", msg.message).group(1)
    print('token:', token)

    with open('.env', 'r') as f:
        txt = f.read()
        txt = txt.replace(re.search(r'(PANDA_TOKEN=".*")', txt).group(1), f'PANDA_TOKEN="{token}"')
    with open('.env', 'w') as f:
        f.write(txt)


with client:
    client.loop.run_until_complete(main())
