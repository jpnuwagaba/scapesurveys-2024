import React from 'react'
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const Contactform = () => {
  return (
    <>
      <form className="grid gap-4">
          <div className="grid gap-2">
            <Input id="name" placeholder="Your Name" />
          </div>
          <div className="grid gap-2">
            <Input id="email" type="email" placeholder="Your Email" />
          </div>
          <div className="grid gap-2">
            <Input id="phone" placeholder="Phone Number" />
          </div>
          <div className="grid gap-2">
            <Textarea id="message" placeholder="Message" className="min-h-[150px]" />
          </div>
          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>
    </>
  )
}

export default Contactform