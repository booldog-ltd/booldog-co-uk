import React from 'react';
import styles from './layout.module.scss';

interface Props {
  padding: 'large' | 'small';
  spaceBetween?: boolean;
}

export const Box: React.FC<Props> = ({ padding, spaceBetween, children }) => {
  return (
    <div
      className={`${styles.box} ${styles[padding]} ${
        spaceBetween ? styles.space : ''
      }`}
    >
      {children}
    </div>
  );
};
