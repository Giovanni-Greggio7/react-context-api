import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import ChiSiamo from './pages/ChiSiamo.jsx'
import ListaDeiPost from './pages/posts/ListaDeiPost.jsx'
import SinglePost from './pages/posts/SinglePost.jsx';

import DefaultLayout from "./layouts/DefaultLayout"

function App() {


  return (
    <>
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
    </>
  )
}

export default App

