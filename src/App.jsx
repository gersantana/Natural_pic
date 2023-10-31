import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import Favoritos from "./pages/Favoritos/Favoritos";
import { PicPorvider } from "./context/picContext";
import Footer from "./components/Footer/Footer";

function App() {
	return (
		<div>
			<PicPorvider>
				<NavBar />
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/favoritos" element={<Favoritos />}></Route>
				</Routes>
				<Footer/>
			</PicPorvider>
		</div>
	);
}

export default App;
