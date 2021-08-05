class MutableNumberView {

    constructor(model, controller) {
        this.model = model;
        this.controller = controller;
    }

    registerIncrementCallback(onIncrementCallback) {
        this.onIncrementCallback = onIncrementCallback;
    }

    registerDecrementCallback(onDecrementCallback) {
        this.onDecrementCallback = onDecrementCallback;
    }

    renderUpdate() {
        this.numberSpan.textContent = this.model.value;
    }

    assignNewValue(behaviorCallback) {
        this.behaviorCallback = behaviorCallback;
        this.behaviorCallback(); 
        this.numberSpan.classList.add('animate-bounce');
        setTimeout(() => {
            this.numberSpan.classList.remove('animate-bounce');
        }, 500);
    }

    renderMain() {
        this.numberSpan = document.getElementById('display');
        this.incrementButton = document.getElementById('addButton');
        this.decrementButton = document.getElementById('decButton');

        this.incrementButton.onclick = () => this.assignNewValue(
            this.onIncrementCallback
            );

        this.decrementButton.onclick = () => this.assignNewValue(
            this.onDecrementCallback
            );
 
        this.renderUpdate();
    }
}

export default MutableNumberView;