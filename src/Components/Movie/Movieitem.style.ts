import styled from 'styled-components';

export const MovieTitle = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  background: rgba(0, 0, 0, 0.6);
  padding: var(--gap-xs);
  opacity: 0;
  visibility: hidden;
  transition: 0.3s;
  p {
    color: var(--white);
    font-size: var(--fz-sm);
    font-weight: var(--fw-bold);
    width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
`;
export const MovieWrap = styled.div`
  border-radius: 10rem;
  overflow: hidden;
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  transition: 0.3s;
  box-shadow: rgb(0 0 0/69%) 0px 26px 30px -10px,
    rgb(0 0 0/73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3rem solid rgba(249, 249, 249, 0.1);
  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.02);
    border-color: rgba(249, 249, 249, 0.8);
  }
  img {
    position: absolute;
    inset: 0;
    object-fit: cover;
    min-width: 100%;
    width: auto;
    height: 100%;
  }

  &:hover ${MovieTitle} {
    opacity: 1;
    visibility: visible;
  }
`;
