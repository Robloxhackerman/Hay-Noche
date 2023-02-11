// import logo from './logo.svg';
import './App.css';
// import axios from 'axios';
import BarRes from './components/barRes';

/* const BarRes = () => {
 const [barRes, ] = useState([]);

  const fetchBarRes = () => {
    axios.get('http://localhost:8080/api/barres').then(res => { // con esto vamos al back
      console.log(res); // esto es lo que muestra
      setUserProfiles(res.data);
    });
  };
};
*/

function App () {
  return (
    <div className='App'>
      <BarRes />
    </div>
  );
}

export default App;
