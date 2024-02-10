import type { ComponentPropsWithoutRef, ElementType, ReactElement } from 'react'

import { clsx } from 'clsx'

import s from './button.module.scss'
import { IconWrapper } from 'shared/common/icon-wrapper'

export type ButtonProps<T extends ElementType> = {
  as?: T
  fullWidth?: boolean
  icon?: ReactElement
  iconPosition?: 'left' | 'right'
  variant?: 'link' | 'outlined' | 'primary' | 'secondary'
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>({
  as,
  children,
  className,
  disabled,
  fullWidth,
  icon,
  iconPosition = 'left',
  variant = 'primary',
  ...rest
}: ButtonProps<T>) => {
  const Component = as || 'button'
  const styles = {
    icon: clsx(s.icon, s[iconPosition]),
    root: clsx(
      s.button,
      s[variant],
      fullWidth ? s.fullWidth : null,
      className ? className : null,
      disabled ? s.disabled : null,
      children ? '' : s.withOutChildren
    ),
  }

  return (
    <Component className={styles.root} disabled={disabled} {...rest}>
      {icon && <IconWrapper className={styles.icon}>{icon}</IconWrapper>}
      {children}
    </Component>
  )
}
