import styles from './index.module.scss';

type ButtonProps = {
  label: string;
  onClick?: () => void;
  className?: string;
};
const Button = (props: ButtonProps) => {
  const { label, onClick, className } = props;

  return (
    <button className={`${styles.button} ${className}`} onClick={onClick}>
      {label}
    </button>
  );
};
export default Button;
