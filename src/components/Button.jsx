import React from 'react'

function Button(props) {
  return (
    <div>
        <button className='border border-gray-600 px-6 py-2 ${}'>{props.text}</button>
    </div>
  )
}

export default Button
