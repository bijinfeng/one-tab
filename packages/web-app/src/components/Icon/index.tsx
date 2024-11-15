import { forwardRef, type SVGProps } from "react";

interface IconProps extends SVGProps<SVGSVGElement> {
  name: string;
  size?: string | number;
}

export const Icon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  const { size = "1em", name, ...rest } = props;

  return (
    <svg ref={ref} width={size} height={size} {...rest}>
      <use href={`#${name}`} />
    </svg>
  )
})
