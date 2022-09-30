import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import AddPage from './Pages/AddPage';
import ArchivePage from './Pages/ArchivePage';
import ContentWrapper from './Pages/Content';
import HomePage from './Pages/HomePage';
import NotFound from './Pages/NotFound';


function App() {
  return (
    <div className="app-container">
      <header className='contact-app__header'>
      <h1><Link to="/"> Aplikasi Catatan</Link></h1>  
      <Navigation/>
      </header>
      <main>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/add' element={<AddPage/>}/>
            <Route path='/notes/:id' element={<ContentWrapper/>}/>
            <Route path='/archives' element={<ArchivePage/>}/>
            <Route path='*' element={<NotFound/>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
