import styled from 'styled-components';

export const Wrapper = styled.li`
  display: flex;
  justify-content: flex-start;
  gap: 30px;
  align-items: center;
  position: relative;
  &:not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: lightgray;
  }
`;

export const Name = styled.p`
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: 700;
  margin: 0px;
  padding: 0px;
`;

export const Attendance = styled.p`
  font-size: ${({ theme }) => theme.fontSize.m};
  margin: 0px;
  padding: 0px;
`;

export const Person = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  color: ${({ theme }) => theme.colors.darkGrey};
`;
