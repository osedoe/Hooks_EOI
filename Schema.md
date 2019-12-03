# Hooks extended + Going Functional

1. useContext
2. useMemo & useCallback
3. useReducer
4. useRef
5. Class 2 function component
  
---

## useContext

Create React Context

```javascript
const MyContext = React.createContext(defaultValue);
```

Provider: On one of the top level components

```jsx
const App = () => <MyContext.Provider value={initialValue}>
    {children}
</MyContext.Provider>
```

Hook Syntax

```javascript
 const values = useContext(Context);
```

---

## useMemo && useCallback && React.memo

Syntax

```javascript
const value = useMemo(() => expensiveCalculation, [dependencies]);
```

```javascript
const value = useCallback(() => expensiveCalculation2, [dependencies]);
```

```javascript
const Component = memo((props) => {
    return;
})
```

---

## useRef

Hook syntax

```javascript
const randomRef = useRef(initialValue);
```

Use reference

```html
<input ref={randomRef}/>
```

---

## useReducer

Hook syntax

```javascript
const [state, dispatch] = useReducer(reducer, INITIAL_STATE, initFn?);
```

Reducer function

```javascript
const reducerFn = (state, action) => {
    switch (action.type) {
        case 'X':
            return { ...state, newState };
        default:
        return state;
    }
}
```

Update state

```javascript
dispatch({type: 'X' payload?: value});
```

---
---

## Class component to functional component

1. Change class for function or fat arrow
2. Remove *constructor* and *render*
3. turn class methods into plain functions or fat arrows
4. Replace this.state with `useState/useReducer`
5. Remove EVERY piece of `this`
6. Replace life-cycle methods with `useEffect`
7. Replace `React.createRef` with `useRef`
8. If your application doesn't have any state -only props-, check for memoization
9. Enjoy your functional life
