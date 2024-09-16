import './App.css';
import { Outlet } from 'react-router-dom';
import Navigation from './components/navigation';

function App() {
  return (
    <div>
      <Navigation/>
      <Outlet />
      </div>
  );
}

export default App;
