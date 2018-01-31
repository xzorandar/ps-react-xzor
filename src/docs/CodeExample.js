import React from 'react';
import PropTypes from 'prop-types';
import '../prism';
import {PrismCode} from "react-prism";
import '../prism-okaida.css';


class CodeExample extends React.Component {
  render() {
    return (
      <pre ref={ref => { this.element = ref }}>
          <PrismCode className="language-jsx">
            <code>
              {this.props.children}
            </code>
            </PrismCode>
      </pre>
    )
  }
}

CodeExample.propTypes = {
  children: PropTypes.string.isRequired
}

export default CodeExample; 
