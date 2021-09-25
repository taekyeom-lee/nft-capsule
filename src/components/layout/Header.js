import { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RiWallet3Line, RiCapsuleFill } from 'react-icons/ri';
import { BiUserCircle } from 'react-icons/bi';
import { HiOutlineSearch } from 'react-icons/hi';

import Dropdown from '../ui/Dropdown';
import SideModal from '../ui/SideModal';
import Backdrop from '../ui/Backdrop';
import classes from './Header.module.css';

import girl from '../../resources/img/girl.jpg';

function Header() {
  const [xPosition, setXPosition] = useState(0);
  const [yPosition, setYPosition] = useState(0);
  const [statsIsOver, setStatsIsOver] = useState(false);
  const [accountIsOver, setAccountIsOver] = useState(false);
  const [walletIsOpen, setWalletIsOpen] = useState(false);

  const serchInputRef = useRef(null);
  const statsRef = useRef(null);
  const accountRef = useRef(null);
  const walletRef = useRef(null);

  const selected = useSelector((state) => state.account);

  const clickHeader = () => {
    // walletIsOpen && closeWallet();
  };

  const focusInput = () => {
    serchInputRef.current.classList.add(classes.focus);
  };

  const blurInput = () => {
    serchInputRef.current.classList.remove(classes.focus);
  };

  const mouseOverStats = () => {
    const position = statsRef.current.getBoundingClientRect();
    setXPosition(position.x + position.width - 220);
    setYPosition(position.y + position.height);
    setStatsIsOver(true);
  };

  const mouseLeaveStats = () => {
    setStatsIsOver(false);
  };

  const mouseOverAccount = () => {
    const position = accountRef.current.getBoundingClientRect();
    setXPosition(position.x + position.width - 220);
    setYPosition(position.y + position.height);
    setAccountIsOver(true);
  };

  const mouseLeaveAccount = () => {
    setAccountIsOver(false);
  };

  const clickWallet = () => {
    setWalletIsOpen((prevState) => !prevState);
  };

  const closeWallet = () => {
    setWalletIsOpen(false);
  };

  useEffect(() => {
    if (walletIsOpen) {
      walletRef.current.classList.add(classes.clicked);
    } else {
      walletRef.current.classList.remove(classes.clicked);
    }
  });

  return (
    <div className={classes.header} onClick={clickHeader}>
      <div className={classes.logo}>
        <div>NFT</div>
        <RiCapsuleFill className={classes.logoImg} />
      </div>
      <div className={classes.searchInput} ref={serchInputRef}>
        <HiOutlineSearch className={classes.searchImg} />
        <input
          className={classes.input}
          onFocus={focusInput}
          onBlur={blurInput}
          placeholder="검색하기"
        />
      </div>
      <div className={classes.items}>
        <div
          className={classes.item}
          ref={statsRef}
          onMouseOver={mouseOverStats}
          onMouseLeave={mouseLeaveStats}
        >
          <div>Stats</div>
          {statsIsOver && <Dropdown type="stats" x={xPosition} y={yPosition} />}
        </div>
        <div
          className={classes.item}
          ref={accountRef}
          onMouseOver={mouseOverAccount}
          onMouseLeave={mouseLeaveAccount}
        >
          {selected.address ? (
            <img className={classes.walletImg} alt={girl} src={girl} />
          ) : (
            <BiUserCircle className={classes.img} />
          )}
          {accountIsOver && (
            <Dropdown type="accout" x={xPosition} y={yPosition} />
          )}
        </div>
        <div className={classes.item} ref={walletRef} onClick={clickWallet}>
          <RiWallet3Line className={classes.img} />
        </div>
        {walletIsOpen && <SideModal />}
        {walletIsOpen && <Backdrop onClose={closeWallet} />}
      </div>
    </div>
  );
}

export default Header;
