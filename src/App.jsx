import Holder from './components/Holder';
import Header from './components/Header';
import Item from './components/Item';
import Add from './components/Add';

export default function App() {
  return (
    <div className="wrap">
      <Header text="To-Do" type="header"></Header>
      <Add></Add>
      <div className="midSection">
        <Holder arr={[<Item text="To Do: Set up list"></Item>]}></Holder>
      </div>
      <Header text="(Footer)" type="footer"></Header>
    </div>
  )
}