import './App.css';
import { Homepage } from './pages/Homepage';
import { Topbar } from './topbar/Topbar';

function App() {
  return (
    <div className="App">
      <Topbar/>
      <Homepage/>
    </div>
  );
}

export default App;
