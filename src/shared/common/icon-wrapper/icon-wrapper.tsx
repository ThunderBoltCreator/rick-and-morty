import type { ReactElement } from 'react'
import { cloneElement, memo } from 'react'

type IconWrapperProps = {
  children: ReactElement
  className?: string
}
export const IconWrapper = memo(({ children, className }: IconWrapperProps) =>
  cloneElement(children, { className })
)
