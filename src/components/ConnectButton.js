import { useEthers } from "@usedapp/core";
import { Button } from "react-bootstrap";
import MetamaskLogo from "../assets/metamask-fox.svg";

export default function ConnectButton(props) {
  const { activateBrowserWallet, account } = useEthers();

  function handleConnectWallet() {
    activateBrowserWallet().then(() => {
      props.onConnected(account);
    });
  }

  return (
    <Button
      style={{
        backgroundColor: "rgba(173, 173, 173, 1)",
        color: "#1d1d1d"
      }}
      onClick={handleConnectWallet}
    >
      <img src={MetamaskLogo} width="35" height="25" /> MetaMask
    </Button>
  );
}
