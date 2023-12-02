import styled from "styled-components";

export const CardContainer = styled.div`
  background-color: var(--color-gray-100);
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 10px;
  width: 300px;
`;

export const CardHeader = styled.h3`
  color: var(--color-gray-900);
  margin-bottom: 10px;
`;

export const CardParagraph = styled.p`
  color: #555;
  margin-bottom: 8px;
`;

export const DeleteButton = styled.button`
  background-color: #ff6347;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #d43f28;
  }
`;