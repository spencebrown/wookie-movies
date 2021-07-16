import './App.css';
import Header from './Components/Header';

//gonna probably put in diff component
const axios = require('axios');

let access_token = "Bearer Wookie2019";

axios.get('https://wookie.codesubmit.io/movies', {
    headers: {
      Authorization: access_token  
    }
  })
  .then(res => console.log(res.data))
  .catch(err => console.log(err))

  //gonna probably put in diff component


const App = () => {
  

  return (
    <div className="app">
     
     <Header/>
     
    </div>
  );
}

export default App;
