import React from 'react';
import styles from './index.module.scss';

type InputBoxProps = {
  label?: string;
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
  img?: string;
  placeholder?: string;
};

const InputBox = (props: InputBoxProps) => {
  const { icon, img, placeholder } = props;
  return (
    <div className={styles.surroundingDiv}>
      <div className={styles.innerDiv}>
        <div className={styles.icon}>{icon ?? (img && <img src={img} />)}</div>
        <div className={styles.text}>
          <input type="number" className={styles.inputBox} placeholder={placeholder ?? '1000'} />
        </div>
        <div className={styles.optional}></div>
      </div>
    </div>
  );
};

export default InputBox;
