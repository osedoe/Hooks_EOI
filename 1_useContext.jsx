// ShopProvider.js
import React from 'react';

export const ShopContext = React.createContext();

const INITIAL_BASKET = [];

export const App = () => {
  const [state, setState] = useState(INITIAL_BASKET)

  return <ShopContext.Provider value={[state, setState]}>
    <ShoppingList />
    <>
      <AddItem />
      <RemoveItem />
      <ClearBasket />
    </>
  </ShopContext.Provider>
}

// ShoppingList.js
export const ShoppingList = props => {
  const [state] = useContext(ShopContext);

  return <div>
    <h1>Lista de la compra</h1>
    <ul>
      {state.map((item, index) => <li key={index}>{item}</li>)}
    </ul>
  </div>
};

// AddItem.js
export const AddItem = props => {
  const inputRef = useRef(null);
  const [state, setState] = useContext(ShopContext);

  const handleAdd = () => {
    const newItem = inputRef.current.value;
    setState([...state, newItem]);
  }

  return <div>
    <input ref={inputRef} />
    <button onClick={handleAdd}>ADD</button>
  </div>
};