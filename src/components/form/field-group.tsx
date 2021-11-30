import React from 'react';
import styles from './form.module.scss';

interface Props {}

export const FieldGroup: React.FC<Props> = ({ children }) => {
  return <div className={styles.group}>{children}</div>;
};
