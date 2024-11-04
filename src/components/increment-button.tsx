import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { useState } from "react";
import { program } from "../anchor/setup";

export default function IncrementButton() {
    const { connection } = useConnection();
    const { publicKey, sendTransaction } = useWallet();
    const [isLoading, setIsLoading] = useState(false);

    const onClick = async () => {
        if (!publicKey) return;

        setIsLoading(true);

        try {
            const tx = await program.methods.increment().transaction();
            const txSignature = await sendTransaction(tx, connection);

            console.log(
                `View on explorer: https://solana.fm/tx/${txSignature}?cluster=devnet-alpha`,
            );
        } catch (err) {
            console.log(err);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <button className="w-24" onClick={onClick} disabled={!publicKey}>
            {isLoading ? "Loading" : "Increment"}
        </button>
    );

}