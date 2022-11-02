import React, {Component} from 'react'
const UpdateScroller = (OriginalComponent) => {
    class NewComponent extends Component
    {
        render() {
            return <OriginalComponent name={"PUBG"}/>
        }
    }
    return NewComponent
}
export default UpdateScroller