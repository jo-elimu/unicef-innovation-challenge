import Header from "../components/Header"
import PartnerName from "../components/PartnerName"
// @ts-expect-error
import Blockies from "react-blockies"
import { ArrowUpRightIcon } from "@heroicons/react/24/outline"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ChartData
} from 'chart.js'
import { Bar, Line, Scatter, Bubble } from 'react-chartjs-2'
import { useEffect, useRef, useState } from "react"
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Filler,
  Title,
  Tooltip,
  Legend
)

function DistributionChart() {
  console.info('DistributionChart')

  const chartRef = useRef<ChartJS>(null)
  const [chartData, setChartData] = useState<ChartData<'bar'>>({
    datasets: [],
  })

  useEffect(() => {
    const chart = chartRef.current

    if (!chart) {
      return
    }

    const data = {
      labels: ['AUG 2022', 'SEP 2022', 'OCT 2022'],
      datasets: [
        {
          label: 'Received from UNICEF',
          data: [2.0, 0, 0],
          backgroundColor: 'rgba(1, 98, 255, 1)',
          barThickness: 20,
          borderRadius: 10
        },
        {
          label: 'Distributed to Beneficiaries',
          backgroundColor: 'rgba(32, 214, 155, 1)',
          data: [0.5, 0.25, 0.75],
          barThickness: 20,
          borderRadius: 10
        }
      ]
    }

    setChartData(data)
  }, [])

  return <Bar ref={chartRef} data={chartData} />
}

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
              <a
                href="#"
                className="absolute right-8 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700"
              >
                Distribute funds
              </a>
            <div className="py-2 sm:px-0">
              <span className="font-bold">2.00 ETH</span> received from UNICEF<br />
              <span className="font-bold">1.50 ETH</span> distributed to Beneficiaries
            </div>

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

            <div className="px-4 py-6 sm:px-0">
              <div className="rounded-lg border-4 border-dashed border-gray-200 p-10 bg-white">
                <DistributionChart />
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
