import { ReactNode } from 'react'

import s from './layout.module.scss'
import { clsx } from 'clsx'

type ContainerProps = {
  children: ReactNode
  className: string
}

export function Container({ children, className }: ContainerProps) {
  return <div className={clsx(s.container, className)}>{children}</div>
}
