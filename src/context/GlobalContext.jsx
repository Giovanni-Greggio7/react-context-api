import { createContext, useState, useContext } from 'react';
import axios from 'axios';

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
    
  const [posts, setPosts] = useState([]);

  const [singlePost, setSinglePost] = useState({
    id: '',
    title: '',
    content: '',
    image: null,
    tags: []
})

  const url = import.meta.env.VITE_ENDPOINT_URL;

  //chimate api
  //chimata per ottenere tutti i post
  const fetchData = () => {
    axios.get(url).then((res) => setPosts(res.data));
  };

  //chimata api per mostrare il singolo post
  const getPostId = (id) => {
    axios.get(`${url}/${id}`).then((res) => setSinglePost(res.data));
  };

  const value = {
    posts,
    singlePost,
    fetchData,
    getPostId
  }


  return(
    
    <GlobalContext.Provider value={ value }>
        {children}
    </GlobalContext.Provider>
  )

};

const useGlobalContext = () => useContext(GlobalContext);

export { GlobalProvider, useGlobalContext };