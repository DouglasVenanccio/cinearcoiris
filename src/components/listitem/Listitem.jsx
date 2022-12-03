import { Add, PlayArrow, ThumbsUpDownOutlined, ThumbUpAltOutlined } from "@material-ui/icons"
import { useState } from "react"
import "./listitem.scss"

function Listitem({index}) {
  const [isHovered, setIsHovered] = useState(false);
  const trailer = "https://youtu.be/cuteZuHxowc";
  return (
    <div className="listItem"
    style={{left: isHovered && index * 225 + index * 2.5}}
     onMouseEnter={()=>setIsHovered(true)} 
     onMouseLeave={()=>setIsHovered(false)}>
        <img src="https://i.postimg.cc/gjZsWB1Q/como-espuma-4.png" 
        alt=""/>
        {isHovered && (
        <>
        <video src={trailer} autoPlay={true} loop controls muted></video>
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
          <div className="desc">Milo (Carlos D’Ursi) é um jovem que ainda sofre o trauma do acidente que causou sua paraplegia...
          </div>
          <div className="genre">Comédia, Drama, Romance</div>
        </div></> 
         )}
    </div>
  )
}

export default Listitem