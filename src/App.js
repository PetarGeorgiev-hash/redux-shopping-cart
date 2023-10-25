import "./App.css";
import Checkout from "./Checkout/Checkout";
import Header from "./Header/Header";
import Items from "./items-component/Items";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Checkout></Checkout>
      <Items></Items>
    </div>
  );
}

export default App;
