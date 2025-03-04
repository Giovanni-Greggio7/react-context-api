import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import ChiSiamo from './pages/ChiSiamo.jsx'
import ListaDeiPost from './pages/posts/ListaDeiPost.jsx'
import SinglePost from './pages/posts/SinglePost.jsx';

import DefaultLayout from "./layouts/DefaultLayout"

import { GlobalProvider } from './context/GlobalContext';

function App() {


  return (
    <>
      <GlobalProvider>
        <BrowserRouter>
          <Routes>
            <Route Component={DefaultLayout}>
              <Route path="/" Component={HomePage} />
              <Route path="/contact" Component={ChiSiamo} />
              <Route path="/products" Component={ListaDeiPost} />
              <Route path="/products/:id" Component={SinglePost} />
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalProvider>
    </>
  )
}

export default App

