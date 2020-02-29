import React, { Component } from 'react';
import PropTypes from 'prop-types';

class IconArrow extends Component {
  static defaultProps = {
    iconName: 'Icon Arrow',
    className: '',
    size: '48',
    fill: `${props => props.theme.colours.black}`,
    rotate: '0',
  };

  render() {
    const { iconName, className, size, fill, rotate } = this.props;
    const styles = {
      transform: `rotate(${rotate}deg)`,
    }
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" style={styles} aria-labelledby={iconName}>
          <title id={iconName}>icon-arrow</title>
          <g id="arrow" stroke="none" stroke-width="1" fill={fill} fill-rule="evenodd">
              <path d="M38.7233713,44 L38.7233713,40.1617192 C34.4879698,40.1617192 31.3071442,39.2373107 29.1814459,37.386839 C27.0546445,35.5374705 25.9917954,32.5215602 25.9917954,28.3374535 L25.9917954,12.6236123 L36.6230446,23.2807846 L39.4492195,20.4546097 L23.9951613,5 L8.54,20.4546097 L11.3661749,23.2807846 L21.9979756,12.6236123 L21.9979756,28.3374535 C21.9979756,33.7134735 23.4502236,37.6686843 26.3547195,40.2003281 C29.2586638,42.7325234 33.3815478,44 38.7233713,44 Z"></path>
          </g>
      </svg>
    )
  }
};

IconArrow.propTypes = {
  iconName: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  fill: PropTypes.string,
  rotate: PropTypes.number,
};

export default IconArrow;
