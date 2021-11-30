import React from 'react';
import styles from './buttons.module.scss';

interface Props {
  size: string;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
  href?: string;
  text?: string;
  onClick?: () => void;
}

export const PillButton: React.FC<Props> = ({
  href,
  size,
  type,
  children,
  text,
  onClick
}) => {
  return href ? (
    <a className={`${styles.pill} ${styles[size]}`} href={href}>
      {children}
    </a>
  ) : (
    <button
      type={type || 'button'}
      className={`${styles.pill} ${styles[size]}`}
      onClick={onClick}
    >
      {text || children}
    </button>
  );
};
