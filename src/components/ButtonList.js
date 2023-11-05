import React from 'react'
import Button from './Button'

const ButtonList = () => {
  return (
    <div className='flex flex-wrap'>
      <Button name="All"/>
      <Button name="Gaming"/>
      <Button name="Songs"/>
      <Button name="Live"/>
      <Button name="Soccer"/>
      <Button name="Cricket"/>
      <Button name="Cooking"/>
      <Button name="News"/>
      <Button name="Movies"/>
    </div>
  )
}

export default ButtonList