import React from 'react';
import TodoItem from "./TodoItem";
import PropTypes from 'prop-types'

class Todos extends React.Component {

    getSortedTodos() {
        return [...this.props.todos].sort(function (a, b) {
            return new Date(a.dueDate) - new Date(b.dueDate);
        });
    }

    render() {
        return this.getSortedTodos().map(
            (todo) => (
                <TodoItem key={todo.id}
                    todo={todo}
                    markComplete={this.props.markComplete}
                    delTodo={this.props.delTodo}
                />
            ));
    }
}

Todos.propTypes = {
    todos: PropTypes.array.isRequired
}

export default Todos;
