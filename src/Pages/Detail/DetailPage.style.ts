import styled from 'styled-components';
import { mobile } from '../../Common/Global';

export const DetailWrap = styled.div`
  position: relative;
  margin-top: -80rem;
  @media (max-width: ${mobile}) {
    margin-top: 0;
  }
`;
export const DetailImg = styled.img`
  position: relative;
  width: 100%;
  height: auto;
  object-fit: cover;
`;
export const DetailInfo = styled.div`
  padding: calc(var(--gap-lg) * 2);
  @media (max-width: ${mobile}) {
    padding: var(--gap-xl) var(--gap-md);
  }
  h3 {
    font-size: var(--fz-lg);
    margin-top: var(--gap-lg);
  }
`;
export const DetailTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  h2 {
    font-size: var(--fz-xxl);
    margin-bottom: var(--gap-lg);
  }
`;
export const InfoBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: var(--gap-sm);
  p {
    font-size: var(--fz-lg);
  }
  .btn-like {
    color: var(--primary);
    cursor: pointer;
  }
`;
export const DetailOverview = styled.div`
  font-size: var(--fz-md);
  line-height: var(--lh-md);
`;
