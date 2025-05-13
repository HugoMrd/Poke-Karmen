import styled from "styled-components";

export const SearchContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundCard};
  padding: 1.5rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.shadows.medium};
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  label {
    font-weight: 500;
    color: ${({ theme }) => theme.colors.text};
    font-size: 1rem;
  }
`;

export const SearchInputContainer = styled.div`
  display: flex;
  gap: 0.75rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
  }
`;

export const SearchInput = styled.input`
  flex: 1;
  padding: 0.75rem 1rem;
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: 1rem;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }

  &::placeholder {
    color: #cbd5e0;
  }
`;

export const SearchButton = styled.button`
  padding: 0.75rem 1.25rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.small};
  }

  &:active {
    transform: translateY(0);
  }
`;
