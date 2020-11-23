import './App.css'
import Header from './header/index.js'
import Item from './item/index.js'
import ItemsAdded from './items_added/index.js';
import Subtotal from './subtotal/index.js';

function itemList(quantity) {
  let list = [];
  for (let a = 0; a < quantity; a++)
    list.push(<Item key={a} itemNumber={a} createQuantity={0} createPrice={34.99} createName={"Metor"} createDescription={"Material used: Solid grey plastic"}/>)
  return (
    <div id="itemList" className="itemList">
      {list}
    </div>
  )
};

function App() {
  return (
    <div className="App">
      <Header />
      <ItemsAdded />
      {itemList(10)}
      <Subtotal />
    </div>
  );
}

export default App;
