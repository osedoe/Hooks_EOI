const INITIAL_STATE = [];

export const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return addItemAction(state, action.item);
    case 'REMOVE_ITEM':
      return removeItemAction(state, action.id);
    case 'EMPTY_CART':
      return emptyShoppingCartAction(state);
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

const emptyShoppingCartAction = (state) => {
  return init;
}


const init = () => [];


export const ShoppingCart = () => {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE, init); // init

  const handleAddItem = item => dispatch({ type: 'ADD_ITEM', value: item });
  const handleRemoveItem = item => dispatch({ type: 'REMOVE_ITEM', id: item.id });
  const handleReset = () => dispatch({ type: 'EMPTY_CART' });

  return <>
    <Button onClick={handleAddItem}>Ad</Button>
    <Button onClick={handleRemoveItem}>Remove</Button>
    <Button onClick={handleReset}>Empty</Button>
  </>
};