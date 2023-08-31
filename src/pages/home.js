import PokeList from '../components/PokeList/PokeList';
import { Header } from '../components/header/header';

export default function Home() {

    return(
        <div className="App">
        <Header />
        <div><PokeList/> </div>
        </div>
    )
}