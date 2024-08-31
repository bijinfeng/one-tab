import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgAddCircle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" ref={ref} {...props}>
    <g fill="currentColor" fillRule="evenodd">
      <path
        fillRule="nonzero"
        d="M14 3C7.925 3 3 7.925 3 14s4.925 11 11 11 11-4.925 11-11S20.075 3 14 3m0 2a9 9 0 1 1 0 18 9 9 0 0 1 0-18"
      />
      <path d="M14 10a1 1 0 0 1 1 1v2h2a1 1 0 0 1 0 2h-2v2a1 1 0 0 1-2 0v-2h-2a1 1 0 0 1 0-2h2v-2a1 1 0 0 1 1-1" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgAddCircle);
export default ForwardRef;
