import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types"

export const PicContext = createContext()

const PicPorvider  = ({children}) => {

    const urlApi = "https://api.pexels.com/v1/search?query=nature&per_page=50";
	const [imagenmost, setImagenmost] = useState([]);

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

    const data = {
        imagenmost,
        setImagenmost
    }

    return (
        <PicContext.Provider value={data}>{children}</PicContext.Provider>
    )
}

PicPorvider.propTypes = {
    children: PropTypes.array.isRequired
}

export default PicContext
export {PicPorvider} 
