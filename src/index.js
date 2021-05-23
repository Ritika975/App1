import React from 'react';
import ReactDOM from 'react-dom';

class MyForm extends React.Component {
    render() {
      return (
        <form style={{backgroundColor: "lightblue"}}>
          <h1>Hello</h1>
          <p>Enter your name:</p>
          <input
            type="text"
          />
          <p>username:</p> <input type="text" />
          <p>password:</p> <input type="text" />
          <p>
          <input
        type='submit'
      />
      </p>
        </form>
      );
    }
  }
ReactDOM.render(<MyForm />,document.getElementById('root'));


