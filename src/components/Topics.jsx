import React from 'react'
import {Route, Link} from 'react-router-dom'
import Topic from './Topic'

const Topics = ({match}) => {
    console.log('[matt] match', match)
    // QUESTION I think I have the basics of React router. Memorize how to do this. 
    return (
        <div>
            <h2>Topics</h2>
            <ul>
                <li>
                    <Link to={`${match.url}/components`}>Components</Link>
                </li>
                <li>
                    <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
                </li>
            </ul>

            <Route path={`${match.path}/:id`} component={Topic} />
            <Route
                exact
                path={match.path}
                render={() => <h3>Please select a topic.</h3>}
            />
    </div>
    )
}

export default Topics