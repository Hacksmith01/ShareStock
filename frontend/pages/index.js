import Layout from '../components/Layout'
import LiveChart from '../components/LiveChart'
import NewsPanel from '../components/NewsPanel'
import Sidebar from '../components/Sidebar'

export default function Home() {
  return (
    <Layout>
      <div className="grid grid-cols-12 gap-4 p-6">
        <aside className="col-span-2">
          <Sidebar />
        </aside>
        <main className="col-span-7">
          <div className="mb-4">
            <h2 className="text-xl font-semibold">BTC / USD — Live</h2>
          </div>
          <div className="bg-white rounded-2xl p-4 shadow">
            <LiveChart symbol={"BTC"} />
          </div>
        </main>
        <aside className="col-span-3">
          <NewsPanel />
        </aside>
      </div>
    </Layout>
  )
}
