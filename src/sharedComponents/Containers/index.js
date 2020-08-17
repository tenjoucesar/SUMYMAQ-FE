import React from 'react';
import styled from 'styled-components';

const AlignedCenteredContainerStyled = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const AlignedCenteredContainer = ({ className = '', children }) => (
  <AlignedCenteredContainerStyled className={className}>
    {children}
  </AlignedCenteredContainerStyled>
);