import React from 'react'
import PdfPrint from './PdfPrint'
import Audio from './Audio'
import iris from '../audios/iris.mp3'

const Reward = () => {

  return (
    <>
      <PdfPrint />
      <Audio audio={iris} />
    </>

  )
}

export default Reward