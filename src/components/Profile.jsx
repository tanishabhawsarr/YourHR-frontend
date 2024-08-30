import React from 'react'
import Navbar from './shared/Navbar'
import { Avatar, AvatarImage } from './ui/avatar'
import img from "../assets/logo.png"
import { Contact, Mail } from 'lucide-react'
import { Badge } from './ui/badge'
import { Label } from './ui/label'
import { useSelector } from 'react-redux';

const skills = ["HTML", "CSS", "Javascript", "Reactjs"];
const isResume = true;

const Profile = () => {
  const { user } = useSelector(store => store.auth);

  return (
    <div>
      <Navbar />
      <div className='max-w-7xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-4 sm:p-6 lg:p-8'>
        <div className='flex lg:flex-row lg:items-center sm:flex-row items-center sm:items-start gap-4'>
          <Avatar className="h-24 w-24 sm:h-32 sm:w-32">
            <AvatarImage src={img} alt="profile" />
          </Avatar>
          <div>
            <h1 className='font-medium text-lg sm:text-xl lg:text-2xl'>{user?.fullname}</h1>
            <p className='text-sm sm:text-base'>{user?.profile?.bio}</p>
          </div>
        </div>

        <div className='my-4 sm:my-6'>
          <div className='flex items-center gap-3 my-2'>
            <Mail />
            <span className='text-sm sm:text-base'>{user?.email}</span>
          </div>
          <div className='flex items-center gap-3 my-2'>
            <Contact />
            <span className='text-sm sm:text-base'>{user?.phoneNumber}</span>
          </div>
        </div>

        <div className='my-4 sm:my-6'>
          <h2 className='text-lg sm:text-xl font-semibold'>Skills</h2>
          <div className='flex flex-wrap gap-2'>
            {
              skills.length !== 0 ? skills.map((item, index) => (
                <Badge key={index} className='text-sm sm:text-base'>{item}</Badge>
              )) : (
                <span>No Skills</span>
              )
            }
          </div>
        </div>

        <div className='grid w-full max-w-sm items-center gap-1.5'>
          <Label className="text-md font-bold">Resume</Label>
          {
            isResume ? (
              <a target='_blank' rel='noopener noreferrer' href={user?.profile?.resume} className='text-blue-500 hover:underline cursor-pointer'>
                {user?.profile?.resumeOriginalName}
              </a>
            ) : (
              <span>NA</span>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Profile;
