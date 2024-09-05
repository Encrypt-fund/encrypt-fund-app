// 'use client'
import { useContext, type ReactNode } from 'react'
import { type State, WagmiProvider, http } from 'wagmi'
import '@rainbow-me/rainbowkit/styles.css';
import { useRouter } from 'next/router';
import Sheild from '../icons/Sheild.svg'
 
import Image from 'next/image';

import {
  RainbowKitProvider,
  getDefaultWallets,
  AvatarComponent,
  getDefaultConfig,
  Theme,
  darkTheme,
  lightTheme,
  midnightTheme,
} from '@rainbow-me/rainbowkit';
import {
  trustWallet,
  injectedWallet,
  metaMaskWallet,
  argentWallet
} from '@rainbow-me/rainbowkit/wallets';
 
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Box, useTheme } from '@mui/material';
import { ColorModeContext } from '@/context';
import { pingaksha, ramestta } from '.';
import { ramaPayWallet } from './ramaPayWallet';

const {wallets}=getDefaultWallets()

export const config = getDefaultConfig({
  appName: 'Mumblechat ICO',
  projectId: 'YOUR_PROJECT_ID',
  wallets: [
    {
      groupName: 'Recommended',
      wallets: [metaMaskWallet,injectedWallet,ramaPayWallet],
    },
    ...wallets,
    {
      groupName: 'Other',
      wallets: [trustWallet,argentWallet]
    },
    ],
  chains: [
    ramestta,
    pingaksha,
  ],
  ssr: true,
  multiInjectedProviderDiscovery: false, 
  transports: {
    [ramestta.id]: http('https://blockchain.ramestta.com'),
    [pingaksha.id]: http('https://testnet.ramestta.com'),
  },
});

const queryClient = new QueryClient();

type Props = {
  children: ReactNode,
  initialState: State, 
}



export function Providers({ children, initialState }: Props) {  

    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();

    const myTheme: Theme = {
      blurs: {
        modalOverlay: '...',
      },
      colors: {
        accentColor: '#00d632',
        accentColorForeground: '...',
        actionButtonBorder: '...',
        actionButtonBorderMobile: '#fff',
        actionButtonSecondaryBackground: '...',
        closeButton: '#00d632',
        closeButtonBackground: '...',
        connectButtonBackground: '...',
        connectButtonBackgroundError: '...',
        connectButtonInnerBackground: '...',
        connectButtonText: '#00d632',
        connectButtonTextError: '...',
        connectionIndicator: '#fff',
        downloadBottomCardBackground: '...',
        downloadTopCardBackground: '...',
        error: '...',
        generalBorder: '...',
        generalBorderDim: '...',
        menuItemBackground: '...',
        modalBackdrop: '...',
        modalBackground:'#27313D',
        modalBorder: '#00d632',
        modalText: '#fff',
        modalTextDim: '...',
        modalTextSecondary: '#fff',
        profileAction: '...',
        profileActionHover: '...',
        profileForeground: '...',
        selectedOptionBorder: '...',
        standby: '...',
      },
      fonts: {
        body: '...',
      },
      radii: {
        actionButton: '...',
        connectButton: '...',
        menuButton: '...',
        modal: '8px',
        modalMobile: '...',
      },
      shadows: {
        connectButton: '#fff',
        dialog: '...',
        profileDetailsAction: '...',
        selectedOption: '...',
        selectedWallet: '...',
        walletLogo: '',
      },
    };
    
    const CustomAvatar: AvatarComponent = ({ address, ensImage, size }) => {
      // const color = generateColorFromAddress(address);
      return ensImage ? (
        <Image
          src={ensImage}
          width={size}
          height={size}
          style={{ borderRadius: 999 }} alt={''}        />
      ) : (
        <Box
           
        >
          <Image src={Sheild} width={60} alt={''}/>
        </Box>
      );
    }; 

  return (
    <WagmiProvider config={config} initialState={initialState}> 
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider theme={myTheme} avatar={CustomAvatar}>
        {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}

function jsonRpcProvider(arg0: { rpc: (chain: any) => { http: string; }; }) {
  throw new Error('Function not implemented.');
}
