import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/home/Home.jsx'
import AboutPage from './pages/about/AboutPage.jsx'
import Services from './pages/services/Services.jsx'
import Contact from './pages/contact/Contact.jsx'
import FindADoctor from './pages/find-a-doctor/FindADoctor.jsx'
import ErrorPage from './pages/errorPage/Error.jsx'
import DoctorInformation from './pages/Doctor-info/DoctorInformation.jsx'
import PatientVisitor from './pages/Patient-Visitor/PatientVisitor.jsx'
import AskDoctor from './pages/questions/AskDoctor.jsx'
import PatientVisitorDS from './pages/Patient-Visitor-DS/PatientVisitorDS.jsx'

import { BrowserRouter, createHashRouter, Route } from "react-router-dom";
import './index.css'

import { createBrowserRouter, RouterProvider, } from "react-router-dom";

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/find-a-doctor",
    element: <FindADoctor />,
  }
  ,
  // {
  //   path: "/DoctorInformation",
  //   element: <DoctorInformation />,
  // } ,
  {
    path: "/DoctorInformation/:id?",
    element: <DoctorInformation />,
  },
  // comment for test the doctor case PatientVisitorDS
  // {
  //   path: "/PatientVisitor",
  //   element: <PatientVisitor />,
  // } ,
  {
    path: "/PatientVisitorDS",
    element: <PatientVisitorDS />,
  },
  {
    path: "/AskDoctor",
    element: <AskDoctor />,
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
