import React from "react";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";

const App = () => {
  return (
    <main className={"relative min-h-screen w-screen overflow-x-hidden"}>
      <Hero />
      <About />
      {/*<section className={"min-h-screen bg-violet-50 z-0"}></section>*/}
    </main>
  );
};
export default App;
