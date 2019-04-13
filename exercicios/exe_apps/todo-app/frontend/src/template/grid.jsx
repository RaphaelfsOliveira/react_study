import React, {Component} from 'react';

export default class Grid extends Component {
  toCssClasses(numbers='12 12 12 12') {
    const cols =  numbers.split(' ');
    const grids = ['xs', 'sm', 'md', 'lg'];
    let classes = '';

    cols.forEach((col, i) => {
      if (col && i < grids.length) {
        classes += `col-${grids[i]}-${cols[i]} `;
      }
    });
    return classes;
  }

  render() {
    const gridClasses = this.toCssClasses(this.props.cols);
    console.log(gridClasses);
    return (
      <div className={gridClasses}>
        {this.props.children}
      </div>
    )
  }
};
