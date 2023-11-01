import { useContext } from "react";
import "./Home.css";
import { PicContext } from "../../context/picContext";

const Home = () => {
	const { imagenmost, setImagenmost } = useContext(PicContext);
	const addFavorite = (id) => {
		const favoritos = imagenmost.map((imagen) => {
			if (imagen.id === id) {
				return {
					...imagen,
					liked: !imagen.liked,
				};
			}
			return imagen;
		});
		setImagenmost(favoritos);
	};
	return (
		<>
			<h1 className="title_home_page">Natural Pic</h1>
			<section className="home_page_container">
				{imagenmost.map((imagenMostrar, i) => {
					return (
						<div onClick={() => addFavorite(imagenMostrar.id)} className="container_render" key={i}>
							<i className="fa-solid fa-heart corazon_icon" style={{ color: imagenMostrar.liked ? "red" : "white" }}></i>
							<img className="imagen_render" src={imagenMostrar.src.tiny} alt={imagenMostrar.alt} />
							<p className="descripcion_img">{imagenMostrar.alt}</p>
						</div>
					);
				})}
			</section>
		</>
	);
};

export default Home;
