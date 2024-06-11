import { Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import AuthPage from './Components/AuthPage';
import PageLayout from './Layouts/PageLayout/PageLayout';

function App() {
  return (
    <PageLayout>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='auth' element={<AuthPage />} />
      </Routes>
    </PageLayout>
  );
}

export default App;
