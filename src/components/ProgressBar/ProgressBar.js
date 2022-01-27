/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';


const Wrapper = styled.div`
  width: 370px;
  height: var(--height);
  border-radius: var(--radius);
  padding: var(--padding);
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0 2px 4px ${COLORS.transparentGray35};
`;


const LoadedContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: var(--inner-radius);
  overflow: hidden; // to preserve round borders in Loaded child element
`;

const Loaded = styled.div`
  width: ${p => `${p.loadedPercentage}%`};
  height: 100%;
  background-color: ${COLORS.primary};
`;


const sizeToStyle = {
  small: {
    '--height': '8px',
    '--padding': 0,
    '--radius': '4px',
    '--inner-radius': '4px',
  },
  medium: {
    '--height': '12px',
    '--padding': 0,
    '--radius': '4px',
    '--inner-radius': '4px',
  },
  large: {
    '--height': '24px',
    '--padding': '4px',
    '--radius': '8px',
    '--inner-radius': '4px',
  },
}

const ProgressBar = ({ value, size }) => {
  return (
    <Wrapper style={sizeToStyle[size]} role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={value}>
      <LoadedContainer>
        <Loaded loadedPercentage={value}/>
      </LoadedContainer>
    </Wrapper>
  );
};

export default ProgressBar;
