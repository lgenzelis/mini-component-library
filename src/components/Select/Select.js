import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Wrapper = styled.div`
  position: relative;
  color: ${COLORS.gray700};
  background-color: ${COLORS.transparentGray15};
  width: fit-content;
  padding: 12px 16px;
  border-radius: 8px;
  border: none;
  
  :hover {
    color: ${COLORS.black};
  }
  
  :focus-within {
    outline-width: 3px;
    outline-style: auto;
    outline-color: blue;
    outline-color: -webkit-focus-ring-color;
    border-radius: 3px;
  }
`;

const Item = styled.span`
  line-height: 1.25;
  margin-right: 24px;
`;

const ArrowIcon = styled(Icon)`
  display: inline-block;
  vertical-align: middle;
`;

const InvisibleSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`;

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <Item>
        {displayedValue}
      </Item>
      <ArrowIcon id="chevron-down" size={20} strokeWidth={2} />
      <InvisibleSelect value={value} onChange={onChange}>
        {children}
      </InvisibleSelect>
    </Wrapper>
  );
};

export default Select;
