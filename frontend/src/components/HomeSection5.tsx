import React from 'react'
import model from "../assets/model.png";


function HomeSection5() {
  return (
    <>
        <div className='grid grid-cols-3 grid-rows-2 mt-[15rem]'>
            <div className=" col-span-1 row-span-1 font-manrope text-[1rem] text-white font-semibold ml-[4rem]">
                <h2 className='font-clashDisplay whitespace-nowrap text-secondaryColor_lilac text-[4rem]'>How the magic works</h2>
                <div className="">
                    <p className='mb-4 mr-[-7rem]'>We at Slove like transparancy. So what happens behind the scenes is, that based on the preferences of the three major players of the live music industry we connect them based on a smart (yes, we are quite proud it) algorithm.</p>
                    <p className='mr-[-7rem]'>Through that, we open up tremendous opportunities. Opportunities, that are beyond economic benefits such as artist development, mental well-being, marketing and PR for venues & music related businesses just to name a few.</p>
                </div>

            </div>

            <div className="self-end col-span-2 row-span-2">
                <img src={model} alt="model.img" />
            </div>
        </div>
    </>
  )
}

export default HomeSection5