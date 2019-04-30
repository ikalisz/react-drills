import React, {Component} from 'react'


export default class NewTask extends Component {
    constructor() {
        super()
        this.state = {
            input: ''
        }
    }
    handleUpdateInput = (val) => {
        this.setState({input: val.target.value})
    }

    handleAdd() {
        this.props.add(this.state.input)
    }
    render() {
        return (
            <div>
                <input type="text" onChange={(e) => this.handleUpdateInput(e)}/>
                <button onClick={() => this.handleAdd()}>Add</button>
            </div>
        )
    }
}