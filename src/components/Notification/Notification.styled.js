import styled from 'styled-components';

export const NotificationMessage = styled.p`
  margin-left: ${p => p.theme.space[6]}px;
  margin-top: ${p => p.theme.space[6]}px;
  font-size: ${p => p.theme.fontSizes.xl};
  color: ${p => p.theme.colors.secondaryText};
`;