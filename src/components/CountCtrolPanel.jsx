import React , {Component, Fragment} from "react";
import Counter from "./Counter";
import Summary from "./Summary";



export default class CountCtrolPanel extends Component {
    // constructor() {
    //     super();
    // }

    render() {
        return <Fragment>
            <Counter caption="one" ></Counter>
            <Counter caption="second" ></Counter>
            <Counter caption="third" ></Counter>
            <hr/>
            <Summary></Summary>
        </Fragment>
    }
}
