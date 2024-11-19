import { Button as MantineButton, ButtonProps } from '@mantine/core'
import classes from './Button.module.css'

interface ExtendedButtonProps extends ButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  tabIndex?: number
  'aria-label'?: string
  disabled?: boolean
}

export default function Button({
  onClick,
  tabIndex = 0,
  'aria-label': ariaLabel,
  disabled,
  ...props
}: ExtendedButtonProps) {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!disabled && onClick) {
      onClick(event)
    }
  }

  return (
    <MantineButton
      size="md"
      classNames={{ root: classes.Button }}
      onClick={handleClick}
      tabIndex={tabIndex}
      aria-label={ariaLabel}
      disabled={disabled}
      {...props}
    />
  )
}
