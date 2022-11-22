import './App.css';
import { About, Footer, Header, Projects, Skills} from './container';
import { Navbar } from './components'

function App() {
  return (

    <div>
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Skills />
      <Footer />
    </div>

    );
}

export default App;
