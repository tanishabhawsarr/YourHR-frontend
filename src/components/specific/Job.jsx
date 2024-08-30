import React from 'react'
import { Button } from '../ui/button'
import { Bookmark } from 'lucide-react'
import { Avatar, AvatarImage } from '../ui/avatar'
import logo from '../../assets/logo.png'
import { Badge } from '../ui/badge'

const Job = () => {
  return (
    <div className='p-5 rounded-md shadow-xl bg-white border border-gray-100'>
    <div className='flex items-center justify-between'>
    <p className='text-sm text-gray-500'>2 Days Ago</p>
    <Button classname="rounded-full" variant="outline" size="icon"><Bookmark/></Button>
    </div>

    <div className='flex items-center gap-2 my-2'>
    <Button classname="p-6" variant="outline" size="icon">
        <Avatar>
            <AvatarImage src={logo} />
        </Avatar>
    </Button>
     <div>
     <h1 className='font-medium text-lg'>Company Name</h1>
     <p className='text-sm text-gray-500'>India</p>
     </div>
    </div>

    <div>
        <h1 className='font-bold text-lg my-2'>Title</h1>
        <p className='text-sm text-gray-600'>lorem ipsum set bet injit jjhf lorem ipsum set bet injit jjhf lorem ipsum set bet injit jjhf lorem ipsum set bet injit jjhf lorem ipsum set bet injit</p>
    </div>

    <div className='flex items-center mt-4 gap-2'>
        <Badge className={"text-blue-700 font-bold"} variant="ghost">12 Positions</Badge>
        <Badge className={"text-[#f83002] font-bold"} variant="ghost">Part Time</Badge>
        <Badge className={"text-[#7209b7] font-bold"} variant="ghost">3LPA</Badge>
     </div>

     <div className='flex items-center mt-4 gap-4'>
        <Button variant="outline">Details</Button>
        <Button className={"bg-[#7209b7]"}>Save for Later</Button>
     </div>
    </div>
  )
}

export default Job