import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

export const Header = styled.header`
  margin-bottom: 30px;

  h1 {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 2.5rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Footer = styled.footer`
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 14px;
`;