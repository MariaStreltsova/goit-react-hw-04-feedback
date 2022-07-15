import styled from 'styled-components';
export const Item = styled.p`
  font-size: ${p => p.theme.fontSizes.l};
  margin-top: ${p => p.theme.space[0]}px;
  margin-bottom: ${p => p.theme.space[3]}px;
`;
export const ItemsText = styled.span`
  font-size: ${p => p.theme.fontSizes.l};
  color: ${p => p.theme.colors.accentText};
  margin-top: ${p => p.theme.space[0]}px;
  margin-bottom: ${p => p.theme.space[2]}px;
  padding-left: ${p => p.theme.space[3]}px;
`;

export const TotalResults = styled.p`
  font-size: ${p => p.theme.fontSizes.l};
  color: ${p => p.theme.colors.red};
  margin-top: ${p => p.theme.space[5]}px;
  margin-bottom: ${p => p.theme.space[2]}px;
`;
