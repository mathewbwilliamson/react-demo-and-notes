import React from 'react'

// Basic version of uncontrolled forms
class Uncontrolled extends React.Component {
    constructor(props) {
        super(props)

        this.input = React.createRef()

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault()
        console.log('[matt] this.input', this.input.current.value)
        
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Input Test</label>
                <input
                    type="text"
                    ref={this.input}
                />
                <button type="submit">Submit Form</button>
            </form>
        )
    }
}

export default Uncontrolled