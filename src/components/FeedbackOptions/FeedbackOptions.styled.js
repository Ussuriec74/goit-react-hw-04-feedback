import styled from 'styled-components';

export const StatItem = styled.button`
  cursor: pointer;
  min-width: 64px;
  padding: 8px;
  border: none;
  border-radius: 4px;
  box-shadow:4px 4px 4px 1px rgba(0, 0, 0, 0.3);

  &:hover{
    transform: scale(1.1);
    background-color: #51EAFF;
  }
`