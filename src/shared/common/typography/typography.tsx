import type { ComponentPropsWithoutRef, ElementType } from 'react'

import { clsx } from 'clsx'

import s from './typography.module.scss'

const components = {
  body1: 'p',
  body2: 'p',
  caption: 'span',
  error: 'span',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  large: 'h1',
  link1: 'a',
  link2: 'a',
  overline: 'span',
  subtitle1: 'h5',
  subtitle2: 'h6',
} as const

type TypographyProps<T extends ElementType> = {
  as?: T
  className?: string
  variant?: keyof typeof components
} & ComponentPropsWithoutRef<T>

export function Typography<T extends ElementType = 'p'>({
  as,
  className,
  variant = 'body1',
  ...props
}: TypographyProps<T>) {
  const Component: ElementType = as || components[variant] || 'p'
  const styles = clsx(s.root, s[variant], className)

  return <Component {...props} className={styles} />
}
