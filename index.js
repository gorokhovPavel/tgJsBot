const telegramApi = require('node-telegram-bot-api')

const token = '5215511034:AAE5pPVxjktHrXQEOPjWsFQD1n4rw5Rj3bQ'

const bot = new telegramApi(token, {polling: true})

bot.on('message', mes=>{

    const text = mes.text;
    const chatId = mes.chat.id

    bot.sendMessage(chatId, `Hello, ${text}`)
})
