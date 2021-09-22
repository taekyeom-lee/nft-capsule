import { useEffect, useRef } from 'react';

import classes from './Dropdown.module.css'

function Dropdown(props) {
  const navRef = useRef(null);

  useEffect(() => {
    navRef.current.style.top = props.y;
    navRef.current.style.left = props.x;
    navRef.current.style = `top: ${props.y}px; left: ${props.x}px; visibility: visible;`
  });

  return (
    <div className={classes.itemList} ref={navRef}>
      {props.type === 'stats' && (
        <ul className={classes.items}>
          <li className={classes.item}>Rankings</li>
          <li className={classes.item}>Activity</li>
        </ul>
      )}
      {props.type === 'accout' && (
        <ul className={classes.items}>
          <li className={classes.item}>My Profile</li>
          <li className={classes.item}>My Collections</li>
          <li className={classes.item}>My Favorites</li>
          <li className={classes.item}>My Accout Settings</li>
        </ul>
      )}
    </div>
  );
}

export default Dropdown;