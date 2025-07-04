import styled, { css } from 'styled-components';

const colors = {
  primary: "#4361ee",
  secondary: "#b5179e",
};

const sizes = {
  sm: {
    fontSize: '0.8rem',
    padding: '0.2rem 0.5rem',
  },
  md: {
    fontSize: '1rem',
    padding: '0.5rem 1rem',
  },
  lg: {
    fontSize: '1.3rem',
    padding: '0.5rem 1rem',
  },
};

const Button = styled.button`
  padding: ${({ size }) => sizes[size || 'md'].padding};
  font-size: ${({ size }) => sizes[size || 'md'].fontSize};
  border: none;
  border-radius: 10px;
  color: #fff;
  cursor: pointer;
  background-color: ${({ variant }) => colors[variant] || colors["primary"]};

  ${({ full }) =>
    full &&
    css`
      display: block;
      width: 100%;
    `}
`;

export default Button;