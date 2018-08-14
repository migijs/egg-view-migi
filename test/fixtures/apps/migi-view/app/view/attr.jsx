/**
 * Created by army8735 on 2018/8/14.
 */

'use strict';

class Component extends migi.Component {
  constructor(...data) {
    super(...data);
  }
  render() {
    return <div class={ this.props.class } title={ this.props.title }>
      <input readonly={ this.props.readonly } value={ this.props.value }/>
    </div>;
  }
}

export default Component;
