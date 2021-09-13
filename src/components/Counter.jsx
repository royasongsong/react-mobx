import React , {Component} from "react";
import {inject, observer} from "mobx-react";

export default inject("store") (observer(class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            caption: this.props.caption,
            // num: this.props.value[this.props.caption],
        }
    }

    //111
    // static getDerivedStateFromProps(nextProps, prevState) {
    //     if (nextProps.value[nextProps.caption] !== prevState.num) {
    //         return {
    //             num: nextProps.value[prevState.caption]
    //         }
    //     } else {
    //         return null
    //     }
    // }

    render() {
        const {defaultValue, handleClick} = this.props.store;
        return( 
            <div style={{marginBottom: 10}}>
                <button style={{marginRight: 10, width: 30, height: 30}} onClick={handleClick.bind(this, "increase", this.state.caption)}>+</button>
                <button style={{marginRight: 10, width: 30, height: 30}} onClick={handleClick.bind(this, "decrease", this.state.caption)}>-</button>
                <span>{this.state.caption + "-----" + defaultValue[this.state.caption]}</span>
            </div>)
    }
}))