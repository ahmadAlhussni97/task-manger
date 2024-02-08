import React from 'react'
import '../../assets/scss/Loading.scss'
export default function Loading() {
  return (
    <div className='height-loading'>
      <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
    </div>
  )
}
