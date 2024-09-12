import logoBgIcon from '@/assets/images/login-bg.png'
import logogIcon from '@/assets/onetab-outline.png'
import { events } from '@/events'
import { Button, Dialog } from '@onetab/ui'
import { Form, Input } from '@pingtou/shadcn-ui'
import { useMount } from 'ahooks'
import { useRef, useState } from 'react'
import type { FormInstance } from '@pingtou/shadcn-ui'

interface FormValue {
  name: string
  password: string
}

export function LoginModal() {
  const [open, setOpen] = useState(false)
  const formRef = useRef<FormInstance<FormValue>>(null)

  useMount(() => {
    events.on('login', () => setOpen(true))
  })

  const handleSubmit = async () => {
    const validated = await formRef.current?.trigger()
    if (!validated)
      return

    const value = formRef.current!.getValues()

    return value
  }

  return (
    <Dialog open={open} onOpenChange={setOpen} className="max-w-[400px] overflow-hidden h-[551px] bg-color-b3 px-[50px] py-[33px]">
      <div
        className="pointer-events-none absolute left-0 bottom-0 flex h-[74%] w-full flex-col z-[-1]"
        data-v-782c9a14=""
      >
        <div
          className="wave-img h-[25px] flex-shrink-0 bg-color-b4"
          data-v-782c9a14=""
          style={{
            maskImage: `url(${logoBgIcon})`,
            maskPosition: 'center',
            maskRepeat: 'no-repeat',
            maskSize: '100%',
          }}
        >
        </div>
        <div className="flex-1 bg-color-b4" data-v-782c9a14=""></div>
      </div>

      <div>
        <div className="flex items-center justify-center gap-2">
          <img src={logogIcon} className="w-10 h-10" alt="logo" />
          <span className="text-color-blue font-black text-3xl">Onetab</span>
        </div>
        <div className="relative mt-[20px] mb-[96px] text-center cursor-auto font-bold text-[20px] text-color-t2">
          欢迎使用您的账户
        </div>

        <Form<FormValue> form={formRef}>
          <Form.Item name="name" required>
            <Input placeholder="邮箱" className="h-[42px]" />
          </Form.Item>
          <Form.Item name="password" required>
            <Input placeholder="密码" type="password" className="h-[42px]" />
          </Form.Item>
        </Form>

        <Button type="submit" className="w-full mt-11" onClick={handleSubmit}>
          登录
        </Button>
        <button className="mt-[12px] w-full font-normal text-[14px] text-color-t3 text-center">忘记密码？</button>

        <div className="mt-[32px] flex items-center justify-between">
          <span className="text-[14px] text-color-t3">还没账号？</span>
          <Button variant="outline">马上注册</Button>
        </div>
      </div>
    </Dialog>
  )
}
