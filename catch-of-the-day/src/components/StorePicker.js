import React from 'react'

class StorePicker extends React.Component {
    render(){
        return (
            
            <form className="store-selector">
            {/* this is a comment */}
                <input type="text" required placeholder="Store Name" />
                <button type="submit">Visit store -></button>
            </form>
        )
    }
}

export default StorePicker