import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgComma = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" ref={ref} {...props}>
    <path fill="#FFF" fillRule="evenodd" d="M12 3v9h2v6h2l2-7V3zM2 3v9h2v6h2l2-7V3z" opacity={0.6} />
  </svg>
);
const ForwardRef = forwardRef(SvgComma);
export default ForwardRef;
