import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';


const Wrapper = styled.div`
  width: var(--width);
  font-size: var(--font-size);
  line-height: var(--line-height);
  
  position: relative;
  //background-color: deeppink;
  border-bottom: 1px solid ${COLORS.black};

  color: ${COLORS.gray700};
  
  :hover {
    color: ${COLORS.black};
  }
  
  :focus-within {
    outline-width: 3px;
    outline-style: auto;
    outline-offset: 4px;
    outline-color: blue;
    outline-color: -webkit-focus-ring-color;
  }
`;

const Input = styled.input`
  color: inherit;
  line-height: inherit;
  font-size: inherit;
  border: none;
  outline: none;
  background: transparent;
  //background: orange;
  width: 100%;
  font-weight: 700;
  padding: var(--padding);


  ::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
`;

const InputIcon = styled(Icon)`
  position: absolute;
  left: 1px;
  top: 0;
  bottom: 0;
  margin: auto;  
  pointer-events: none;
`;

const sizeToStyle = {
  small : {
    '--font-size': '14px',
    '--line-height': '16px',
    '--padding': '4px 0 4px 24px',
  },
  large : {
    '--font-size': '18px',
    '--line-height': '21px',
    '--padding': '7px 0 7px 36px',
  },
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  console.log(icon);


  return (
    <Wrapper style={{ '--width': `${width}px`, ...sizeToStyle[size] }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      <InputIcon id={icon} size={size === 'small' ? 16 : 24} />
      <Input placeholder={placeholder} />
    </Wrapper>
  );
};

export default IconInput;
