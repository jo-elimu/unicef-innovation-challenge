import ImplementingPartner from '../abis/ImplementingPartner.json'
import {
  WagmiConfig,
  createClient,
  configureChains,
  useContractRead,
  chain
} from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'

export default function PartnerName() {
  console.info('PartnerName')

  const { chains, provider, webSocketProvider } = configureChains(
    [chain.goerli],
    [publicProvider()]
  )
  
  const client = createClient({
    autoConnect: true,
    provider,
    webSocketProvider
  })

  return (
    <WagmiConfig client={client}>
      <Name />
    </WagmiConfig>
  )
}

function Name() {
  console.info('Name')

  const { data, isError, isLoading } = useContractRead({
    address: '0x3ac4da1d4a5f3a522d9da129a81589d13e322b97',
    abi: ImplementingPartner.abi,
    functionName: 'partnerName'
  })
  console.info('data:', data)
  console.info('isError:', isError)
  console.info('isLoading:', isLoading)

  if (data) {
    return (
      <span>{data}</span>
    )
  }
  return (
    <span>Loading...</span>
  )
}
