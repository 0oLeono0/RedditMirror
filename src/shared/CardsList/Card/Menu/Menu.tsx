import React, { useEffect, useRef, useState } from 'react';
import { Dropdown } from '../../../Dropdown';
import { EIcon, Icons } from '../../../Icon';
import styles from './menu.css';

export function Menu() {
  const [isDropdownOpened, setIsDropdownOpened] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({ x: 0, y: 0, h: 0});
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isDropdownOpened) {
      if (!btnRef.current) return;
    const buttonRect = btnRef.current.getBoundingClientRect();
    setDropdownPosition({ x: buttonRect.left - 60, y: buttonRect.top + 10 + window.scrollY, h: buttonRect.height });
    }
  }, [isDropdownOpened])

  return (
    <div className={styles.menu}>
      <button className={styles.menuButton} onClick={() => { setIsDropdownOpened(true); }} ref={btnRef}>
        <Icons name={EIcon.menu} />
      </button>

      {isDropdownOpened && (
        <Dropdown onClose={() => setIsDropdownOpened(false)} position={dropdownPosition}/>
      )}
    </div>
  )
}