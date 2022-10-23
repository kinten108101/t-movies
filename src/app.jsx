import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {LayoutTwo} from "./components/layout.jsx";
import {MvHome} from "./components/home.jsx";
import {MvLibrary} from "./components/library.jsx";
import {MvFeed} from "./components/feed.jsx";
import {NotFound} from "./components/notfound.jsx";
/*
const App = () => {
	return (
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route index element={<PageMain />} />
				<Route path="library" element={<PageLibrary />} />
				<Route path="feed" element={<PageFeed />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
	);
} 
*/

const App = () => {
	return (
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route element={<LayoutTwo />}>
					<Route index element={<MvHome />} />
					<Route path="library" element={<MvLibrary />} />
					<Route path="feed" element={<MvFeed />} />
				</Route>
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
	);
} 

export {App};