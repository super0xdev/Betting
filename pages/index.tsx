import Head from 'next/head';
import {
  Box,
  Divider,
  Grid,
  Heading,
  Text,
  Stack,
  Container,
  Link,
  Button,
  Flex,
  Icon,
  useColorMode,
  useColorModeValue
} from '@chakra-ui/react';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
import {Navbar, WalletSection } from '../components';
import { useWallet } from '@cosmos-kit/react';

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();
  const wallet = useWallet()

  return (
    <>
      <Container maxW="5xl">
        <Head>
          <title>Create Cosmos App</title>
          <meta name="description" content="Generated by create cosmos app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        
      </Container>
    </>
  );
}
