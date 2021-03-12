import app from 'server'
import process from 'process'

import { PORT } from 'config'

app.shutdown = (signal) => {
    console.log(`Received ${signal}. Close this server, with pid ${process.pid}.`)
    process.exit()
}

process.on('SIGINT', app.shutdown)
process.on('SIGTERM', app.shutdown)

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))

export default app