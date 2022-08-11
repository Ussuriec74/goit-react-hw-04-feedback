import styled from 'styled-components';

export const StatList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${p => p.theme.space[5]};
  gap: ${p => p.theme.space[5]};
  
`;
export const StatItem = styled.span`
  font-size: ${p => p.theme.fontSizes.xl};
`;