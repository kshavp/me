// import React from 'react'

const Hero = () => {
  const imgURL = `https://media.licdn.com/dms/image/D5603AQHsVkTlJXP_mw/profile-displayphoto-shrink_800_800/0/1705930018734?e=1720656000&v=beta&t=KbUkuH3BGfdhjed63wlSKH54QHMAC8I__FQXhg-eWBo`
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35 md:pt-16">
        <div className="flex flex-wrap">
            <div className="w-full">
                <div className="flex flex-col items-center text-center">
                    <h1 className="md:pb-6 text-neutral-200 text-7xl tracking-tight font-medium text-center md:pl-6">Keshav Priyam</h1>
                    <h1 className="my-4 md:mt-2 text-neutral-200 text-xl md:text-4xl font-thin tracking-tight ">Full Stack Developer | Cyber Security</h1>
                    <img className="p-8 h-72 w-72 md:h-96 md:w-96 rounded-full" src={imgURL} alt="Keshav Priyam" />
                </div>
            </div>

        </div>
    </div>
  )
}

export default Hero