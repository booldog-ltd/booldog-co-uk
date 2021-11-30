import React from 'react';
import styles from './typography.module.scss';

interface Props {
  src: string;
  alt?: string;
}

export const Icon: React.FC<Props> = ({ alt, src }) => {
  return <img src={src} alt={alt} className={styles.icon} />;
};

export const IconGroup: React.FC = ({ children }) => {
  return <div className={styles.iconGroup}>{children}</div>;
};
