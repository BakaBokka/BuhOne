import "./App.scss";
import About from "./components/About/About";
import Clients from "./components/Clients/Clients";
import Contacts from "./components/Contacts/Contacts";
import Feedback from "./components/Feedback/Feedback";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Service from "./components/Service/Service";



function App({ store }) {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Service cards={store.serviceCards} />
      <About cards={store.aboutCards} />
      <Clients clients={store.clients} />
      <Feedback feedback={store.feedback}/>
      <Contacts/>
      <Footer/>
    </div>
  );
}

export default App;
