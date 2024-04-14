import { useState } from 'react';
import { Link, Routes, Route, NavLink } from 'react-router-dom';

// components
import Props from './Props';
import State from './State';
import Components from './Components';
import ComposeComponent from './sampleApp/ComposeComponent';
import HauComposeComponent from './sampleApp/HauComposeComponent';
import ConditionalRendering from './ConditionalRendering';
import List from './List';
import HauConditionalRendering from './sampleApp/HauConditionalRendering';
import HauList from './sampleApp/HauList';
import GuestGreeting from './sampleApp/GuestGreeting';
import CSS from './CSS';
import LiftingStateUp from './LiftingStateUp';
// import HauShoeCart from './sampleApp/HauShoeCart';
import HauBox from './sampleApp/HauBox';
// react function component by PascalCase
import Form from './Form';
import LifecycleHook from './LifecycleHook';
import ShareStateComponent from './ShareStateComponent';
import EffectHook from './EffectHook';
import Movie from './components/contextApi/Movie';
import RefHooks from './RefHooks';
import PerformanceHook from './PerformanceHook';
import Collapse from './challenge/Collapse';
import HauCollapse from './challenge/HauCollapse';
import JSX from './JSX';
import User from './components/outlet/User';
import Profile from './components/outlet/Profile';
import Account from './components/outlet/Account';

/* <Outlet>
  An <Outlet> should be used in parent route elements to render their child route elements.
*/


function App() {
  // variables
  const count = 15; // valid javascript 
  
  // JSX
  return (
    <article className='p-4'>
      <h1>My First Component</h1>
      <ul className="flex">
        <li className="mr-6">
          <Link to="/introduction-jsx" className="text-blue-500 hover:text-blue-800">Introduction JSX</Link>
        </li>
        <li className="mr-6">
          <Link to="/props" className="text-blue-500 hover:text-blue-800">Props</Link>
        </li>
        <li className="mr-6">
          <NavLink to="/state" className="text-blue-500 hover:text-blue-800">State</NavLink>
        </li>
        <li className="mr-6">
          <Link to="/user" className="text-blue-500 hover:text-blue-800">User</Link>
        </li>
      </ul>
      <br />
      <hr />
      <br />
      <Routes>
        <Route path='/introduction-jsx' element={<JSX />} />
        <Route path='/props' element={<Props />} />
        <Route path='/state' element={<State />} />
        <Route path='/user' element={<User />}>
          <Route path='profile' element={<Profile />} />
          <Route path='account' element={<Account />} />
        </Route>
      </Routes>  
      <br />
      <hr />
      
   
      <Components 
        count={count}
      />

      <ComposeComponent />


      <h2>Sample App: ComposeComponent</h2>
      <HauComposeComponent />
      <HauComposeComponent />
      <HauConditionalRendering />
      <HauList />
      <br />
      <ConditionalRendering />

      <br />
      <GuestGreeting />

      <br />
      <CSS  />

      <br />
      <List />

      <br />
      <LiftingStateUp />

      <br />
      <HauBox />
      
      <br />
      <Form />

      <br />
      <LifecycleHook />

        
      <br />
      <ShareStateComponent />

      <br />
      <EffectHook />

      <br />
      <Movie />

      <br />
      <RefHooks />

      <br />
      <PerformanceHook />

      <br />
      <Collapse />
    

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <HauCollapse />
   </article>
  )
}

export default App
