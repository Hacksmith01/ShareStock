import axios from 'axios'

let interval
const start = (onUpdate) => {
  // Very small poller for skeleton/demo — replace with rate-limit aware logic
  interval = setInterval(async () => {
    try {
      const r = await axios.get('https://api.coingecko.com/api/v3/simple/price', {
        params: { ids: 'bitcoin,ethereum', vs_currencies: 'usd' }
      })
      const now = Date.now()
      if (r.data.bitcoin) onUpdate({ symbol: 'BTC', price: r.data.bitcoin.usd, ts: now })
      if (r.data.ethereum) onUpdate({ symbol: 'ETH', price: r.data.ethereum.usd, ts: now })
    } catch (e) {
      console.error('fetcher error', e.message)
    }
  }, 5000)
}

export default { start }
