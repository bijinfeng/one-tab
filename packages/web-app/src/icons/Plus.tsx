import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgPlus = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" ref={ref} {...props}>
    <path
      fill="#FFF"
      fillRule="evenodd"
      d="M12 2a1 1 0 0 1 1 1v8h8a1 1 0 0 1 0 2h-8v8a1 1 0 0 1-2 0v-8H3a1 1 0 0 1 0-2h8V3a1 1 0 0 1 1-1"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgPlus);
export default ForwardRef;
