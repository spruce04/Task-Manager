import Item from './components/Item';
import Header from './components/Header';

export default function App() {
  return (
    <div className="wrap">
      <Header text="To-Do" type="header"></Header>
      <div className="midSection">
        <Item text={"Items to do will go here"}/>
        <Item text={"Second item"}/>
        <Item text={"Test"}/>
      </div>
      <Header text="(Footer)" type="footer"></Header>
    </div>
  )
}