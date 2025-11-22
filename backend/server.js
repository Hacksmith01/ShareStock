import express from 'express'
import http from 'http'
import { Server } from 'socket.io'
import fetcher from './services/fetcher.js'

const app = express()
const server = http.createServer(app)
const io = new Server(server, { cors: { origin: '*' } })

io.on('connection', socket => {
  console.log('client connected', socket.id)
  socket.on('subscribe', ({ symbol }) => {
    socket.join(symbol)
  })
  socket.on('unsubscribe', ({ symbol }) => {
    socket.leave(symbol)
  })
})

// simple endpoint for health
app.get('/health', (req, res) => res.json({ ok: true }))

// start poller
fetcher.start(async (update) => {
  // update: { symbol, price, ts }
  io.to(update.symbol).emit('price_update', update)
})

const PORT = process.env.PORT || 4000
server.listen(PORT, () => console.log('Server listening', PORT))
