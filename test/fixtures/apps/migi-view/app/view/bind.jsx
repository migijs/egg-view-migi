/**
 * Created by army8735 on 2018/8/14.
 */

'use strict';

class Component extends migi.Component {
  constructor(...data) {
    super(...data);
    this.value = this.props.value
  }
  @bind value
  click() {
    this.value = 2;
  }
  render() {
    return <div>{ this.value }</div>;
  }
}

export default Component;
