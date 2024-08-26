import { cn } from "@pingtou/shadcn-ui"
import type { FC, PropsWithChildren } from "react"

interface IconButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "default" | "large" | "small"
  ghost?: boolean
}

export const IconButton: FC<PropsWithChildren<IconButtonProps>> = ({ children, className, ...rest }) => {
  return (
    <div
      {...rest}
      className={cn("icon-box flex h-[28px] w-[28px] cursor-pointer items-center justify-center rounded-[8px] bg-opacity-80 hover:bg-color-white hover:bg-opacity-80", className)}
    >
      {children}
    </div>
  )
}
