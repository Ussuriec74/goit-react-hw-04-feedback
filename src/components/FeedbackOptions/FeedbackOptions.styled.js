import styled from 'styled-components';

export const StatItem = styled.button`
  cursor: pointer;
  min-width: ${p => p.theme.space[6]}px;
  padding: ${p => p.theme.space[3]}px;
  border: none;
  border-radius: ${p => p.theme.radii.small};
  box-shadow: ${p => p.theme.shadows.btnShadow};

  &:hover{
    transform: scale(1.1);
    background-color: ${p => p.theme.colors.bgBtnHover};
  }
`