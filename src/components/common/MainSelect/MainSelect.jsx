import PropTypes from 'prop-types';
import { memo } from 'react';
import Select from 'react-select';

const selectStyles = {
  control: (styles) => ({
    ...styles,
    boxShadow: 'none',
    background: '#1D1F2A',
    borderRadius: '4px',
    border: 'none',
    width: '192px',
    height: '36px',
    minHeight: '36px',
    padding: '0 12px 0 0',
  }),
  valueContainer: (styles) => ({
    ...styles,
    height: '36px',
    padding: '10px 24px',
  }),
  singleValue: (styles) => ({
    ...styles,
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '12px',
    lineHeight: '16px',
    display: 'flex',
    alignItems: 'center',
    letterSpacing: '0.004em',
    color: '#B8B8BD',
  }),
  placeholder: (styles) => ({
    ...styles,
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '12px',
    lineHeight: '16px',
    display: 'flex',
    alignItems: 'center',
    letterSpacing: '0.004em',
    color: '#B8B8BD',
  }),
  input: (styles) => ({
    ...styles,
    padding: '0',
    margin: '0',
  }),
  indicatorSeparator: () => ({}),
  indicatorContainer: (styles) => ({
    ...styles,
    color: '#B8B8BD',
  }),
  menu: (styles) => ({
    ...styles,
    boxShadow: 'none',
    borderRadius: '4px',
    border: 'none',
    background: '#1D1F2A',
  }),
  option: (styles) => ({
    ...styles,
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '12px',
    lineHeight: '16px',
    display: 'flex',
    alignItems: 'center',
    letterSpacing: '0.004em',
    color: '#B8B8BD',
    padding: '10px 24px',
    background: 'none',
    cursor: 'pointer',
    transition: 'all 0.5s',

    '&:hover': {
      background: '#464851',
    },
  }),
};

const MainSelect = ({ options, placeholder = '', value, onChange }) => (
  <Select
    styles={selectStyles}
    isSearchable={false}
    placeholder={placeholder}
    options={options}
    value={value}
    onChange={onChange}
  />
);

MainSelect.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    }).isRequired,
  ).isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  }),
  onChange: PropTypes.func.isRequired,
};

export default memo(MainSelect);
