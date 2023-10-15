import styled, { css } from 'styled-components';

interface ButtonProps {
  $width?: string;
  $height?: string;
  $borderRadius?: string;
  $padding?: number[];
}
export const Button = styled.button<ButtonProps>`
  padding: 0 var(--gap-md);
  ${({ $width, $height, $borderRadius, $padding }) => css`
    width: ${$width ? $width : 'auto'};
    height: ${$height ? $height : '40rem'};
    border-radius: ${$borderRadius ? $borderRadius : '4rem'};
    padding: ${$padding?.map((val) => `${val}px`).join(' ')};
  `}
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: var(--en);
  font-size: var(--fz-lg);
  font-weight: var(--fw-bold);
  text-transform: uppercase;
  color: var(--primary);
  border: none;
  transition: 0.3s;
  background: var(--white);
  cursor: pointer;
  &:hover {
    background: var(--primary);
    color: var(--white);
  }
`;
