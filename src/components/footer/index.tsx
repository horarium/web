import React from 'react'

const Footer: React.FunctionComponent = () => {
    return (
        <footer>
            <p>&copy; horarium {(new Date().getFullYear())}. All rights reserved.</p>
        </footer>
    )
}

export default Footer