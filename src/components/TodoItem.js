import React from 'react';
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

class TodoItem extends React.Component {
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '5px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    };

    markComplete = (e) => {
        console.log(this.props)
    }

    render() {
        const { id, title, dueDate } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p align='left'>
                    <input type='checkbox'
                        onChange={this.props.markComplete.bind(this, id)}
                    />
                    {' ' + title + ' '}
                    <span className='text-muted'>{dueDate}</span>
                    <button onClick={this.props.delTodo.bind(this, id)}
                        className="btn btn-default btn-xs float-right">
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                </p>
            </div>
        );
    }
}


TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
};


export default TodoItem;
