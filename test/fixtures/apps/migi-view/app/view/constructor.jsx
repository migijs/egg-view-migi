/**
 * Created by army8735 on 2018/9/9.
 */

'use strict';

class Component extends migi.Component {
  constructor(data) {
    super(data);
  }
  render() {
    return <p>{ this.props.a }</p>;
  }
}

export default function(data) {
  return <Component a={ data.a }/>;
};
