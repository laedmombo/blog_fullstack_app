import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import NewPost from './route/NewPost';
import Detail from './route/Detail';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path='/' element={ <App />}/>
          <Route path='/newpost' element={<NewPost />}/>
          <Route path='/detail' element={<Detail />}/>
          <Route path='*' element={<main><p>There's nothing here</p></main>}/> 
        </Route>
      </Routes>
    </BrowserRouter>
   
  </React.StrictMode>,
  document.getElementById('root')
);


