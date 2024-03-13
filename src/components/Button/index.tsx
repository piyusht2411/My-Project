import React from 'react';
import styles from './index.module.scss';

type ButtonProps = {
  label: string;
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
};

const Button = (props: ButtonProps) => {
  const { label, onClick, className, icon } = props;

  return (
    <button
      style={icon ? { gap: '0.5rem' } : {}}
      className={`${styles.button} ${className}`}
      onClick={onClick}
      //
    >
      <div>{icon && <span>{icon}</span>}</div>
      <div>{label}</div>
    </button>
  );
};

export default Button;
