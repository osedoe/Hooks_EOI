export const SearchBar = () => {
  const searchRef = useRef(null);

  const handleSearchFocus = () => {
    searchRef.current.focus();
  };

  return <Container onClick={handleSearchFocus}>
    <input ref={searchRef} type="search" />
    <input ref={c => this.searchRef = c} type="search" />
    <Button>SEARCH</Button>
  </Container>
};