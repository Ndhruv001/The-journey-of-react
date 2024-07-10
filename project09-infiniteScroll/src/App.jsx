//custom hooks
import useBookSearch from "./hooks/useBookSearch";

//react
import {  useCallback, useRef, useState } from "react";

function App() {

  const [query , setQuery] = useState('');
  const [pageNumber , setPageNumber] = useState(1);

  //usebooks context
  const {loading , books , error , hashMore } = useBookSearch(query , pageNumber);


  const observer = useRef();
  const lastBookElement = useCallback(
    node => {
      console.log('node ', node)
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(entries => {
        console.log('entries ', entries[0])
        if (entries[0].isIntersecting && hashMore) {
          setPageNumber(prev => prev + 1);
        }
      });
      if (node) observer.current.observe(node);
      console.log('observer.current', observer)
    },
    [loading, hashMore]
  );

  function handleSearch(e){
    setQuery(e.target.value);
    setPageNumber(1);
  }

  return (
    <>
        <input type="text" value={query} onChange={handleSearch} placeholder="Search for books" />
        
        {books.map((book,index)=>{
          if(books.length === index+1){
            return <div ref={lastBookElement}  key={book}>{book}</div>
          }
          return <div key={book}>{book}</div>
        })}
        
        <div>{loading && 'loading...'}</div>
        <div>{error && 'error...'}</div>
     
    </>
  )
}

export default App
