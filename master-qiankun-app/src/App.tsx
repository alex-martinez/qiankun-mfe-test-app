import { BrowserRouter } from 'react-router-dom';
import AppTopNav from './components/AppTopNav';
import './App.css';

function App({ loading }: { loading?: boolean }) {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <AppTopNav />

        {loading && <p>Loading...</p>}

        <main id="sub-app" className="min-h-screen w-full" />
      </div>
    </BrowserRouter>
  );
}

export default App;
