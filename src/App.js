import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import AppTitle from './components/AppTitle';
import Game from './components/Game';
import Winners from './components/Winners';

function App() {
  return (
    <>
      <Header />
      <div className="container-fluid">
        <AppTitle />
        <Game />
        <Winners />
      </div>
    </>
  );
}

export default App;
