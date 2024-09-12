import { events } from '@/events'
import { Dialog } from '@onetab/ui'
import { useMount } from 'ahooks'
import { useState } from 'react'
import type { FC } from 'react'

export const AddAppModal: FC = () => {
  const [open, setOpen] = useState(false)

  useMount(() => {
    events.on('addApp', () => setOpen(true))
  })

  return (
    <Dialog open={open} onOpenChange={setOpen} className="max-w-[400px] overflow-hidden h-[551px] bg-color-b3 px-[50px] py-[33px]">
    </Dialog>
  )
}
