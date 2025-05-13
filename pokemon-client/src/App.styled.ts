import styled from 'styled-components';

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
`;

export const Header = styled.header`
  margin-bottom: 2rem;
  text-align: center;

  h1 {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 2.5rem;
    font-weight: 700;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
    letter-spacing: -0.5px;
    margin-bottom: 0.5rem;
  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Footer = styled.footer`
  margin-top: 2.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 0.875rem;
  text-align: center;
`;
