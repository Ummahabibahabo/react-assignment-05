import "./App.css";
import Banner from "./Components/Banner";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <div className="container mx-auto px-20 py-10">
        <Navbar></Navbar>
        <Banner></Banner>
      </div>
    </>
  );
}

export default App;
