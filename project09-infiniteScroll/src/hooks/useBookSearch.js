//hooks
import { useEffect , useState } from "react";
import axios from 'axios';

function useBookSearch(query , pageNumber){

    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(false);
    const [books,setBooks] = useState([]);
    const [hashMore,setHashMore] = useState(false);

    useEffect(()=>{
        setBooks([]);
    },[query])

    useEffect(()=>{
        setLoading(true);
        setError(false);
        
        let cancel;

        axios({
            method : 'GET',
            url : 'http://openlibrary.org/search.json',
            params : {q : query , page : pageNumber},
            cancelToken : new axios.CancelToken(c => cancel = c)
        })
        .then(res=>{

            //set books with new data
            setBooks((prev)=>{
                return [...new Set([...prev , ...res.data.docs.map((b)=>b.title)])];
            })

            //check for more
            setHashMore(res.data.docs.length > 0);

            //loading over
            setLoading(false);

        })
        .catch(e =>{
            if(axios.isCancel(e)) return ;
            setError(true);
        })

        return ()=>cancel()

    },[query, pageNumber]);

    return {loading , error , books , hashMore};
}

export default useBookSearch;