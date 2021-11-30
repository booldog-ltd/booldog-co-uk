import React from 'react';
import styles from './typography.module.scss';

interface Props {
  size: 'xsmall' | 'small' | 'medium' | 'large';
}

export const Text: React.FC<Props> = ({ size, children }) => {
  return <p className={`${styles.text} ${styles[size]}`}>{children}</p>;
};
