import styled from 'styled-components';
import { mobile } from '../../Common/Global';

export const SearchWrap = styled.div`
  padding: var(--gap-lg) calc(var(--gap-lg) * 3);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--gap-md);
  p.no-results {
    margin-top: var(--gap-xl);
    text-align: center;
    font-size: var(--fz-xl);
    grid-column: span 4;
  }
  @media (max-width: 1000px) {
    padding: var(--gap-lg) calc(var(--gap-lg) * 2);
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: ${mobile}) {
    padding: var(--gap-lg);
    grid-template-columns: repeat(2, 1fr);
    gap: var(--gap-xs);
  }
`;
