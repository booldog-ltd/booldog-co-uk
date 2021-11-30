import React from 'react';
import styles from './navigation.module.scss';

interface Props {}

export const Navigation: React.FC = ({ children }) => {
  return <nav className={styles.navigation}>{children}</nav>;
};
