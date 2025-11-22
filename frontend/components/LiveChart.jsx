import { useEffect, useState } from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import { io } from 'socket.io-client'

let socket
export default function LiveChart({ symbol = 'BTC' }) {
  const [data, setData] = useState([])

  useEffect(() => {
    socket = io(process.env.NEXT_PUBLIC_WS || 'http://localhost:4000')
    socket.emit('subscribe', { symbol })
    socket.on('price_update', update => {
      if (update.symbol !== symbol) return
      setData(d => {
        const next = [...d, { time: new Date(update.ts).toLocaleTimeString(), price: update.price }]
        return next.slice(-60)
      })
    })
    return () => {
      socket.emit('unsubscribe', { symbol })
      socket.disconnect()
    }
  }, [symbol])

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <XAxis dataKey="time" />
        <YAxis domain={["dataMin", "dataMax"]} />
        <Tooltip />
        <Line type="monotone" dataKey="price" dot={false} />
      </LineChart>
    </ResponsiveContainer>
  )
}
