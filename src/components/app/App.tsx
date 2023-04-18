import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MoviesPage from '../movies-page/MoviesPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact component={MoviesPage} />
      </Routes>
    </Router>
  );
}

export default App;
