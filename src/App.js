import './App.css';
import { Route, Routes } from 'react-router-dom';
import QuizApp from './components/QuizApp';

function App() {
  return (
    <Routes>
      <Route path='/' element={<QuizApp />} />
    </Routes>
  );
}

export default App;
