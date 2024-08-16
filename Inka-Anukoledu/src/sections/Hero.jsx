import React from 'react'
// import {paw-logo.jpg} from ../assets/images;

function Hero() {
  return (
    <div>
        <nav className='bg-[#F6EDD9] flex flex-1 justify-between pl-24 pt-4'>
            <img src="https://img.freepik.com/free-vector/pet-logo-design-paw-vector-animal-shop-business_53876-136741.jpg?semt=ais_hybrid" alt="Paw logo " width={100} height={100} className='pt-4'/>

            <div className='flex flex-1 justify-center mt-10 items-center '>
              <div className='pr-8' id='/#home'>Home</div>
              <div className='pr-8' id='/#aboutus'>About Us</div>
              <div className='pr-8' id='/#services'>Services</div>
              <div className='pr-8' id='/#contactus'>Contact Us</div>
            </div>
        </nav>
        <div className='px-12 mt-12 flex flex-1 justify-center items-center'>
          <div className='pr-20' >
              <h1 className=' mt-3 text-extrabold text-6xl font-palanquin px-12'>Meet Your <span className='font-montserrat text-[#B95D2F]'>Pawtner</span></h1>
              <div className='pl-12 mt-4 text-xl'>
                <p className='font-montserrat text-slate-500 '>A loyal companion with a wagging tail and boundless affection.</p>
                <p className='font-montserrat text-slate-500 '>Always by your side, they offer unconditional love</p>
              </div>
          </div>

          <div>
            <img src="https://img.freepik.com/free-photo/beautiful-pet-portrait-dog_23-2149218450.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1723766400&semt=ais_hybrid" alt="hemanth gadu" width={570} height={610} className='rounded-lg ring-1 ring-slate-300 shadow-xl'  />
          </div>
        </div>
    </div>
  )
}

export default Hero