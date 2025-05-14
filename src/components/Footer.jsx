import React from 'react';
import { FaGithub } from 'react-icons/fa';
import {AiFillLinkedin } from 'react-icons/ai';
import { FiMail } from 'react-icons/fi';
import { FaInstagram } from 'react-icons/fa';





const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<div className='bg-slate-900 p-4' style={{ cursor: 'default' }}>
			<div className='flex justify-between flex-wrap gap-4'>
				<p className='text-white text-center w-full sm:w-auto font-light'>© {year} Portfolio All rights reserved.</p>
				<div className='text-white flex justify-around sm:w-[250px] w-full'>
					
					<a href="mailto:karthyavinash2004@gmail.com" className='transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1' style={{ cursor: 'pointer' }}>
						<FiMail className='text-xl' />
					</a>

					<a href="https://www.linkedin.com/in/karthikeyan-s-797786257/" target='_blank' className='transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1' style={{ cursor: 'pointer' }}>
						<AiFillLinkedin className='text-xl' />
					</a>
					<a href="https://github.com/Kxrthikeyan76" target='_blank' className='transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1' style={{ cursor: 'pointer' }} >
						<FaGithub className='text-xl' />
					</a>
					<a
  href="https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite&utm_medium=copy_link&utm_content=4uwtxbt"
  target="_blank"
  rel="noopener noreferrer"
  className="text-white hover:text-pink-500 transition-transform transform hover:scale-110"
>
  <FaInstagram size={24} />
</a>


					
				</div>
			</div>
		</div>
	);
}

export default Footer;