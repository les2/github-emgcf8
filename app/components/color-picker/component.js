import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class extends Component {
  get value() { return this.args.value; }
  
  @action
  onInput(event) {
    this.args.onChange(event.target.value);
  }

  @action
	add() {
    this.args.onChange('#0000ff');
  }
  
  @action
  clear() {
    this.args.onChange(null);
  }
}
