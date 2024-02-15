import React from 'react';
import Homescreen from './Screens/homeScreens/HomeScreens.js'
import Header from "./components/CategoriesBar/CategoriesBar.js";
import SideBar from './components/SideBar/SideBar.js';
import { Container } from 'react-bootstrap';


function App() {
  return (
    <>
      <Header/>
      <div className='app_container'>
        <SideBar />
        <Container fluid className='app_main'>
          <Homescreen/>
        </Container>
      </div>

    </>
  );
}

export default App;
