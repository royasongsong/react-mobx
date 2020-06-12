import React , {Component} from "react";
import {inject, observer} from "mobx-react";

export default inject("store") (observer(class Summary extends Component {
    // constructor(props) {
    //     super(props);
    //     // this.state = {
    //     //     sum: this.props.sum
    //     // }
    //     // this.getSum = this.getSum.bind(this);
    // }

    // static getDerivedStateFromProps(nextProps, prevState) {
    //     if (nextProps.sum !== prevState.sum) {
    //         return {
    //             sum: nextProps.sum
    //         }
    //     } else {
    //         return null
    //     }
    // }

    // getSum(defaultValue) {
    //     let sum =0;
    //     for (const key in defaultValue) {
    //         if (defaultValue.hasOwnProperty(key)){
    //             sum += defaultValue[key];
    //         }
    //     }
    //     return sum;
    // }

    render() {
        //CountCtrolPanel有observer子组件就不用了，只需要inject store？
        const {sum, addSum} = this.props.store;
        return <div style={{marginLeft: 30}}>
            {sum}
        </div>
    }
}))
