import logo from '../logo.png';
import PokeList from '../components/PokeList/PokeList';

export default function Home() {

    return(
        <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" width={100} />
        </header>
        <div>
        <PokeList/>
        </div>
  </div>
    )
}