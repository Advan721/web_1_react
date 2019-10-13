import React, { Component } from 'react';

class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.input = React.createRef();
        this.dueDate = React.createRef();
    }

    render() {
        return (
            <form>
                <div className="form-row mb-2">
                    <div className="col-md-9">
                        <input type='text'
                            name='title'
                            placeholder='Add todo'
                            ref={this.input}
                            className='form-control'
                        />
                    </div>
                    <div className="col-md-2">
                        <input type='date'
                            name='dueDate'
                            ref={this.dueDate}
                            className='form-control'
                        />
                    </div>
                    <div className="col-md-1">
                        <button type="reset"
                            value='Submit'
                            className='btn btn-dark'
                            onClick={() => this.props.addTodoHandler(this.input.current.value, this.dueDate.current.value)}
                        >Submit</button>
                    </div>
                </div>
            </form >
        );
    }
}

export default AddTodo;