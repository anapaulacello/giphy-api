import './App.css';
import { ListofGifs } from './components/ListofGifs';
import {Route} from "wouter"

function App() {
  return (
    <div className="App">
      <section className="App-content">
      <a href="/gif/haikyu">gif de haikyu</a>
      <a href="/gif/jujutsu kaise">gif de jujutsu kaise</a>
      <a href="/gif/gumball">gif de gumball</a>
        <Route path="/gif/:keyword" component={ListofGifs}/>
      </section>
    </div>
  );
}

export default App;
