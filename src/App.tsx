import { Route, Routes } from 'react-router-dom';
import './App.css';
import { ButtonBackToHome } from './components/ButtonBackToHome';
import Fiscalia from './pages/Fiscalia';
import Home from './pages/Home';

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='*' element={<ButtonBackToHome />} />
				<Route path='/fiscalia/:id' element={<Fiscalia />} />
				<Route path='/' element={<Home />} />
			</Routes>
		</div>
	);
}

export default App;
