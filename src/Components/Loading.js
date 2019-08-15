import React from 'react'
import loading from '../images/gif/loading-arrow.gif'
function Loading() {
    return (
        <div className="loading">
            <h4>room data loading</h4>
            <img src={loading} alt="" />
        </div>
    )
}

export default Loading
