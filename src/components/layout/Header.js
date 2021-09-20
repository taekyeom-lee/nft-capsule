import { useRef } from 'react';
import { RiWallet3Line, RiCapsuleFill } from 'react-icons/ri';
import { BiUserCircle } from 'react-icons/bi';
import { HiOutlineSearch } from 'react-icons/hi';

import classes from './Header.module.css';

function Header() {
  const serchInputRef = useRef(null);

  const focusInput = () => {
    serchInputRef.current.classList.add(classes.focus);
  };

  const blurInput = () => {
    serchInputRef.current.classList.remove(classes.focus);
  };

  return (
    <div className={classes.header}>
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
        <div className={classes.item}>Stats</div>
        <div className={classes.item}>
          <BiUserCircle className={classes.img} />
        </div>
        <div className={classes.item}>
          <RiWallet3Line className={classes.img} />
        </div>
      </div>
    </div>
  );
}

export default Header;
