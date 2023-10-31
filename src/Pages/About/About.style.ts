import styled from 'styled-components';

export const AboutWrap = styled.div`
  padding: calc(var(--gap-lg) * 2) var(--gap-lg);
`;
export const Profile = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: var(--gap-md);
  margin-bottom: var(--gap-xl);
  .profile-img {
    width: 50rem;
    height: 50rem;
    border-radius: 50%;
    overflow: hidden;
    img,
    .img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      background: var(--b_10);
    }
  }
  h2 {
    font-size: var(--fz-lg);
    font-weight: var(--fw-bold);
  }
`;
export const BookmarkWrap = styled.div`
  h2 {
    font-size: var(--fz-lg);
    font-weight: var(--fw-bold);
    margin-bottom: var(--gap-xl);
  }
`;
export const Bookmarks = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--gap-md);
  gap: var(--gap-md);
  li {
  }
`;
