import styled from 'styled-components';

export const StyledForm = styled.form`
display: flex;
flex-direction: column;

margin-bottom: 20px;
padding: 20px;
box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
  rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
border-radius: 5px;
`;
export const StyledContactInput = styled.input`
height: 25px;
width: 240px;
padding-left: 10px;
border: 1px solid rgba(33, 33, 33, 0.2);
outline: none;
border-radius: 5px;
&:focus {
  border-color: yellowgreen;
}
transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;
