import turtle from './turtle.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import BasicNavbar from './Navbar/BasicNavbar.js';
import background from './background.png'
import Footer from './Footer/Footer.js';
import Poll from './Poll/Poll.js';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
const [pollsData, setPollsData] = useState([]);

useEffect(() => {
  const getData = async() => {
    const response = await axios.get('http://localhost:5000/api/poll');
    setPollsData(response.data.polls);
  }

  getData();
}, []);

  return (
    <div className="App" style={{backgroundImage: `(${background})`, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
      <BasicNavbar/>
      <header className="App-header">
      <div className="text" style={{ display: 'flex', alignItems: 'center', margin: '70px'}}>
          <p className="paragraph">Opiniile sunt mai importante ca niciodată. Platformele de sondaje permit organizatorilor să culeagă feedback direct de la audiența lor și să înțeleagă mai bine nevoile și dorințele acesteia.</p>
          <img src={turtle} className="App-logo myLogo" alt="logo" />
        </div>
        <div className='d-flex flex-wrap justify-content-evenly w-100' >
        {pollsData.map((poll) => (
            <Poll
             key={poll._id} className="poll-wrapper mb-4"
              question={poll.question}
              options={[
                { id: 1, text: poll.option1 },
                { id: 2, text: poll.option2 },
                { id: 3, text: poll.option3 },
              ]}
            />
          ))}
        </div>
        </header>
        <Footer/>
    </div>
  );
}

export default App;
