<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://user-images.githubusercontent.com/76066586/219107157-f73daa6b-eeae-40e5-af6f-c2902a7cd6ae.svg">
    <img alt="wagmi logo" src="https://user-images.githubusercontent.com/76066586/219107035-1c324d64-fa90-4c5d-aa73-7cf05658fcda.svg" width="auto" height="60">
  </picture>
</p>

<br>

## Introduction 

Welcome to the Vykt-SDK, your one-stop solution for displaying personalized profile pictures on the Ethereum blockchain. Using [Vykt](https://vykt.vercel.app/), users can choose their own profile picture for their public address, adding a unique touch to their wallets.

Our powerful Vykt-sdk component and hook make it simple and straightforward to display these profiles within your dApps. Use Vykt to create new profile pictures & Vykt-SDK to show them to everyone.

Currently we only support Mantle! But we will soon support multichain as well. 


## Installation 

Install wagmi and its ethers peer dependency.

npm -

```bash
npm install vykt-sdk
```

yarn -

```bash
yarn add vykt-sdk
```

pnpm -

```bash
pnpm install vykt-sdk
```

## Quick Start

To make the most of the vykt-sdk, it's important to use wagmi alongside them.
Be sure⚠ to wrap your app using wagmiConfig and pass the client as an argument.
Also, add mantle testnet as one of your chains. 

```typescript
const mantleTestnet: Chain = {
  id: 5001,
  name: "Mantle Testnet",
  network: "mantle testnet",
  nativeCurrency: {
    decimals: 18,
    name: "BIT",
    symbol: "BIT",
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.testnet.mantle.xyz/"],
    },
    public: {
      http: ["https://rpc.testnet.mantle.xyz/"],
    },
  },
  blockExplorers: {
    default: {
      name: "Mantle Explorer",
      url: "https://explorer.testnet.mantle.xyz/",
    },
  },
  testnet: true,
};
```

### Component

- *VyktProfile*

```javascript
import { VyktProfile } from "vykt-sdk";
import { Address, useAccount } from "wagmi";

export function App() {
  const { address, isConnected } = useAccount();

  return (
    <>
      {isConnected && (
        <VyktProfile address={address as Address} size="lg" type="circle" />
      )}
    </>
  );
}

```

### Hook

- *useFetchImageURI*

```javascript
import { useFetchImageURI } from "vykt-sdk";
import { Address } from "wagmi";

export type Props = {
  address: Address;
}

export function Profile(props: Props) {
  const { data } = useFetchImageURI(address);
  return (
    <div>
      <img src={data as string} />
    </div>
  );
}
```


## Documentation

For now, there is a single component and hook for vykt-sdk. We will add more in near future. 

### Component
- *VyktProfile* - This component is designed to display your Vykt profile, and it requires an address as a mandatory prop. Additionally, size, type, and style are available as optional props to customize the component's appearance.

| Prop   | type  | required |
|--------|-------|----------|
| address | Address | true |
| size | sm \| md \| lg | optional |
| type | circle \| square | optional |
| style | React.CSSProperties | optional |

### Hook
- *useFetchImageURI* - In order to use this hook, you must specify an address that will retrieve your vykt profile image if it exists, and a blockie image otherwise.


## Authors

- [@miralsuthar](https://github.com/miralsuthar) (Miral Suthar, [Twitter](https://twitter.com/miral182000))
- [@keshavsharma25](https://github.com/keshavsharma25) (Keshav Sharma, [Twitter](https://twitter.com/skeshav25))

## License

[MIT](/LICENSE) License

<br />
