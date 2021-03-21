import React from 'react'
import history, { useHistory } from "react-router-dom"

const ProtectedRoute = ({authorized}) => {
    const history = useHistory()
    if (!authorized) {
        history.push("/login")
    }
    return (
        <div>
            
        </div>
    )
}

export default ProtectedRoute
