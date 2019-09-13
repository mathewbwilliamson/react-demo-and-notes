import React from 'react'

// TODO Do a handling of multiple items on a form along with adding a select box.
class BasicForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            value: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        this.setState({
            value: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        console.log('[matt] this.state.value', this.state.value)
        
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Input Test</label>
                <input
                    type="text"
                    value={this.state.value}
                    onChange={this.handleChange}
                />
                <button type="submit">Submit Form</button>
            </form>
        )
    }
}

export default BasicForm