import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import {
  WalletModalProvider,
  WalletMultiButton,
  WalletDisconnectButton
} from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl } from "@solana/web3.js";
import { useMemo } from "react";
import "./App.css";
// Default styles that can be overridden by your app
import "@solana/wallet-adapter-react-ui/styles.css";
import CounterState from "./components/counter-state";
import IncrementButton from "./components/increment-button";

function App() {

  const network = WalletAdapterNetwork.Devnet;
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);


  return (
    <>
      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={[]} autoConnect>
          <WalletModalProvider>
            <WalletMultiButton />
            <WalletDisconnectButton />
            <h1>Hello Solana</h1>
            <CounterState />
            <IncrementButton />
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </>
  )
}

export default App
