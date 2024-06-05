import { Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import AuthPage from './Components/AuthPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='auth' element={<AuthPage />} />
      </Routes>
    </>
  );
}

export default App;
