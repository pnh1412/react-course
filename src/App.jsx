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
import SignIn from './components/SignIn';
import MainLayout from './layouts/MainLayout';
import CommentList from './components/comment/CommentList';
import CommentDetail from './components/comment/CommentDetail';
import AuthComponent from './components/AuthComponent';

/* <Outlet>
  An <Outlet> should be used in parent route elements to render their child route elements.
*/


function App() {
  // variables
  const count = 15; // valid javascript 
  
  // JSX
  return (
    <>
      <Routes>
        <Route 
          path='/introduction-jsx' 
          element={
            <AuthComponent>
              <MainLayout>
                <JSX />
              </MainLayout>
            </AuthComponent> 
          } 
        />
        <Route path='/props' element={<AuthComponent><MainLayout><Props /></MainLayout></AuthComponent>} />
        <Route path='/state' element={<AuthComponent><MainLayout><State /></MainLayout></AuthComponent>} />
        <Route path='/user' element={<AuthComponent><MainLayout><User /></MainLayout></AuthComponent>}>
          <Route path='profile' element={<Profile />} />
          <Route path='account' element={<Account />} />
        </Route>
        <Route path='/state' element={<AuthComponent><MainLayout><Components count={count} /></MainLayout></AuthComponent>} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/comment' element={<AuthComponent><MainLayout><CommentList /></MainLayout></AuthComponent>} />
        <Route path='/comment/:id' element={<AuthComponent><MainLayout><CommentDetail /></MainLayout></AuthComponent>} />
        <Route path='/*' element={<AuthComponent><MainLayout><div>please choose correct url</div></MainLayout></AuthComponent>} />
      </Routes>  

      <br />
      <hr />
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
    </>
  )
}

export default App
