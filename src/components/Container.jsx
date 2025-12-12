

import React from 'react'

const Container = ({children, className}) => {
  return (
    <div className={` max-w-5xl mx-auto p-6 ${className}`}>{children}</div>
  )
}

export default Container