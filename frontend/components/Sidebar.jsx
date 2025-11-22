export default function Sidebar() {
  const sample = ["BTC","ETH","AAPL","TSLA"];
  return (
    <div className="bg-white rounded-2xl p-4 shadow">
      <h3 className="font-semibold mb-3">Watchlist</h3>
      <ul className="space-y-2">
        {sample.map(s => (
          <li key={s} className="flex items-center justify-between">
            <span className="font-medium">{s}</span>
            <span className="text-sm text-gray-500">+1.2%</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
