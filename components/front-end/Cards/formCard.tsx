"use client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,

} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
  name: z.string().min(2).max(50),
  email : z.string().email(),
  message : z.string().min(10).max(500),
})
const FormCard= () => {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {

    console.log(values)
  }

return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input className="border-white/40 rounded-xl " {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input className="border-white/40 rounded-xl "{...field} />
              </FormControl>
              
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Input className="border-white/40 rounded-xl " {...field} />
              </FormControl>

              
            </FormItem>
          )}
        />
        <button type="submit" className="p-[1px] hover:scale-110 transition-all  cursor-pointer w-32 rounded-xl bg-gradient-to-r to-pink-500 from-blue-500 relative">
        <div className="bg-gray-900 rounded-xl p-2 ">
             <div className='w-12 h-6 bg-blue-500 blur-lg rounded-full absolute right-[60%] top-2 '/>
              <div className='w-12 h-6 bg-pink-500 blur-lg rounded-full absolute  left-[60%] top-2 '/>
            <p className="text-white text-xs uppercase font-bold">Send</p>
        </div>
        </button>
      </form>
    </Form>
  )
}

export default FormCard