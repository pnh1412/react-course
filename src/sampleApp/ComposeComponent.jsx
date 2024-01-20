import React from 'react';

function CardTitle({ title = 'title' }){
  return (
    <div className='card_title'>{title}</div>
  )
}

function CardContent({ children }){
  return (
    <div className='card_content'>{children}</div>
  )
}

function Card({ title, children })  {
  return (
    <div className='card'>
      <CardTitle title={title} />
      <CardContent>
        {children}
      </CardContent>
    </div>      
  )
}

function ComposeComponent() {
  return (
    <div>
      <h2>SampleApp: Compose Component</h2>

      <Card title="Item1!">
        <p>lorem ....</p>
        <button type="button">Incremenet</button>
      </Card>

      <Card title="Item2!">
        <button type="button">Incremenet</button>
      </Card>

      {/* <div className='card'>
        <CardTitle title="Items 1!" />
        <CardContent>
          <p>lorem ....</p>
          <button type="button">Incremenet</button>
        </CardContent>
      </div>      

      <div className='card'>
        <CardTitle title="Items 2!" />
        <CardContent>
          <button type="button">Incremenet</button>
        </CardContent>
      </div>       */}
    </div>
  )
}

export default ComposeComponent