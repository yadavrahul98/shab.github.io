import React from 'react';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  link
}from "react-router-dom"

import {Home} from './componat/home';
import {Contact} from './componat/contact';
import {Topnav} from './componat/Topnav';             
import {Project} from './componat/project';             
import {Experience} from './componat/experience';             
import { About } from './componat/about';


export default function App(){
  return (
    <Router>
      <div>
        <Topnav></Topnav>
        <Switch>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/" index element={<Home/>}></Route>
          <Route path="/Experience" element={<Experience/>}></Route>
          <Route path="/project" element={<Project/>}></Route>
        </Switch>
      </div>
    </Router>
  );
}
