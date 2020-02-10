import styled from "styled-components";
import React from "react";

const StyledButton = styled.button`
  font-family: monospace;
  box-shadow: 5px 5px 0 0;
  transition: box-shadow 0.5s ease;
  border: 2px solid;
  background-color: white;
  margin-bottom: 2em;
  display: block;

  &:hover {
    box-shadow: 3px 3px 0 0;
  }

  &:disabled {
    animation: bounce 1s ease infinite;
  }
`;

interface FindButtonProps {
  text: string;
  disabled: boolean;
}

export const FindButton: React.FC<FindButtonProps> = React.memo(
  ({ text, disabled }) => {
    return (
      <StyledButton type="submit" disabled={disabled}>
        {text}
      </StyledButton>
    );
  }
);
