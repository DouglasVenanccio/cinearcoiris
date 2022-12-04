import { Add, PlayArrow, ThumbsUpDownOutlined, ThumbUpAltOutlined } from "@material-ui/icons"
import { useState } from "react"
import ReactPlayer from "react-player"
import "./listitem.scss"

function Listitem({index}) {
  const [isHovered, setIsHovered] = useState(false);
  const trailer = "https://br.vid.web.acsta.net//uk//medias//nmedia//55//18//10//31//23//19560625_hd_013.mp4";
  return (
    <div className="listItem"
    style={{left: isHovered && index * 225 + index * 2.5}}
     onMouseEnter={()=>setIsHovered(true)} 
     onMouseLeave={()=>setIsHovered(false)}>
        <img src="https://br.web.img3.acsta.net/c_310_420/pictures/17/05/16/11/50/214712.jpg" 
        alt=""/>
        {isHovered && (
        <>
        <ReactPlayer 
      className='video'
        url= {trailer}
        width= 'auto'
        height='180px'
        playing
        loop
        controls
        muted        
        />
        <div className="itemInfo">
          <div className="icons">
            <PlayArrow className="icon"/>
            <Add className="icon"/>
            <ThumbUpAltOutlined className="icon"/>
            <ThumbsUpDownOutlined className="icon"/>
          </div>
          <div className="itemInfoTop">
            <span>1 hora e 56mins</span>
            <span className="limit">+16</span>
            <span>2017</span>              
          </div>
          <div className="desc">Milo (Carlo D'Ursi) é um jovem que tenta lidar com o 
           do acidente que o deixou paraplégico. Quando seu namorado, Gus (Nacho San José), 
           decide tentar animá-lo dando uma festa de aniversário,
           centenas de pessoas aparecem em sua mansão para uma orgia.
          </div>
          <div className="genre">Comédia, Drama, Romance</div>
        </div></> 
         )}
    </div>
  )
}

export default Listitem