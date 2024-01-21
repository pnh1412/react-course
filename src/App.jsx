import { useState } from 'react';

// components
import Button from './components/Button';
import Props from './Props';
import State from './State';
import Components from './Components';
import ComposeComponent from './sampleApp/ComposeComponent';
import HauComposeComponent from './sampleApp/HauComposeComponent';
import ConditionalRendering from './ConditionalRendering';
import List from './List';
import HauConditionalRendering from './sampleApp/HauConditionalRendering';

// react function component by PascalCase
function LargeText() {
  return (
    <span>large text</span>
  )
}

function SmallText() {
  return (
    <span>small text</span>
  )
}

function App() {
  // variables
  const count = 15; // valid javascript 
  const user = {
    firstName: 'John',
    lastName: 'Doe',
    avatar: 'https://picsum.photos/200/300',
  }
  const expressionJSX = (
    <div>
      express in JSX variable
    </div>
  )

  // JSX expressions must have one parent element
  const parentElement = (
    <>
      <div>parent element</div>
      <div>parent element</div>
    </>
  )

  // normal function of javasript by not PascalCase
  function renderButton() {
    return (
      <button>Click me</button>
    )
  }

  // JSX
  return (
    <article>
      <h1>My First Component</h1>
      <ol>
        <li>Components: UI Building Blocks</li>
        <li>Defining a Component</li>
        <li>Using a Component</li>
      </ol>

      <h3>Expression in JSX</h3>
      <div>Count: {count} </div>
      <div>Operator: {count > 10 ? <span>large</span> : <span>small</span>}</div>
      <div>Operator with react component: {count > 10 ? <LargeText /> : <SmallText />}</div>

      <br />
      <div>{expressionJSX}</div>
      <div>JSX with function {renderButton()}</div>
      <div>JSX with function {renderButton()}</div>
      <br />

      <div>JSX expressions must have one parent element: {parentElement}</div>

      <br />
      <div>render JSX with element must be  closed</div>
      <div />

      <br />
      <div>render JSX with react function component</div>
      <Button />

      <br />
      <div>
        render JSX with images:
        The alt attribute provides alternative information for an image if a 
        user for some reason cannot view it (because of slow connection, an 
        error in the src attribute, or if the user uses a screen reader).
      </div>
      <img src={user.avatar} width={40} height={40} alt="person" />
   
      <Props />

      <State />

      <Components 
        count={count}
      />

      <ComposeComponent />


      <h2>Sample App: ComposeComponent</h2>
      <HauComposeComponent />
        
      <br />
      <ConditionalRendering />

      <br />
      <List />


      <HauComposeComponent />
      <HauConditionalRendering />

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

   </article>
  )
}

export default App
