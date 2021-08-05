class MutableNumberModel {
    constructor(value, incrementValue, decrementValue){
        this.value = value;
        this.incrementValue = incrementValue;
        this.decrementValue = decrementValue;
    }

    increment() {
        this.value += this.incrementValue ? this.incrementValue : 1;
        this.onChangeDataCallback();
    }
    
    decrement() {
        this.value -= this.decrementValue ? this.decrementValue : 1;
        this.onChangeDataCallback();
    }

    registerChangeCallback(onChangeDataCallback){
        this.onChangeDataCallback =  onChangeDataCallback;
    }
}

export default MutableNumberModel;

