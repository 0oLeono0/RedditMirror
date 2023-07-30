import React from 'react';
import styles from './layout.css';
import { useToken } from '../../hooks/useToken';

interface ILayoutProps {
  children?: React.ReactNode
}

export function Layout({ children }: ILayoutProps) {
  const token = useToken()
  return (
    <div className={styles.layout}>
      {children}
    </div>
  );
}
