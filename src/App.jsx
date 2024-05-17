import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Hukumnaama from './pages/Hukumnaama';
import { useState } from "react";
import Navbar from "./components/Navbar";
import Search from "./pages/Search";
function App() {
	const [ang,setAng]=useState(0);
	const [shabad,setShabad]= useState();
	return (
		<>
			<BrowserRouter>
			<Navbar/>
				<Routes>
					<Route
						path="/"
						element={<Home setAng={setAng} ang={ang}/>}
					/>
					<Route
						path={`/search/${ang}`}
						element={<Search ang={ang} shabad={shabad} setShabad={setShabad}/>}
					/>
					<Route
						path={`/hukumnaama/${shabad}`}
						element={<Hukumnaama ang={ang} shabad={shabad}/>}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
