# Full Stack Solana dApp

- The project is a template for a full stack solana application. 
- The project implements a counter application.
- The counter can be incremented and the latest count can be viewed on the application.

# Stack

- React with Vite
- Rust with Anchor

# Functionality

The smart contract contains 2 main functions:
1. initialize() - initialize the counter to generate a program derived address which will store the counter state
2. increment() - increases the counter value by 1 on function call
