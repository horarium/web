import React from 'react'
import './footer.css'

export default function Footer() {
    return (
        <div className="footer">
            <p>&copy; horarium {(new Date().getFullYear())}. All rights reserved.</p>
        </div>
    )
}