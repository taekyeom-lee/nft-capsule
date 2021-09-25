import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BiUserCircle } from 'react-icons/bi';
import { RiArrowDropDownLine } from 'react-icons/ri';

import { setAddress } from '../../store/action/accountAction';
import classes from './SideModal.module.css';

import girl from '../../resources/img/girl.jpg';
import metamask from '../../resources/img/metamask.png';

function SideModal() {
  const [abbreviated, setAbbreviated] = useState('');

  const selected = useSelector((state) => state.account);

  const dispatch = useDispatch();

  const clickButton = async () => {
    if (typeof window.ethereum !== 'undefined') {
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });
      const account = accounts[0];

      dispatch(setAddress(account));
    }
  };

  useEffect(() => {
    if (selected.address) {
      const frontOfAddress = selected.address.slice(0, 6);
      const endOfAddress = selected.address.slice(-4);

      const combineAddress = frontOfAddress + '...' + endOfAddress;

      setAbbreviated(combineAddress);
    }
  }, [setAbbreviated, selected.address]);

  return (
    <div className={classes.sideModal}>
      <div className={classes.title}>
        {selected.address ? (
          <img className={classes.walletImg} alt={girl} src={girl} />
        ) : (
          <BiUserCircle className={classes.titleImg} />
        )}
        <div className={classes.titleText}>My wallet</div>
        <RiArrowDropDownLine className={classes.titleIcon} />
        <div className={classes.titleAddress}>{abbreviated}</div>
      </div>
      {selected.address ? (
        <div className={classes.divContainer}>
          <div className={classes.walletBalance}>
            <div className={classes.walletText}>Total balnace</div>
            <div className={classes.walletNumber}>$0.00 USD</div>
          </div>
        </div>
      ) : (
        <div className={classes.divContainer}>
          <div className={classes.text}>
            Connect with wallet info providers or create a new one.
          </div>
          <button className={classes.button} onClick={clickButton}>
            <img className={classes.buttonImg} alt={metamask} src={metamask} />
            <div className={classes.buttonText}>MetaMask</div>
          </button>
        </div>
      )}
    </div>
  );
}

export default SideModal;
