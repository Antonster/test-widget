import { iconCloseSvg, logoFullSvg } from '@images';
import PropTypes from 'prop-types';
import { useState } from 'react';
import Select from 'react-select';

import * as S from './WidgetMatches.styles';

const selectStyles = {
  control: (styles) => ({
    ...styles,
    boxShadow: 'none',
    background: '#1D1F2A',
    borderRadius: '4px',
    border: 'none',
    width: '192px',
    height: '36px',
    padding: '0 12px 0 0',
  }),
  valueContainer: (styles) => ({
    ...styles,
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

const options = [
  { label: 'Europe', value: '1' },
  { label: 'North America', value: '2' },
];

const divisions = [
  { label: 'I', value: '1' },
  { label: 'II', value: '2' },
];

const statuses = [
  { label: 'Today', value: '1' },
  { label: 'Results', value: '2' },
  { label: 'Upcoming', value: '3' },
];

const WidgetMatches = () => {
  const [activeDivision, setActiveDivision] = useState('1');
  const [activeStatus, setActiveStatus] = useState('1');

  return (
    <>
      <S.FiltersWrapper>
        <S.RegionFilter>
          <S.FilterTitle>Region:</S.FilterTitle>
          <Select
            isSearchable={false}
            placeholder="Region Select"
            options={options}
            styles={selectStyles}
          />
        </S.RegionFilter>

        <S.DivisionFilter>
          <S.FilterTitle>Division:</S.FilterTitle>
          <S.DivisionButtonsWrapper>
            {divisions.map(({ label, value }) => (
              <S.DivisionButton
                key={value}
                $active={value === activeDivision}
                onClick={() => setActiveDivision(value)}
              >
                {label}
              </S.DivisionButton>
            ))}
          </S.DivisionButtonsWrapper>
        </S.DivisionFilter>
      </S.FiltersWrapper>

      <S.StatusFilters>
        {statuses.map(({ label, value }) => (
          <S.StatusButton
            key={value}
            $active={value === activeStatus}
            onClick={() => setActiveStatus(value)}
          >
            {label}
          </S.StatusButton>
        ))}
      </S.StatusFilters>
    </>
  );
};

WidgetMatches.propTypes = {};

export default WidgetMatches;
