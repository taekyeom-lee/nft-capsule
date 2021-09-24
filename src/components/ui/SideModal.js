import { BiUserCircle } from 'react-icons/bi';

import classes from './SideModal.module.css';

import metamask from '../../resources/img/metamask.png';

function SideModal() {
  const clickButton = async () => {
    if (typeof window.ethereum !== 'undefined') {
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });
      const account = accounts[0];

      console.log(account);
    }
  };

  return (
    <div className={classes.sideModal}>
      <div className={classes.title}>
        <BiUserCircle className={classes.titleImg} />
        <div className={classes.titleText}>My Wallet</div>
      </div>
      <div className={classes.divContainer}>
        <div className={classes.text}>
          Connect with wallet info providers or create a new one.
        </div>
        <button className={classes.button} onClick={clickButton}>
          <img className={classes.buttonImg} alt={metamask} src={metamask} />
          <div className={classes.buttonText}>MetaMask</div>
        </button>
      </div>
    </div>
  );
}

export default SideModal;
