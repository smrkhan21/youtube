import React from 'react'

const Button = ({ name }) => {
  return (
    <div className="flex flex-wrap">
      <div className="p-2">
        <button className="px-3 py-1 bg-gray-200 rounded-lg">{name}</button>
      </div>
    </div>
  )
}

export default Button