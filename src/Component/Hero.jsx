import React from 'react'
import Button from './Button'
import HeroImg from '../assets/Hero/HeroImg.jpeg'

const Hero = () => {
  return (
    <div className='flex flex-col lg:flex-row items-center gap-5 lg:gap-50 mt-3 lg:h-[90vh] w-[80vw] mx-auto'>
       <div className="">
        <h1 className='text-4xl font-bold'>Enhance Your <br /> Natural <span className='text-pink-800'>Beauty</span> </h1>
        <p className='text-gray-400 py-4 text-md sm:text-lg w-full sm:w-[35rem]' >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit neque laudantium eius maiores, hic quia inventore provident minima atque, quod illo numquam? Assumenda voluptas temporibus nemo amet dolores iusto fuga!</p>
        <div className="flex flex-col sm:flex-row gap-6 py-4">
          <Button text='Book a consultation' />
          <button className="border border-pink-800 text-pink-800 text-sm sm:text-md px-4 py-2 rounded-[50px] w-1/2 sm:w-[10rem] cursor-pointer">Explore more</button>
        </div>
        <div className="flex items-center  ml-2 sm:ml-10 py-6 gap-6 sm:gap-10" >
            <div className="">
                <p className='text-pink-800 font-semibold text-md sm:text-lg'>2,500+</p>
                <p className='text-gray-400 text-md sm:text-lg'>Clients</p>
            </div>
            <div className="">
                <p className='text-pink-800 font-semibold text-md sm:text-lg'>20+</p>
                <p className='text-gray-400 text-md sm:text-lg'>Specialists</p>
            </div>
            <div className="">
                <p className='text-pink-800 font-semibold text-md sm:text-lg'>50+</p>
                <p className='text-gray-400 text-md sm:text-lg'>Treatments</p>
            </div>
            <div className="">
                <p className='text-pink-800 font-semibold text-md sm:text-lg'>10+</p>
                <p className='text-gray-400 text-md sm:text-lg'>Years</p>
            </div>
        </div>
        </div> 
        <div className="">
          <img src={HeroImg} alt="Hero" className="w-80 h-80 rounded-[90%] hover:scale-105 transition-transform duration-300" />
        </div>
    </div>
  )
}

export default Hero