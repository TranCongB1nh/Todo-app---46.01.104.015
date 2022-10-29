import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import { Login } from './components/Login'
import { HomePage } from './components/Home';
import { About } from './components/About';
import { Todo } from './components/Todo';
import { MyContextProvider } from './contexts/MyContext';
// import { TodoContextProvider } from './contexts/TodoContext';
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function App() {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <div className="App">
      <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            directions: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
    />
      <MyContextProvider>
        <BrowserRouter>
          <nav>
            <Link to='/home' className='mylink'>Home</Link>
            <Link to='/about' className='mylink'>About</Link>
            <Link to='/todos' className='mylink'>TODOs</Link>
            <Link to='/login' className='mylink'>Login</Link>
          </nav>
          
            <Routes>
              <Route exact path='/' element={<HomePage />} />
              <Route exact path='/about' element={<About />} />
              <Route exact path='/home' element={<HomePage />} />
              <Route exact path='/todos' element={<Todo />} />
              <Route exact path='/login' element={<Login />} />
            </Routes>
          
        </BrowserRouter>
      </MyContextProvider>
    </div>
  );
}

export default App;