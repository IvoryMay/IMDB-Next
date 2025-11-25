

import React from 'react'

const Container = ({children, className}) => {
  return (
    <div className={` max-w-4xl mx-auto p-6 ${className}`}>{children}</div>
  )
}

export default Container