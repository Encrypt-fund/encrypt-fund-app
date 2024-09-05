import {
  createConfig,
  http,
  cookieStorage,
  createStorage
} from 'wagmi'


import { Address, type Chain } from 'viem'

export const ramestta = {
  id: 1370,
  name: 'Ramestta',
  nativeCurrency: { name: 'RAMA', symbol: 'RAMA', decimals: 18 },
  rpcUrls: {
    default: { http: ['https://blockchain.ramestta.com'] },
  },
  blockExplorers: {
    default: { name: 'Ramascan', url: 'https://ramascan.com' },
  },
  contracts: {
    // ensRegistry: {
    //   address: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
    // },
    // ensUniversalResolver: {
    //   address: '0xE4Acdd618deED4e6d2f03b9bf62dc6118FC9A4da',
    //   blockCreated: 16773775,
    // },
    multicall3: {
      address: '0xE4fA850Bd3abBC63e07E688c27eF9a334992283d',
      blockCreated: 7334177,
    },
  },
} as const satisfies Chain

export const pingaksha = {
  id: 1377,
  name: 'Pingaksha Testnet',
  nativeCurrency: { name: 'RAMA', symbol: 'RAMA', decimals: 18 },
  rpcUrls: {
    default: { http: ['https://testnet.ramestta.com'] },
  },
  blockExplorers: {
    default: { name: 'Ramascan', url: 'https://pingaksha.ramascan.com' },
  },
  contracts: {
    // ensRegistry: {
    //   address: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
    // },
    // ensUniversalResolver: {
    //   address: '0xE4Acdd618deED4e6d2f03b9bf62dc6118FC9A4da',
    //   blockCreated: 16773775,
    // },
    multicall3: {
      address: '0xE4fA850Bd3abBC63e07E688c27eF9a334992283d',
      blockCreated: 2451020,
    },
  },
} as const satisfies Chain

export const config = createConfig({
  chains: [ramestta,pingaksha],
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
  transports: {
    [ramestta.id]: http('https://blockchain.ramestta.com'),
    [pingaksha.id]: http('https://testnet.ramestta.com')
  },
})

type MmctContractAddressesType= {
  ramestta: { 
    mmct_token: Address,
    mmct_ico: Address,
    mmct_referral: Address,
    mmct_staking: Address,
  },
  pingaksha: {
    mmct_token: Address,
    mmct_ico: Address,
    mmct_referral: Address,
    mmct_staking: Address,
  }
}

export const mmctContractAddresses: MmctContractAddressesType = {
  ramestta: { 
    mmct_token: "0x4b1853C1882ee5c50e5Cb3d7ff05334047AC66Bd",
    mmct_ico: "0xF14CFCA3D7f35815024197a117eA82d2816Fbc23",
    mmct_referral: "0xe7A53699DE32B1e33492cbf5398744498B3D2ddc",
    mmct_staking: "0xE91A1C7B5689d918D40aAA848CDA96dbAa2aba67",
  },
  pingaksha: {
    mmct_token: "0x0537786A0C92439E0F70A92EC0477A8465B7Dade",
    mmct_ico: "0xdf9E166Ca9d0a4857EEB535D359013469E56e53F",
    mmct_referral: "0x15Cc8A56770D4B3a5dfCFA42cd036fb8897989b6",
    mmct_staking: "0xb3339c3252b11F4Aa7534f00F8675f150c81e09c",
  }
}


export const formatTier = (tier: number): string => {
  if (tier === 5) {
    return 'Elite';
  } else if (tier === 4) {
    return 'Diamond';
  } else if (tier === 3) {
    return 'Platinum';
  } else if (tier === 2) {
    return 'Gold';
  } else if (tier === 1) {
    return 'Silver';
  } else  {
    return 'Starter';
  }
}
