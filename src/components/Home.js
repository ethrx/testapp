import React from "react";
import ConnectButton from "./ConnectButton.js";
import NFTInfo from "./NFTInfo.js";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: <ConnectButton onConnected={this.account.bind(this)} />
    };
    this.account = this.account.bind(this);
  }
  async account(a) {
    await a;
    this.setState({
      content: <NFTInfo address={a} />
    });
  }

  render() {
    return (
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)"
        }}
      >
        {this.state.content}
        {/*<Sidebar />*/}
      </div>
    );
  }
}
