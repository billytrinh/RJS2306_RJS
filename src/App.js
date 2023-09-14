import logo from './logo.svg';
import './App.css';

import Category from './components/Category';

function App() { // jsx
  const c = {
    name: "Smart Phone",
    count: 3
  };
  return (
    <div className='container'>
      <Category cat={c} />
    </div>
  );
}

export default App;
