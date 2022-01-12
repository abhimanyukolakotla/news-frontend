import { Routes, Route } from "react-router-dom";
import HomePage from './components/pages/home-page/HomePage';
import NewsDetailsPage from './components/pages/news-details-page/NewsDetailsPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Hacker News!</h1>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/news_details" element={<NewsDetailsPage />} />
      </Routes>
      
    </div>
  );
}

export default App;
