import { Routes, Route } from 'react-router-dom';

import './App.css';
import HomePage from './pages/Home/HomePage';
import ArticleDetailPage from './pages/ArticleDetail/ArticleDetailPage';

function App() {
  return (
		<div className="App font-opensans">
			<Routes>
				<Route index path="/" element={<HomePage />} />
				<Route path="/blog/:id" element={<ArticleDetailPage />} />
			</Routes>
		</div>
	);
}

export default App;
