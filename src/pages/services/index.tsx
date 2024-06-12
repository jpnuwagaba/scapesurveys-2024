import React from 'react'
import Hero2 from '@/components/Hero2'
import Services from '@/components/Services'

const index = () => {
  return (
    <>
      <Hero2 
        bgImage='assets/land-surveying.jpg'
        title='Our Services'
        subtitle='Comprehensive surveying solutions tailored to meet your project needs.'
      />
      <div className="mt-8 md:mt-24"></div>
      <Services />      
    </>
  )
}

export default index