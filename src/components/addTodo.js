import React, { Component } from 'react';

class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.input = React.createRef();
    }

    render() {
        return (
            <form style={{ display: 'flex' }}>
                <input type='text'
                    name='title'
                    placeholder='Add todo'
                    ref={this.input}
                    style={{ flex: '10' }}
                />
                <button type="button"
                    value='Submit'
                    className='btn btn-dark ml-1'
                    onClick={() => this.props.addTodoHandler(this.input.current.value)}
                >Submit</button>
            </form>
        );
    }
}

export default AddTodo;