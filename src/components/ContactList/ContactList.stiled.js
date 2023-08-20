import styled from 'styled-components';

export const FlexList = styled.ul`
display: flex;
flex-wrap: wrap;
gap: 5px;
justify-content: space-between;

&:not(:last-of-type) {
  margin-bottom: 10px;
}

&:hover {
  background-color: gainsboro;
}
`;
