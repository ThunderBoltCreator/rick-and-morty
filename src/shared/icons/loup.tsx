import { forwardRef } from 'react'
import type { Ref, SVGProps } from 'react'
const LoupIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg height={24} ref={ref} width={24} xmlns={'http://www.w3.org/2000/svg'} {...props}>
    <path
      d={
        'm20.71 19.29-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1.002 1.002 0 0 0 1.639-.325 1 1 0 0 0-.219-1.095ZM5 11a6 6 0 1 1 12 0 6 6 0 0 1-12 0Z'
      }
    />
  </svg>
)
const ForwardRef = forwardRef(LoupIcon)

export default ForwardRef
