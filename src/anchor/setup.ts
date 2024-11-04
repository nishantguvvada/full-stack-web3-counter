import { IdlAccounts, Program } from "@coral-xyz/anchor";
import { clusterApiUrl, Connection, PublicKey } from "@solana/web3.js";
import { IDL, Counter } from "./idl";
import { Buffer } from 'buffer';

const programId = new PublicKey("EwkXXTbYpkT1Y3CG5XfrFZqggJAEwtnh26qzDyZRws9");
const connection = new Connection(clusterApiUrl("devnet"), "confirmed");

export const program = new Program<Counter>(IDL, programId, { connection });

export const [counterPDA] = PublicKey.findProgramAddressSync(
    [Buffer.from("counter")],
    program.programId
);

export type CounterData = IdlAccounts<Counter>["counter"];