import { Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import AuthPage from './Components/AuthPage';
import PageLayout from './Layouts/PageLayout/PageLayout';
import ProfilePage from './Components/ProfilePage/ProfilePage';

function App() {
  return (
    <PageLayout>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='auth' element={<AuthPage />} />
        <Route path='/:username' element={<ProfilePage />} />
      </Routes>
    </PageLayout>
  );
}

export default App;
