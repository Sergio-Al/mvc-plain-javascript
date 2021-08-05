class MutableNumberController {

    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.model.registerChangeCallback(
            () => this.view.renderUpdate()
        );
        this.view.registerIncrementCallback(
            () => this.model.increment()
        );
        this.view.registerDecrementCallback(
            () => this.model.decrement()
        );

    }
}

export default MutableNumberController;