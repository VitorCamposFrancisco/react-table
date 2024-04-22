import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import PrincipalPage from './pages/PrincipalPage';
import App from './App';
import FifthExercise from './exercises/FifthExercise';
import FourthExercise from './exercises/FourthExercise';
import NavBarComponents from './components/NavBarComponent';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SixthExercise from './exercises/SixthExercise';
import ThirdExercise from './exercises/ThirdExercise';
import FirstExercise from './exercises/FirstExercise';
import SecondExercise from './exercises/SecondExercise';




const router = createBrowserRouter([
  {
    path: "/",
    element: <div/>,
  },
  {
    path: "/pageOne",
    element: <FirstExercise />
  },
  {
    path: "/pageTwo",
    element: <SecondExercise />
  },
  {
    path: "/pageThree",
    element: <ThirdExercise />
  },
  {
    path: "/pageFour",
    element: <FourthExercise />
  },
  {
    path: "/pageFive",
    element: <FifthExercise />
  },
  {
    path: "/pageSix",
    element: <SixthExercise />
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <NavBarComponents/>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
