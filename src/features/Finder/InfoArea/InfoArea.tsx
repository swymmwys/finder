import styled from "styled-components";
import React from "react";
import { Dictionary } from "../../../store/types";

const StyledDiv = styled.div`
  padding: 1em;
  display: inline-block;
  border: 5px dashed;
  box-shadow: 0 0 0 5px;
`;

export const InfoArea: React.FC<{ content: Dictionary }> = React.memo(
  ({ content }) => {
    return (
      <StyledDiv>
        <img src={content.picture.large} />
        <pre>{`
          ${content.name.title} ${content.name.first} ${content.name.last}
          gender: ${content.gender}
          email: ${content.email}
          cell: ${content.cell}
        `}</pre>
      </StyledDiv>
    );
  }
);
