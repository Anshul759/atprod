import './App.css';
import Logo from './Components/Logo';
import Introduction from './Components/Introduction'
import Aboutus from './Components/Aboutus'
import Video from './Components/Video'
import Contact from './Components/Contact'
import Maps from './Components/Maps'
import Footer from './Components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Logo />
      <Introduction />
      <Aboutus />
      <Video />
      <Contact />
      {/* <Maps /> */}
      <Footer />
    </div>
  );
}

export default App;
