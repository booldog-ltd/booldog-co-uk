import React from 'react';
import { PillButton } from '../buttons/pill-button';
import styles from './form.module.scss';

interface Props {
  type: 'text' | 'textarea' | 'submit';
  label?: string;
  id?: string;
  name?: string;
  placeholder?: string;
  ref?: React.MutableRefObject<any>;
  required?: boolean;
}

const fieldFactory = (props: Props, id?: string) => {
  const title = props.label || props.name;

  switch (props.type) {
    case 'text':
      return <input {...props} id={id} />;
    case 'textarea':
      return <textarea {...props} rows={6} id={id} />;
    case 'submit':
      return <PillButton size='large' type={props.type} text={title} />;
  }
};

export const Field: React.FC<Props> = (props) => {
  const id = props.id || props.name;
  const withLabel = props.type != 'submit';

  return (
    <div className={styles.field}>
      {withLabel && <label htmlFor={id}>{props.label || props.name}</label>}
      {fieldFactory(props, id)}
    </div>
  );
};
