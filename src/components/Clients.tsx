import React from 'react';
import Image from 'next/image';

const logos = [
  {
    logo: '/assets/NBRB-logo.png',
    alt: 'NBRB-logo',
  },
  {
    logo: '/assets/opm.png',
    alt: 'OPM',
  },
  {
    logo: '/assets/ndiwa.png',
    alt: 'Ndiwa',
  },
  {
    logo: '/assets/unhcr.png',
    alt: 'unhcr',
  },
  {
    logo: '/assets/konoike.png',
    alt: 'konoike',
  },
]

const Clients = () => {
  return (
    <div className='container'>
        <h3 className="text-lg text-center mb-8 font-bold uppercase text-blue">our valued clients</h3>
      <div className='flex flex-row flex-wrap items-center justify-center gap-8'>
        {logos.map((logo) => (
          <Image
            style={{objectFit: 'cover'}}
            key={logo.alt}
            src={logo.logo}
            width={100}
            height={100}
            alt={logo.alt}
            className=''
          />
        ))}
      </div>
    </div>
  );
};

export default Clients;
