import logo from './logo.svg';
import './App.css';
import Helloreact from './Component/Helloreact';
import Welcometojsx from './Component/Welcometojsx';
import Greeting from './Component/Greeting';
import WelcomeMessage from './Component/Welcomemessage';
import UserCard from './Component/Usercard';
import Counter from './Component/Counter';

function App() {
  return (
    <><Helloreact />
    <Welcometojsx />
    <Greeting name="tree"/>
    <WelcomeMessage />
    <UserCard name="yumna" age={20} location="dargeeling"/>
    <UserCard name="wahaj" age={45} location="mussoorie" />
    <Counter /></>
  );
}

export default App;
