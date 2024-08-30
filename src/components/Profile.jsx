import React from 'react'
import Navbar from './shared/Navbar'
import { Avatar, AvatarImage } from './ui/avatar'
import img from "../assets/logo.png"
import { Contact, Mail } from 'lucide-react'
import { Badge } from './ui/badge'
import { Label } from './ui/label'
import { useSelector } from 'react-redux';

const skills=["HTML","CSS","Javascript","Reactjs"];
const isResume=true;

const Profile = () => {

 const {user}=useSelector(store=>store.auth);

  return (
    <div>
        <Navbar/>
        <div className='max-w-7xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8'>
            <div className='flex items-center gap-4'>
            <Avatar className="h-24 w-24">
                <AvatarImage src={img} alt="profile"/>
            </Avatar>
            <div>
            <h1 className='font-medium text-xl'>{user?.fullname}</h1>
            <p>{user?.profile?.bio} </p>
            </div>
            </div>

            <div className='my-5'>
                <div className='flex items-center gap-3 my-2'>
                <Mail/>
                <span>{user?.email}</span>
                </div>
                <div className='flex items-center gap-3 my-2'>
                <Contact/>
                <span>{user?.phoneNumber}</span>
                </div>
            </div>
            
            <div className='my-5'>
                <h1>Skills</h1>
                <div className='flex items-center gap-1'>
                {
                    skills.length != 0 ? skills.map((item,index)=><Badge key={index}>{item}</Badge>) :
                    (<span>No Skills</span>)
                }
                </div>
            </div>

            <div className='grid w-full max-w-sm items-center gap-1.5' >
                <Label className="text-md font-bold">Resume</Label>
                {
                    isResume ? <a target='blank' href={user?.profile?.resume} className='text-blue-500 w-full hover:underline cursor-pointer'>{user?.profile?.resumeOriginalName}</a> : <span>NA</span>
                }
            </div>
        </div>
    </div>
  )
}

export default Profile