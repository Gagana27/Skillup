import React from 'react';
import FreeTrial from '../assets/freetrial.svg'

const FreeTrail = () => {

  return (
    <>
      <div className=" freetrial pt-10 bg-bright-white sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
              <div className="lg:py-24">

                <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-black sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                  <span className="block">Choose you trial version </span>
                  {/* <span className="block text-black"> Creative</span> */}
                </h1>
              </div>
            </div>

            <div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative  ">
              <div className="   mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
               
                <iframe className='freetrial'
                  src="https://www.youtube.com/embed/uXWycyeTeCs"
                  width={650} height={450}
                  title='A youtube video on React hooks'>
                  Free Trail Version
                </iframe>
                {/* <img 
                  className="bg-contain" 
                  src={FreeTrial} alt /> */}
</div>
             
            </div>
          </div>
        </div>
      </div>
    </>

  );
}

export default FreeTrail;