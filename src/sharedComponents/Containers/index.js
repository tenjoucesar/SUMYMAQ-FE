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

const formStyles = `align-items: center; display: flex; flex-direction: column; justify-content: center; margin: 15px auto;`

const FormContainerStyled = styled.div`${formStyles}`;
const IndependtFormContainerStyled = styled.form`${formStyles}`;

export const FormContainer = ({ className = '', children }) => (
  <FormContainerStyled className={className}>
    {children}
  </FormContainerStyled>
);

export const IndependtFormContainer = ({ className = '', children }) => (
  <IndependtFormContainerStyled className={className}>
    {children}
  </IndependtFormContainerStyled>
);

const ScrollableFormContainerStyled = styled(FormContainer)`
  flex-wrap: nowrap;
  padding: 20px 0;
  margin: 0 auto;
  width: 70vw;
  max-height: 400px;
  overflow-y: scroll;
`;

export const ScrollableFormContainer = ({ className = '', children }) => (
  <ScrollableFormContainerStyled className={className}>
    {children}
  </ScrollableFormContainerStyled>
);

const InputsContainerStyled = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 400px;
`;

export const InputsContainer = ({ className = '', children }) => (
  <InputsContainerStyled className={className}>
    {children}
  </InputsContainerStyled>
);
