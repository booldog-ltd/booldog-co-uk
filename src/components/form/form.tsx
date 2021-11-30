import React, { useRef } from 'react';
import styles from './form.module.scss';

interface Props
  extends Omit<React.FormHTMLAttributes<HTMLFormElement>, 'onSubmit'> {
  onSubmit?: (
    e: React.FormEvent<HTMLFormElement>,
    form: React.RefObject<HTMLFormElement>['current']
  ) => void;
}

export const Form: React.FC<Props> = ({ children, onSubmit, ...props }) => {
  const ref = useRef<HTMLFormElement>(null);

  return (
    <form
      {...props}
      className={styles.form}
      ref={ref}
      onSubmit={onSubmit && ((e) => onSubmit(e, ref.current))}
    >
      {children}
    </form>
  );
};
