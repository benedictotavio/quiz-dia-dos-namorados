import React from 'react'
import './Audio.css'

const Audio = ({ audio }) => {
    return (
        <div className="audio-player">
            <audio src={audio} controls controlsList='noremoteplayback'>
                <p>Audio Indisponivel</p>
            </audio>
        </div>
    )
}

export default Audio