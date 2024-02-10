import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import { clsx } from 'clsx'

import s from './card.module.scss'
type CardProps<T extends ElementType> = {
  as?: T
  children: ReactNode
  className?: string
}

export function Card<T extends ElementType = 'div'>({
  as,
  className,
  ...props
}: CardProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof CardProps<T>>) {
  const Component = as || 'div'
  const styles = clsx(s.card, className)

  return <Component {...props} className={styles} />
}
