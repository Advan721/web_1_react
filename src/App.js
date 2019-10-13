import React from 'react';
import './App.css';
import Todos from './components/Todos'
import Header from "./components/layout/header";
import AddTodo from "./components/addTodo";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.addTodo = this.addTodo.bind(this);
  }

  state = {
    todos: [
      {
        id: 0,
        title: 'Вынести мусор',
        completed: false,
      },
      {
        id: 1,
        title: 'Встреча с друзьями',
        completed: true,
      },
      {
        id: 2,
        title: 'Совещание на работе',
        completed: false,
      },
    ]
  };
  // Toggle complete
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
  }

  addTodo(text) {
    this.setState({ todos: [...this.state.todos, { id: this.state.todos.length, title: text, completed: false }] })
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row mb-2">
            <div className="col">
              <Header />
            </div>
          </div>

          <div className="row mb-2">
            <div className="col">
              <AddTodo addTodoHandler= {this.addTodo}/>
            </div>
          </div>

          <div className="row">
            <div className="col">

              <Todos todos={this.state.todos}
                markComplete={this.markComplete}
                delTodo={this.delTodo}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
