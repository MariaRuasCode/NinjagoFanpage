import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import News from './pages/news';
import Home from './pages/home';
import Sets from './pages/sets';
import Books from './pages/books';
import QnA from './pages/qna';
import ninjago_logo from './assets/images/ninjago_logo.png'
function App() {
  return (
    
    <Router>
      
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/sets" element={<Sets />} />
        <Route path="/books" element={<Books />} />
        <Route path="/qna" element={<QnA />} />
      </Routes>
    </Router>
  );
}

export default App;
