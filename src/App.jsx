
import Hero from "./Hero";
import Navigation from "./Navigation";
import Products from "./Products";
import Sort from "./Sort";

function App() {
  const name = "Yasindu";
  const cartCount = 100;

  return (
    <div>
      <Navigation name={name} cartCount={cartCount} />
      <Hero />
      <Products></Products>
  
    </div>
    
  );
}

export default App;
