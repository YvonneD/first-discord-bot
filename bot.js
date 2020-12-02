require('dotenv').config()
const Discord=require('discord.js')
const client=new Discord.Client({
    partials:['MESSAGE']
})

const BOT_PREFIX='!'
const MOD_ME_COMMAND='mode-me'

client.on('ready',()=>{
    console.log('bot is ready to go')
})
client.on('messageDelete',msg=>{
    msg.channel.send("don't delete message")
})
client.on('message',msg=>{
    if(msg.content=='hello'){
        msg.react('❤')
    }
    if(msg.content===`${BOT_PREFIX}${MOD_ME_COMMAND}`){
        modUser(msg.member)
    }
})
function modUser(member){
    member.roles.add('389210568214577175')
}
client.login(process.env.BOT_TOKEN)
