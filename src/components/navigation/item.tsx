import React from 'react';
import { useNativeInView } from '../../hooks/use-in-view';
import styles from './navigation.module.scss';

interface Props {
  id: string;
  title: string;
}

export const Item: React.FC<Props> = ({ id, title }) => {
  const SSR = (import.meta as any)?.env.SSR;
  const isInView = useNativeInView(
    SSR ? null : document.getElementById(id),
    SSR ? 200 : window.innerHeight >> 1
  );
  const classes = `${styles.item} ${isInView ? styles.active : ''}`;

  return (
    <a className={classes} href={`#${id}`}>
      {title}
    </a>
  );
};
