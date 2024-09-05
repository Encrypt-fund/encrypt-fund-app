
import { ConnectButton } from '@rainbow-me/rainbowkit';
import connectwallet from '../../icons/connectwallet.svg'
import Link from 'next/link';

import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useContext } from 'react';
import { Box, styled, useTheme } from '@mui/material';
import { ColorModeContext } from '@/context';
import disconnect from '../../icons/disconnect.svg'
import Image from 'next/image';



const StyledLink = styled(Link)(({ theme }) => ({
  backgroundColor: '#101012',
  border:'1px solid #1D1D20',
  color: '#fff',
  padding: "13px 16px",
  borderRadius: '36px',
  display: 'block',
  textDecoration: 'none',
  fontSize:'14px !important'
}));

const LoginStyled = styled(Link)(({ theme }) => ({
  backgroundColor: '#00d632 !important',
  color: '#000 !important',
  padding: '12px 22px !important',
  display: 'inline-flex',
  textDecoration: 'none',
  fontWeight: '700 !important',
  borderRadius: '5rem !important',
  transition: '0.5s',
  width: '100%',
  justifyContent: 'center',
  '-webkit-transition': '0.5s', /* For Safari 3.1 to 6.0 */
  '-moz-transition': '0.5s', /* For Firefox 4 to 15 */
  '-o-transition': '0.5s', /* For Opera 10.5 to 12.0 */
  ':hover': {
    transform: 'translateY(-5px)',
    '-webkit-transform': 'translateY(-5px)', /* For Safari 3.1 to 6.0 */
    '-moz-transform': 'translateY(-5px)', /* For Firefox 4 to 15 */
    '-ms-transform': 'translateY(-5px)', /* For IE 9 */
    '-o-transform': 'translateY(-5px)', /* For Opera 10.5 to 12.0 */
  },
  '@media(max-width: 1200px)': {
    padding: '14px',
  }
}));

const ConnectWallet = () => {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready = mounted && authenticationStatus !== 'loading';
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus ||
            authenticationStatus === 'authenticated');
        return (
          <Box
            {...(!ready && {
              'aria-hidden': true,
              'style': {
                opacity: 0,
                pointerEvents: 'none',
                userSelect: 'none',
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <LoginStyled
                    onClick={openConnectModal} href={''} >
                    Connect Wallet
                  </LoginStyled>
                );
              }
              if (chain.unsupported) {
                return (


                  <StyledLink onClick={openChainModal} href={"#"}>

                    <Box m={0} component={'p'}>Wrong network</Box>
                  </StyledLink>
                );
              }
              return (
                <Box style={{ display: 'flex', gap: 12 }}>
                  <Box
                    sx={{
                      borderRadius:'8px',
                      cursor:'pointer'
                    }}
                    onClick={openAccountModal}>
                     <Image src={disconnect} alt={''}/>
                  </Box>
                </Box>
              );
            })()}
          </Box>
        );
      }}
    </ConnectButton.Custom>
  );
};

export default ConnectWallet