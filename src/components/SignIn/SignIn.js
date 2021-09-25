import { useSelector, useDispatch } from 'react-redux';
import { FiChevronRight } from 'react-icons/fi';

import { setAddress } from '../../store/action/accountAction';
import classes from './SignIn.module.css';

import metamask from '../../resources/img/metamask.png';

function SignIn() {
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

  return (
    <div className={classes.signin}>
      {selected.address ? (
        <div>Login Success</div>
      ) : (
        <div>
          <div className={classes.text}>Sign in to your wallet.</div>
          <div className={classes.imgWrapper}>
            <img className={classes.img} alt={metamask} src={metamask} />
          </div>
          <div className={classes.buttonWrapper}>
            <button className={classes.button} onClick={clickButton}>
              Sign In
            </button>
          </div>
          <div className={classes.subtextWrapper}>
            <FiChevronRight />
            <div className={classes.subtext}>Use a different wallet</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SignIn;
