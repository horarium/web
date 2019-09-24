import React from 'react'
import { RedocStandalone } from 'redoc'

const Canvas: React.FunctionComponent = () => {
    return (
        <div className="container">
            <div id="#docs">
                <RedocStandalone specUrl="http://localhost:3000/openapi.yaml" options={{
                    theme: { colors: { primary: { main: '#ffff' } } }
                }} />
            </div>
        </div>
    )
}

export default Canvas