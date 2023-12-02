import turtle from './turtle.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import BasicNavbar from './BasicNavbar';
import background from './background.png'
import Footer from './Footer';

function App() {
  return (
    <div className="App" style={{backgroundImage: `(${background})`, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
      <BasicNavbar/>
      <header className="App-header">
      <div className="text" style={{ display: 'flex', alignItems: 'center', margin: '70px'}}>
          <p className="paragraph">Opiniile sunt mai importante ca niciodată. Platformele de sondaje permit organizatorilor să culeagă feedback direct de la audiența lor și să înțeleagă mai bine nevoile și dorințele acesteia.</p>
          <img src={turtle} className="App-logo myLogo" alt="logo" />
        </div>
        </header>
        <Footer/>
    </div>
  );
}

export default App;
