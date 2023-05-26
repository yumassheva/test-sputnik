import './App.css'
import Header from './components/Header/Header'
import Service from "./components/Service/Service";
import CorporateManagment from "./components/Corporate Managment/CorporateManagment";
import Contacts from "./components/Contacts/Contacts";
import Financial from "./components/Financial/Financial";
function App() {
  return (

    <div className="main">
      <Header />
      <Service />
      <Financial />
      <CorporateManagment />
      <Contacts/>
      </div>
  
  );
}

export default App
