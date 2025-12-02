import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <div className='h-[90vh] bg-gray-800 text-white'>
        <div className="">
            <h3 className="">Ganjala Clinic</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam cum eveniet soluta officia, delectus sunt ullam, obcaecati eaque cumque possimus nesciunt? Maiores corrupti, vero modi consequatur quaerat voluptas? Suscipit, quis?</p>
            <div className="">
                <FacebookIcon />
                <InstagramIcon />
                <XIcon />
                <YouTubeIcon />
            </div>
        </div>
        <div className="">
            <h4 className="">Quick Links</h4>
            <ul className="">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/services">Our Services</a></li>
                <li><a href="/specialists">Our Specialists</a></li>
                <li><a href="/contact">Contact Us</a></li>
                <li><a href="/appointment">Book Appointment</a></li>
            </ul>
        </div>
        <div className="">
            <h4 className="">Contact Us</h4>
            <div className="">
                <div className="">
                    123 Main St, Anytown, USA
                </div>
                <div className="">
                    (123) 456-7890
                </div>
                <div className="">
                    info@ganjalaclinic.com
                </div>
                <div className="">
                    Mon-Fri: 9:00AM-5:00PM, Sat-Sun: 10:00AM-4:00PM
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer;