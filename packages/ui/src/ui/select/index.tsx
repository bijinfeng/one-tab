import { cn } from "@/utils";
import { CSSProperties, forwardRef } from "react";
import { SelectContent, SelectItem, Select as SelectPrimitive, SelectTrigger, SelectValue } from "./select";

export interface SelectProps extends Omit<React.ComponentPropsWithoutRef<typeof SelectPrimitive>, "onValueChange"> {
  className?: string;
  style?: CSSProperties;
  options?: { value: string; label: React.ReactNode }[];
  placeholder?: string;
  side?: "top" | "right" | "bottom" | "left";
  align?: "center" | "start" | "end";
  onChange?: (value: string) => void
}

export type SelectRef = React.ElementRef<typeof SelectTrigger>

export const Select = forwardRef<SelectRef, SelectProps>((props, ref) => {
  const { className, style, options, placeholder, side, align, onChange, ...rest } = props;

  return (
    <SelectPrimitive {...rest} onValueChange={onChange}>
      <SelectTrigger ref={ref} className={cn(className)} style={style}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent side={side} align={align}>
        {options?.map((item) => (
          <SelectItem value={item.value} key={item.value}>{item.label}</SelectItem>
        ))}
      </SelectContent>
    </SelectPrimitive>
  )
})
