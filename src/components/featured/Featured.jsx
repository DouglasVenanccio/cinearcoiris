import { InfoOutlined, PlayArrow } from "@material-ui/icons"
import "./featured.scss"

function Featured({type}) {
  return (
    <div className="featured">
        {type &&( 
        <div className="category">
            <span>{type === "movie" ? "Movies" :  "Series"}</span>
            <select name="genre" id="genre">
                <option>Gênero</option>
                <option value="erotic">+18</option>
                <option value="action">Ação</option>
                <option value="adventure">Aventura</option>
                <option value="biography">Biografia</option>
                <option value="comedy">Comédia</option>
                <option value="curt">Curtas</option>
                <option value="documentary">Documentário</option>
                <option value="drama">Drama</option>
                <option value="lesbian">Lésbico</option>
                <option value="musical">Musical</option>
                <option value="romance">Romance</option>
                <option value="supense">Suspense</option>
            </select>
        </div> )}
        <img src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg" alt=""/>
        <div className="info">
            <img src="https://i.postimg.cc/g0GVjD7w/logo.png" alt="" />
            <span className="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Nostrum numquam odit error rem aliquam quibusdam 
            aliquid accusamus pariatur voluptatibus, nobis omnis 
            fugiat quae provident distinctio sequi tempore, 
            laudantium cumque magni.</span>
            <div className="buttons">
                <button className="play">
                    <PlayArrow/>
                    <span>Play</span>
                </button>
                <button className="more">
                    <InfoOutlined/>
                    <span>Saiba Mais</span>
                </button>
            </div>
        </div>
        </div>
  )
}

export default Featured