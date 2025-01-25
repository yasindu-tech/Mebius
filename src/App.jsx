import Hero from "./Hero";
import Navabar from "./Navbar";

function App() {
  const name = "Yasindu";
  const count = 100;

  return (
    <div>
      <Navabar  count={count} name={name}/>
      <Hero />
    </div>
  );
}

export default App;