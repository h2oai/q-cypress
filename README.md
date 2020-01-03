# Cypress.io test automation for Q

This is an extended version of the [Cypress.io](https://www.cypress.io/) test automation platform for testing Q Apps.

## Setup

[Download and install Node.js LTS](https://nodejs.org/en/download/), then clone this repo and run `npm install`:

```bash
git clone https://github.com/h2oai/q-cypress.git
cd q-cypress
npm install
```

## Usage

Normally, you do not need to run this Cypress server manually. The `q-tester` bridge server that ships with Q will run Cypress for you on-demand.

To manually launch Cypress for interactive use, run `npm start`.

To run all available tests, run `npm test`.

