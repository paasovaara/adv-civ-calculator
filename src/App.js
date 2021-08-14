import classes from "./App.module.css";

import Layout from "./components/Layout/Layout";
import Wallet from "./components/Wallet/Wallet";

function App() {
  return (
    <div className={classes.App}>
      <Layout>
        <Wallet></Wallet>
      </Layout>
    </div>
  );
}

export default App;
