import styles from './button.module.css'

interface ButtonProps {
  onClick?: () => void
  children?: React.ReactNode
}

export const Button = ({ onClick, children }: ButtonProps) => (
  <button className={styles.button} onClick={onClick}>
    {children}
  </button>
)
