import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Questions from './pages/Questions';
import Settings from "./pages/Settings";
import FinalScreen from './pages/FinalScreen';

function App() {

  return (
    <Router>
      <div className='flex justify-center'>
        <div className='flex flex-col justify-center w-3/6'>
          <h1 className='text-center text-5xl my-8'>Quiz App</h1>
          <Routes>
            <Route path='/' element={<Settings />} />
            <Route path='/questions' element={<Questions />} />
            <Route path='/score' element={<FinalScreen />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
