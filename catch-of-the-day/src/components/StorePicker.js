import React from 'react'
import {getFunName} from '../helpers'

class StorePicker extends React.Component {
    constructor(){
        super();
        this.goToStore = this.goToStore.bind(this);
    }
    goToStore(){
        event.preventDefault();
        const storeId = this.storeInput.value
        
        this.context.router.transitionTo(`store/${storeId}`)
    }
    render(){
        return (
            
            <form className="store-selector" onSubmit={this.goToStore}>
            {/* this is a comment */}
                <input type="text" required 
                placeholder="Store Name" 
                defaultValue={getFunName()}
                ref={(input)=>{this.storeInput = input}}
                />
                <button type="submit">Visit store -></button>
            </form>
        )
    }
}

StorePicker.contextTypes = {
    router: React.PropTypes.object
}

export default StorePicker