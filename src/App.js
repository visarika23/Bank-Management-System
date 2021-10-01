import './App.css';
import {Header} from './components/Header';
import {BodyContainer} from './components/BodyContainer';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <BodyContainer />
      <Footer />
    </div>
  );
}

export default App;
