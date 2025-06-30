import "./App.css";
import BasicDetails from "./components/BasicDetails";
import ContactDetails from "./components/ContactDetails";
import Hero from "./components/Hero";
import MiddleDetails from "./components/MiddleDetails";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="px-2 md:px-10">
      <div className="mb-1">
        <Navbar />
        <Hero />
      </div>
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/4 mb-4 md:mb-0">
          <BasicDetails />
        </div>
        <div className="w-full md:w-2/4 mb-4 md:mb-0">
          <MiddleDetails />
        </div>
        <div className="w-full md:w-1/4">
          <ContactDetails />
        </div>
      </div>
    </div>
  );
}

export default App;
