import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Nav from './components/Nav';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <div className="container">
          <Nav />
        <div className="row bg-primary-subtle main-bg rounded">
          
          <Login />
          <Signup />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
