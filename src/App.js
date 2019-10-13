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
        dueDate: '2017-06-01',
        completed: false,
      },
      {
        id: 1,
        title: 'Встреча с друзьями',
        dueDate: '2018-02-13',
        completed: true,
      },
      {
        id: 2,
        title: 'Совещание на работе',
        dueDate: '2019-10-25',
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

  addTodo(text, date) {
    this.setState({ todos: [...this.state.todos, { id: this.state.todos.length, title: text, dueDate: date, completed: false }] })
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

          <AddTodo addTodoHandler={this.addTodo} />

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
