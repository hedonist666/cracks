const frida = require('frida')
const fs    = require('fs')
const util  = require('util')

const exec = util.promisify(require('child_process').exec)


const src = fs.readFileSync('remote.js') 

let main = async () => {
    let {stdout} = await exec('ps aux | grep fib | head -n 1')
    let pid = stdout.split(' ').filter(e => e != '')[1]
    pid = parseInt(pid)
    console.log('{*}_{*} process with PID ', pid)
    const session = await frida.attach(pid)
    const scr = await session.createScript(src)
    scr.message.connect(msg => {
        if (msg.type === 'send') {
            try {
                console.log(JSON.parse(msg.payload))
            }
            catch (e) {
                console.log(msg.payload)
            }
        }
        else console.log(msg)
    })
    await scr.load()
    console.log('{*}_{*} Script loaded')
    process.on('SIGINT', async () => {
        await scr.unload()
        console.log('{*}_{*} Script unloaded')
    })
}

main().catch(console.error)
