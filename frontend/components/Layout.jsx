export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow-sm py-3 px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="font-bold text-xl">MedVision</div>
        </div>
        <div className="flex items-center gap-3"> 
          <button className="px-3 py-1 rounded bg-gray-100">Dark</button>
        </div>
      </header>
      <div className="flex-1 bg-gray-50">{children}</div>
    </div>
  )
}
