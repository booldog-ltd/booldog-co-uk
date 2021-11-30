import React from 'react';
import styles from './typography.module.scss';

interface Props {
  size: 'large' | 'medium' | 'small';
}

export const Heading: React.FC<Props> = ({ size, children }) => {
  return <h1 className={`${styles.heading} ${styles[size]}`}>{children}</h1>;
};
