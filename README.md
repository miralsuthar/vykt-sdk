<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://user-images.githubusercontent.com/76066586/219107157-f73daa6b-eeae-40e5-af6f-c2902a7cd6ae.svg">
    <img alt="wagmi logo" src="https://user-images.githubusercontent.com/76066586/219107035-1c324d64-fa90-4c5d-aa73-7cf05658fcda.svg" width="auto" height="60">
  </picture>
</p>

---

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

The vykt-sdk is currently very straightforward to use, as it only has one component and hook. However, more features will be added soon to make it even easier to display profiles.

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
        <VyktProfile address={address!} size="lg" type="circle" />
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
