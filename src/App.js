import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import './App.css';
import HomePage from './pages/Home/HomePage';
import ArticleDetailPage from './pages/ArticleDetail/ArticleDetailPage';
import RegisterPage from './pages/register/RegisterPage';
import LoginPage from './pages/login/LoginPage';


function App() {
  return (
		<div className="App font-opensans">
			<Routes>
				<Route index path="/" element={<HomePage />} />
				<Route path="/blog/:id" element={<ArticleDetailPage />} />
				<Route path="/register" element={<RegisterPage />} />
				<Route path="/login" element={<LoginPage />} />
			</Routes>
			<Toaster />
		</div>
	);
}

export default App;
