import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { DAppProvider, ChainId } from "@usedapp/core";
import "./styles.css";

const rootElement = document.getElementById("root");
document.body.style =
  "background: #1d1d1d; height: 100%;margin: 0;overflow: hidden;";

const config = {
  readOnlyChainId: ChainId.Mainnet,
  readOnlyUrls: {
    [ChainId.Mainnet]: "https://matic-mainnet.chainstacklabs.com"
  }
};
ReactDOM.render(
  <StrictMode>
    <DAppProvider config={config}>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossorigin="anonymous"
      />
      <App />
    </DAppProvider>
  </StrictMode>,
  rootElement
);
