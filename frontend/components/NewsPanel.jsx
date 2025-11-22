export default function NewsPanel() {
  return (
    <div className="bg-white rounded-2xl p-4 shadow">
      <h3 className="font-semibold mb-3">Market News</h3>
      <ul className="space-y-3 text-sm">
        <li className="border-b pb-2">Bitcoin price hits new local high — <span className="text-gray-500">2h</span></li>
        <li className="border-b pb-2">Apple announces Q4 results — <span className="text-gray-500">4h</span></li>
        <li className="">Stocks broadly higher on tech rally — <span className="text-gray-500">6h</span></li>
      </ul>
    </div>
  )
}
