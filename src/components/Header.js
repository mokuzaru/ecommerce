import react, { useContext } from "react";
import { Link } from "react-router-dom";
import { useEthers, useEtherBalance } from "@usedapp/core";

const Header = () => {

    const {activateBrowserWallet, account} = useEthers();
    const etherBalance = useEtherBalance(account);

    const handleWallet = () => {
      //activateBrowserWallet();

    }

    return (
        <div id="header">
        <Link to='/' id='logo'>DeuStore</Link>

        <div id="link-containers">
          <a>Electronica</a>
          <a>Modulos</a>
          <a>Especiales</a>
          <a>Miscelania</a>

          <button id="connect-wallet" onClick={handleWallet} >{!account ? 'Usuario no conectado' : account}</button>
        </div>
      </div>
    );
}

export default Header;