import './App.css'
import Header from './header/index.js'
import Item from './item/index.js'
import Subtotal from './subtotal/index.js';

function itemList(quantity) {
  let list = [];
  for (let a = 0; a < quantity; a++)
    list.push(<Item key={a} itemNumber={a}/>)
  return (
    <div className="itemList">
      {list}
    </div>
  )
};

function App() {
  return (
    <div className="App">
      <Header />
      {itemList(14)}
      <Subtotal />
    </div>
  );
}

export default App;
