import styled from "styled-components";
import { FadeInRight } from "./animations";

export const StyledContainer = styled.div`
  flex: 1 1 0;
  background: rgba(25, 25, 27, 1);
  height: 100%;
  transition: all 0.1s ease-in-out;
  animation: ${FadeInRight} 0.3s ease;
`;

export const StyledUser = styled.div`
  width: 30%;
  min-width: 20%;
  background: rgba(32, 32, 35, 1);
  border-right: 1px solid rgba(189, 189, 192, 0.1);
  height: 100vh;
  overflow-y: hidden;
  float: left;
  color: ${({ theme }) => theme.textColor2};
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: width 0.3s;
  overflow-x: hidden;
  @media (max-width: ${({ theme }) => theme.breakpoint}) {
    display: none;
  }
`;

export const StyledPortfolio = styled.div`
  height: 100%;
  background: ${({ theme }) => theme.colors.whitish};
  @media (max-width: ${({ theme }) => theme.breakpoint}) {
    padding-top: 4rem;
  }
`;

export const StyledUserPic = styled.img`
  height: 8rem;
  widht: 8rem;
  border: none;
  margin: 5rem 0 1rem 0;
  border-radius: 50%;
`;

export const StyledUserDetails = styled.div`
  flex-direction: column;
  margin: 1rem 0;
`;

export const StyledUserName = styled.p`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.whitish};
  margin: 0;
  display: flex;
  justify-content: center;
`;

export const StyledSections = styled.div`
  flex-direction: column;
  margin: 1rem 0 0 0;
  width: 100%;
`;

export const StyledSection = styled.div`
  font-size: 1.5rem;
  width: 100%;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  border: none;
  color: ${({ theme }) => theme.colors.whitish};
  background: ${(props) => (props.status ? "red" : "none")};
  &:hover {
    cursor: pointer;
    background: red;
  }
`;
