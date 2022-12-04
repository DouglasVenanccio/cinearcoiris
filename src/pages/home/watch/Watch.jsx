import { ArrowBackOutlined } from "@material-ui/icons"
import React from "react"
import ReactPlayer from "react-player/youtube"
import "../watch/watch.scss"

function Watch() {
  const trailer ='https://www.youtube.com/watch?v=cuteZuHxowc'  
  return (
    <div className="Watch">
      <div className="back">
        <ArrowBackOutlined/>
        Inicio
      </div >
      <ReactPlayer 
      className='video'
        url= {trailer}
        width='100%'
        height='100%'
        playing
        loop
        muted        
        />
    </div>
  )
}

export default Watch