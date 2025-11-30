import React from 'react'
import Button from './Button'

const Hero = () => {
  return (
    <div>
       <div className="">
        <h1 className='text-4xl font-bold'>Enhance Your <br /> Natural <span className='text-pink-800'>Beauty</span> </h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit neque laudantium eius maiores, hic quia inventore provident minima atque, quod illo numquam? Assumenda voluptas temporibus nemo amet dolores iusto fuga!</p>
        <div className="">
          <Button text='Book a consultation' />
          <button className="border border-pink-800 text-pink-800 text-sm sm:text-md px-4 py-2 rounded-[50px] w-full sm:w-[10rem] cursor-pointer">Explore more</button>
        </div>
        <div className="">
            <div className="">
                <p>2,500+</p>
                <p>Happy Clients</p>
            </div>
            <div className="">
                <p>20+</p>
                <p>Specialists</p>
            </div>
            <div className="">
                <p>50+</p>
                <p>Treatments</p>
            </div>
            <div className="">
                <p>10+</p>
                <p>Years</p>
            </div>
        </div>
        </div> 

    </div>
  )
}

export default Hero