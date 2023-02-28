import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

class MyThing {
  @tracked color;
  @tracked negativeColor;

  updateColor(value) {
    this.color = value;
  }

  updateNegativeColor(value) {
    this.negativeColor = value;
  }
}

class Container {
  @tracked myThing;
  constructor() {
    this.myThing = new MyThing();
  }
}

export default class ApplicationController extends Controller {
  appName = 'Ember Twiddle';

  @tracked thing = new Container();

  @action
  onChange(value) {
    this.thing.myThing.updateColor(value);
  }

  @action
  onChangeNegative(value) {
    this.thing.myThing.updateNegativeColor(value);
  }
}
