import { useConnection } from "@solana/wallet-adapter-react";
import { program, counterPDA, CounterData } from "../anchor/setup";
import { useEffect, useState } from "react";

export default function CounterState() {
    const { connection } = useConnection();
    const [counterData, setCounterData] = useState<CounterData | null>(null);

    useEffect(() => {
        const fetchCounterData = async () => {
            try {
                const data = await program.account.counter.fetch(counterPDA);
                setCounterData(data);
            } catch (err) {
                console.log("Error fetching counter data: ", err);
            }
        }

        fetchCounterData();

        const subscriptionId = connection.onAccountChange(
            counterPDA,
            accountInfo => {
                try {
                    const decodedData = program.coder.accounts.decode(
                        "counter",
                        accountInfo.data
                    );
                    setCounterData(decodedData);
                } catch (err) {
                    console.log("Error decoding account data:", err);
                }
            }
        );

        return () => {
            connection.removeAccountChangeListener(subscriptionId);
        }
    }, [program, counterPDA, connection]);

    return (<p className="text-lg">Count: {counterData?.count?.toString()}</p>)
}