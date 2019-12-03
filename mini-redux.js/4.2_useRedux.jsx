// useContext && useReducer

const INITIAL_STATE = [];

export const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return addItemAction(state, action.item);
    case 'REMOVE_ITEM':
      return removeItemAction(state, action.id);
    case 'EMPTY_CART':
      return emptyShoppingCartAction(state);
    case 'DUPLICATE_ITEM':
      return duplicateItemAction(state, action);
    default:
      return state;
  }
};

const addItemAction = (state, item) => {
  return [...state, item];
}

const removeItemAction = (state, id) => {
  return state.filter(item => item.id !== id);
}

const duplicateItemAction = (state, action) => {
  return [...state, action.item, action.item]
}

// ShopProvider.js
import React from 'react';

export const ShopContext = React.createContext();

export const ShopProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);

  return <ShopContext.Provider value={[state, dispatch]}>
    {children}
  </ShopContext.Provider>
}

export const App = () => {
  const [state, setState] = useState(initialState);
  return <ShopProvider>
    <ShoppingList addItemComponent={AddItem}/>
    <>
      <AddItem />
      {state && <RemoveItem />}
      <ClearBasket />
    </>
  </ShopProvider>
}

// Custom hook (optional)
export const useShopContext = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error('Context not found...');
  }
  return context;
}

// ShoppingList.js
export const ShoppingList = props => {
  const [state] = useContext(ShopContext);
  const [state] = useShopContext();

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
  const [state, dispatch] = useShopContext();

  const handleAdd = () => {
    const { newItem: value } = inputRef.current;
    dispatch({ type: 'ADD_ITEM', item: newItem })
  }

  const handleDuplicate = () => {
    dispatch({ type: 'DUPLICATE_ITEM', item})
  }

  return <div>
    <input ref={inputRef} />
    <button onClick={handleAdd}>ADD</button>
  </div>
};