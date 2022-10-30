import Header from "../components/Header"
import PartnerName from "../components/PartnerName"
// @ts-expect-error
import Blockies from "react-blockies"
import { ArrowUpRightIcon } from "@heroicons/react/24/outline"

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
            <div className="flex flex-col">
              <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                  <div className="overflow-hidden">
                    <table className="min-w-full bg-white">
                      <thead className="border-b bg-gray-50">
                        <tr>
                          <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            Beneficiary
                          </th>
                          <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            Amount
                          </th>
                          <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            Expenditure
                          </th>
                          <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            Transaction
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            <Blockies className="h-8 w-8 rounded-full inline" seed="0x1a2b...3c4d" />
                            <code className="ml-2 align-middle">0x1a2b...3c4d</code>
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            0.75 ETH
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            Humanitarian Cash Transfer #3
                          </td>
                          <td className="text-sm px-6 py-4 whitespace-nowrap">
                            <a href="https://goerli.etherscan.io">Etherscan <ArrowUpRightIcon height="1em" className="inline" /></a>
                          </td>
                        </tr>
                        <tr className="bg-white border-b">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            <Blockies className="h-8 w-8 rounded-full inline" seed="0x1a2b...3c4d" />
                            <code className="ml-2 align-middle">0x1a2b...3c4d</code>
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            0.25 ETH
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            Humanitarian Cash Transfer #2
                          </td>
                          <td className="text-sm px-6 py-4 whitespace-nowrap">
                            <a href="https://goerli.etherscan.io">Etherscan <ArrowUpRightIcon height="1em" className="inline" /></a>
                          </td>
                        </tr>
                        <tr className="bg-white border-b">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            <Blockies className="h-8 w-8 rounded-full inline" seed="0x1a2b...3c4d" />
                            <code className="ml-2 align-middle">0x1a2b...3c4d</code>
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            0.5 ETH
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            Humanitarian Cash Transfer #1
                          </td>
                          <td className="text-sm px-6 py-4 whitespace-nowrap">
                            <a href="https://goerli.etherscan.io">Etherscan <ArrowUpRightIcon height="1em" className="inline" /></a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
