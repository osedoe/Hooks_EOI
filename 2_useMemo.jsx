const expensiveValue = useMemo(() => doSomething(a, b), [a, b]);

const expensiveCallback = useCallback(() => doSemothingElse(a, b), [a, b])

const Component = memo((props) => {
  return <div>
    // stuff
  </div>
});