import { useEffect, useState } from "react";
import "./HomeContain.css";

const HomeContain = () => {
	const urlApi = "https://api.pexels.com/v1/search?query=nature&per_page=50";
	const [imagenmost, setImagenmost] = useState([]);
	// console.log(imagenmost)

	const llamadoApi = async () => {
		try {
			const res = await fetch(urlApi, {
				headers: {
					Authorization: "BY5jLkKeufn9jXB2NCJ9UtsjB0lQUgULiiyVqI19aNuKd6bObKkGBY5X",
				},
			});
			const data = await res.json();
			console.log(data);
			setImagenmost(data.photos);
		} catch (error) {
			console.error("ocurrio un error");
		}
	};

	useEffect(() => {
		llamadoApi();
	}, []);

	return (
		<section className="home_page_container">
			{imagenmost.map((imagenMostrar, i) => {
				return (
					<div className="container_render" key={i}>
                        <i className="fa-regular fa-heart corazon_icon" style={{color: "#ff0000"}}></i>
						<img className="imagen_render" src={imagenMostrar.src.tiny} alt={imagenMostrar.alt} />
						<p className="descripcion_img">{imagenMostrar.alt}</p>
					</div>
				);
			})}
		</section>
	);
};

export default HomeContain;
