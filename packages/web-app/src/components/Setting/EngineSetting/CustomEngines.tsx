import { Button, Dialog } from '@onetab/ui'
import { type FC, useState } from 'react'

export const CustomEngines: FC = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className="px-[70px]">
      <Button className="w-full" onClick={() => setOpen(true)}>添加</Button>

      <Dialog open={open} onOpenChange={setOpen}></Dialog>
    </div>
  )
}
