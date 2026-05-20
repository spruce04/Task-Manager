import Header from './components/Header';
import Midsection from './components/Midsection';

export default function App() {
  return (
    <div className="wrap">
      <Header text="To-Do" type="header"></Header>
      <Midsection></Midsection>
      <Header text="(Footer)" type="footer"></Header>
    </div>
  )
}