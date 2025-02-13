import React from 'react'
import Button from './button'

function ButtonContainer() {
    const buttonList=['ALL','Music','Chess','react','Cricket','Comedy','Politics'];
  return (
    <div className='flex m-1'>
        {buttonList.map((e)=><Button name={e} key={e}/>)}
    </div>
  )
}

export default ButtonContainer