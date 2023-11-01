import { useContext } from "react";
import "./Favoritos.css"
import PicContext from "../../context/picContext";
const Favoritos = () => {
    const {imagenmost} = useContext(PicContext)
    console.log(imagenmost.filter((imagenMostrar)=> imagenMostrar.liked))
	return (
		<>
		<h1 className="title_home_page">Natural Pic</h1>
		<section className="home_page_container">
			{imagenmost.filter((imagenMostrar)=> imagenMostrar.liked).map((imagenMostrar, i) => {
				return (
					<div className="container_render" key={i}>
                        <i className="fa-solid fa-heart corazon_icon" style={{color:"red"}}></i>
						<img className="imagen_render" src={imagenMostrar.src.tiny} alt={imagenMostrar.alt} />
						<p className="descripcion_img">{imagenMostrar.alt}</p>
					</div>
				);
			})}
		</section>
		</>
	);
}

export default Favoritos