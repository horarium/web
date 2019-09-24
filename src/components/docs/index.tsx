import React from 'react'
import './docs.css'
import { Link } from 'react-router-dom';

const Docs: React.FunctionComponent = () => {
    return (
        <div className="container">
            <div className="docs-content">
                <h1 className="title">horarium docs</h1>
                <p>documentation for horarium APIs</p>
                <div>
                    <Link to="/docs/canvas">canvas</Link>
                </div>
            </div>
        </div>
    )
}

export default Docs