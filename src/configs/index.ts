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

type EfContractAddressesType= {
  ramestta: { 
    rusd_Token: Address,
    ef_token: Address,
    ef_ico: Address,
    ef_ico_referral: Address,
    ef_ico_staking: Address,
    ef_invest: Address
    ef_referral: Address
  },
  pingaksha: {
    rusd_Token: Address,
    ef_token: Address,
    ef_ico: Address,
    ef_ico_referral: Address,
    ef_ico_staking: Address,
    ef_invest: Address
    ef_referral: Address
  }
}

export const efContractAddresses: EfContractAddressesType = {
  ramestta: { 
    rusd_Token: "0x2A32e2102467135E22Ca015277E397E9f3B85AF2",
    ef_token: "0x8828F8F7e11abE2183597cC6029754C25A9BCd57",
    ef_ico: "0xF14CFCA3D7f35815024197a117eA82d2816Fbc23",
    ef_ico_referral: "0xe7A53699DE32B1e33492cbf5398744498B3D2ddc",
    ef_ico_staking: "0xE91A1C7B5689d918D40aAA848CDA96dbAa2aba67",
    ef_invest: "0x",
    ef_referral: "0x"

  },
  pingaksha: {
    rusd_Token: "0x36b594607A788d096ff1091bDAEEE4514dE9BbE6",
    ef_token: "0x8828F8F7e11abE2183597cC6029754C25A9BCd57",
    ef_ico: "0xdf9E166Ca9d0a4857EEB535D359013469E56e53F",
    ef_ico_referral: "0x15Cc8A56770D4B3a5dfCFA42cd036fb8897989b6",
    ef_ico_staking: "0xb3339c3252b11F4Aa7534f00F8675f150c81e09c",
    ef_invest: "0xFE684506309fc55524FeDc68679A6c3CF858ee49",
    ef_referral: "0x6e34282c5ccea7Da90af8d5666d21C4C7DcaBa80"
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
