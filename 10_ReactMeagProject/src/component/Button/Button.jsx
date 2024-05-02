import React, { Children } from 'react'

function Button({

  Children,
  type = "button",
  bgcolor = "bg-blue-600", 
  textcolor = "text-white",
  classname = "",
  ...props

}) {
  return (
    <button className={`inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full ${classname} ${bgcolor} ${textcolor}`}
    {...props}
    >
      {Children}
      
    </button>
  )
}

export default Button
