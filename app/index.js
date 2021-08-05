import MutableNumberModel from './models/mutableNumber.js';
import MutableNumberView from './views/mutableNumber.js';
import MutableNumberController from './controllers/mutableNumber.js';

const model = new MutableNumberModel(4, 2, 2);
const view =  new MutableNumberView(model);
const controller = new MutableNumberController(model, view);

view.renderMain();
