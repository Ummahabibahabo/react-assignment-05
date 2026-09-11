import { Suspense } from "react";
import "./App.css";
import Banner from "./Components/Banner";
import Navbar from "./Components/Navbar";
import Technologies from "./Components/Technologies/Technologies";
import type { TechnologiesType } from "./Components/Types";

const technogiesPromise = async (): Promise<TechnologiesType[]> => {
  const res = await fetch("/public/data.json");
  const data = await res.json();
  return data;
};
function App() {
  return (
    <>
      <div className="container mx-auto px-20 py-10">
        <Navbar></Navbar>
        <Banner></Banner>
        <Suspense fallback={<p>Loading.....</p>}>
          <Technologies technogiesPromise={technogiesPromise()}></Technologies>
        </Suspense>
      </div>
    </>
  );
}

export default App;
