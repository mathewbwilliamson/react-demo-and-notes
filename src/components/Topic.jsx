import React from 'react'

const Topic = ({match}) => {
    return (
        <div>This is a topic: {match.params.id}</div>
    )
}

export default Topic