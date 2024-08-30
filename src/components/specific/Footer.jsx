import { Facebook, LinkedinIcon, Twitter } from "lucide-react"
import React from "react"


const Footer = () => {
  return (
    <footer className='border-t border-t-gray-200 py-8'>
        <div className='container mx-auto px-4'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
            <div className='mb-4 md:mb-0'>
            <h2 className='text-xl font-bold'>YouHR</h2>
            <p className='text-sm'>© 2024 Your Company. All rights reserved.</p>
            </div>

            <div className='flex space-x-4 mt-4 md:mt-0'>
    <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
        <Facebook />
    </a>
    <a href="https://www.twitter.com/yourpage" target="_blank" rel="noopener noreferrer">
        <Twitter/>
    </a>
    <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
        <LinkedinIcon/>
    </a>
</div>
        </div>
        
        </div>
    </footer>
  )
}

export default Footer