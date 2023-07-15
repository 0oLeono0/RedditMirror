import React from 'react';
import styles from './layout.css';
import { useDispatch } from 'react-redux';
import { useToken } from '../../hooks/useToken';

interface ILayoutProps {
  children?: React.ReactNode
}

export function Layout({ children }: ILayoutProps) {
  const [token] = useToken();
  const dispatch = useDispatch();
  dispatch({ type: 'SET_TOKEN', token: token})
  return (
    <div className={styles.layout}>
      {children}
    </div>
  );
}
