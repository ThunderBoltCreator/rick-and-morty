import { forwardRef } from 'react'
import type { Ref, SVGProps } from 'react'
const CrossIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg height={16} ref={ref} width={16} xmlns={'http://www.w3.org/2000/svg'} {...props}>
    <path
      d={
        'm8.94 8 2.867-2.86a.67.67 0 0 0-.947-.947L8 7.06 5.14 4.193a.67.67 0 0 0-.947.947L7.06 8l-2.867 2.86a.667.667 0 0 0 .217 1.093.667.667 0 0 0 .73-.146L8 8.94l2.86 2.867a.668.668 0 0 0 1.144-.474.668.668 0 0 0-.197-.473L8.94 8Z'
      }
    />
  </svg>
)
const ForwardRef = forwardRef(CrossIcon)

export default ForwardRef
