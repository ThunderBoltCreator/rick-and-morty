import type { Ref, SVGProps } from 'react'
import { forwardRef, memo } from 'react'

const ArrowBack = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    height={24}
    ref={ref}
    width={24}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <path
      d={
        'M19 11H7.14l3.63-4.36a1 1 0 0 0-1.54-1.28l-5 6-.09.15c0 .05 0 .08-.07.13A1 1 0 0 0 4 12a1 1 0 0 0 .07.36c0 .05 0 .08.07.13l.09.15 5 6a1 1 0 0 0 1.54-1.28L7.14 13H19a1 1 0 0 0 0-2Z'
      }
      fill={'currentcolor'}
    />
  </svg>
)
const ForwardRef = forwardRef(ArrowBack)
const Memo = memo(ForwardRef)

export default Memo
