const telegramApi = require('node-telegram-bot-api')
const token = '5215511034:AAE5pPVxjktHrXQEOPjWsFQD1n4rw5Rj3bQ'
const bot = new telegramApi(token, {polling: true})

//https://habr.com/ru/post/666278/

const chats = {}


const gameOptions = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text: '1', callback_data: '1'}],
            
            [{text: '2', callback_data: '2'}],
            
            [{text: '3', callback_data: '3'}],
            
            [{text: '4', callback_data: '4'}]
        ]
    })
}


const start = () =>{
    bot.setMyCommands([
        {command: 'start', description: 'wer'},
        {command: 'info', description: 'wer'},
        {command: 'game', description: 'wer'},
    ])

    bot.on('message', async mes=>{
        const text = mes.text;
        const chatId = mes.chat.id

        if (text === '/start'){
            return bot.sendMessage(chatId, `Hello, ${text}`)
        }

        if(text === '/info'){
            return bot.sendMessage(chatId, `This is tgBot`)
        }

        if(text === '/game'){
            await bot.sendMessage(chatId, 'Now let s try to know my number!')
            const rnd = Math.floor(Math.random()* 10)
            chats[chatId] = rnd

            return bot.sendMessage(chatId, 'Go!', gameOptions)
        }

        return bot.sendMessage(chatId, 'don t understand')
    })

    bot.on('callback_query', msg=>{
        console.log(msg)
    })
}

start()
