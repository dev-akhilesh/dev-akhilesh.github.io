import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Box } from '@chakra-ui/react';
import Skills from "./components/Skills"
import Home from './components/Home';
import GithubStats from "./components/GithubStats"
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
function App() {
  return (
    <Box minW='280px' className="App" color='black' bg="white">

      <Navbar />

      <Box m='auto' w={{ base: '92%', '1120px': '82%' }} >


        <Home />
        <About />
        <Skills />
        <Project />
        <GithubStats />
        <Contact />
      </Box>


      {/* <Image src = 'https://raw.githubusercontent.com/Trilokia/Trilokia/379277808c61ef204768a61bbc5d25bc7798ccf1/bottom_header.svg'></Image> */}


    </Box>
  );
}

export default App;