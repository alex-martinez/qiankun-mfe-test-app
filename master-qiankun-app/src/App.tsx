import { BrowserRouter } from 'react-router-dom';
import AppSidebar from './components/AppSidebar';
import './App.css';

function App({ loading }: { loading?: boolean }) {
  return (
    <BrowserRouter>
      <div className="flex flex-row h-screen">
        <AppSidebar />

        {loading && <p>Loading...</p>}

        <main id="sub-app" className="flex-auto min-h-screen flex justify-center" />
      </div>
    </BrowserRouter>
  );
}

export default App;
