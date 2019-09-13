import React from 'react'

class DataFetch extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            error: null,
            isLoaded: false,
            data: []
        }
    }

    componentDidMount() {
        // Simulate a slow load
        // setTimeout(() => {
        //     fetch('https://jsonplaceholder.typicode.com/posts')
        //         .then(response => response.json())
        //         .then(json => this.setState({
        //             data: json,
        //             isLoaded: true
        //         }))
        // }, 2000);

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => this.setState({
                data: json,
                isLoaded: true
            }))
    }

    render() {
        const {data, isLoaded} = this.state
        const postData = data.filter(item => item.id <= 10)
        console.log('[matt] postData', postData)
        
        if (!isLoaded) {
            return <div>Loading...</div>
        }

        return (
            <ul>
                {postData
                    .map((item, idx) => (
                        <li key={item.id}>
                            <h3>{item.title}</h3>
                            <p>{item.body}</p>
                        </li>
                    ))
                }
                
            </ul>
        )
    }
    
}

export default DataFetch