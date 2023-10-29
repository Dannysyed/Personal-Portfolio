
import React from 'react'
import Navbar from '../../components/Navbar'
import '@styles/globals.css'
export const metadata = {
    title: "Daniyal's Portfolio",
    description: "Showcase of my working Projects"
}
const Layout = ({ children }) => {
    return (
        <html lang='en'>
            <body>
                <div>

                    <Navbar />
                    {children}
                </div>
            </body>
        </html>
    )
}

export default Layout