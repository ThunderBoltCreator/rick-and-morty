import s from './text-field.module.scss'
import { ComponentPropsWithoutRef, forwardRef, ReactElement, useId } from 'react'
import { clsx } from 'clsx'
import { IconWrapper } from 'shared/common/icon-wrapper'
import { Typography } from 'shared/common/typography'

export type TextFieldProps = {
  errorMessage?: string
  label?: string
  leftIcon?: ReactElement | null
  onValueChange?: (value: string) => void
  rightIcon?: ReactElement | null
} & ComponentPropsWithoutRef<'input'>

export const BaseField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    { className, disabled, errorMessage, id, label, leftIcon, placeholder, rightIcon, ...props },
    ref
  ) => {
    const myId = useId()

    const styles = {
      errorMessage: clsx(s.errorMessage),
      input: clsx(s.input, errorMessage && s.error),
      inputWrapper: clsx(s.wrapper),
      leftIcon: clsx(s.icon, s.leftIcon, errorMessage && s.error),
      rightIcon: clsx(s.icon, s.rightIcon, errorMessage && s.error),
      root: clsx(s.root),
      title: clsx(s.title),
    }

    return (
      <div className={clsx(styles.root, className)}>
        {label && (
          <Typography as={'label'} className={styles.title} htmlFor={id || myId} variant={'body2'}>
            {label}
          </Typography>
        )}
        <div className={styles.inputWrapper}>
          <input
            className={styles.input}
            disabled={disabled}
            id={id || myId}
            placeholder={errorMessage ? errorMessage : placeholder}
            ref={ref}
            {...props}
          />
          {leftIcon && <IconWrapper className={styles.leftIcon}>{leftIcon}</IconWrapper>}
          {rightIcon && <IconWrapper className={styles.rightIcon}>{rightIcon}</IconWrapper>}
        </div>
        {errorMessage && (
          <Typography className={styles.errorMessage} variant={'error'}>
            {errorMessage}
          </Typography>
        )}
      </div>
    )
  }
)
