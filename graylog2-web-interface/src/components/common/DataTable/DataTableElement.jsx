import PropTypes from 'prop-types';
import React from 'react';

/**
 * Component used to encapsulate each header or row inside a `DataTable`. You probably
 * should not use this component directly, but through `DataTable`. Look at the `DataTable`
 * section for a usage example.
 */
class DataTableElement extends React.Component {
  static propTypes = {
    /** Element to be formatted. */
    element: PropTypes.any,
    /**
     * Formatter function. It expects to receive the `element`, and `index` as arguments and
     * returns an element to be rendered.
     */
    formatter: PropTypes.func.isRequired,
    /** Element index. */
    index: PropTypes.number,
  };

  static defaultProps = {
    element: undefined,
    index: undefined,
  }

  render() {
    const { formatter, element, index } = this.props;

    return formatter(element, index);
  }
}

export default DataTableElement;
