
import './App.css';
// import About from './Component/About';
import FormText from './Component/FormText';
import Navbar from './Component/Navbar';

function App() {

  return (
    <div className="App">
      <Navbar title="TextUtils" about = "About Textutils" />
      <div className="container">
      <FormText heading ="Enter the text to anlyze below"/>
      {/* <About/> */}
      </div>
    </div>
  );
}

export default App;
