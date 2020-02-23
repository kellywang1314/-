import * as React from 'react'
import { inject,observer } from 'mobx-react'
@inject('store')
@observer 
class Cal extends React.Component{
    constructor(props){
        super(props)
    }

    add = () => {
        this.props.store.add()
    }

    reduce = () => {
        this.props.store.reduce()
    }

    render(){
        return(
            <React.Fragment>    
                {/* <div>{this.props.store.retunum}</div>
                <div>{this.props.store.addNum}</div> */}
                <div>{this.props.store.num}</div>
                <div onClick ={this.add} >+</div>
                <div onClick ={this.reduce} >-</div>
            </React.Fragment>   
        )
    }
}

export default Cal