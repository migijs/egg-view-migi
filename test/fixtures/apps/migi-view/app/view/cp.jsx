/**
 * Created by army8735 on 2017/9/30.
 */

'use strict';

class Component extends migi.Component {
  constructor(...data) {
    super(...data);
  }
  render() {
    return <div>{ this.props.a}</div>;
  }
}

export default Component
