import {observable, action, decorate, computed} from "mobx";

const defaultActionType = {
    increase: "increase",
    decrease: "decrease"
}

class CountStore {
    defaultValue = {
        "one": 0,
        "second": 10,
        "third": 20,
    }
    get sum() {
        let sum =0;
        for (const key in this.defaultValue) {
            if (this.defaultValue.hasOwnProperty(key)){
                sum += this.defaultValue[key];
            }
        }
        return sum;
    };

    handleClick(type, caption) {
        let valueObj = this.defaultValue;
        if (type === defaultActionType.increase) {
            valueObj[caption] ++;
        } else {
            valueObj[caption] --;
        }
    }

    addSum() {
        console.log(222)
        console.log(this.sum)
        this.handleClick(defaultActionType.increase, "one");
    }
}

decorate(CountStore, {
    defaultValue: observable,
    sum: computed,
    handleClick: action.bound,
    addSum: action.bound
})

const countStore = new CountStore();
export default countStore;