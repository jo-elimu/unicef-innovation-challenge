import Header from "../components/Header"
import PartnerName from "../components/PartnerName"

export default function Index() {
  console.info('Index')
  return (
    <>
      <div id="indexPage" className="min-h-full bg-gray-100">
        <Header />
        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Implementing Partner - <PartnerName /></h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            <div className="px-4 py-6 sm:px-0">
              <div className="h-96 rounded-lg border-4 border-dashed border-gray-200" />
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
