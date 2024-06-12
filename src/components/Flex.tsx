import React, { FC } from 'react'

interface Props {
  child1: React.ReactNode;
  child2: React.ReactNode;
}

const Flex:FC<Props> = ({child1, child2}) => {
  return (
    <>
      <div className="container">
        <div className="flex flex-col items-start lg:flex-row">
          <div className='flex-1 w-full h-max'>{child1}</div>
          <div className='flex-1 w-full h-max'>{child2}</div>
        </div>
      </div>
    </>
  )
}

export default Flex