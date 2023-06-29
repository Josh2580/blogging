import styled, { css } from "styled-components";

export const Button = styled.button`
  display: ${(props) => props.display};
  flex-direction: ${(props) => props.flexDirection};
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
  gap: ${(props) => props.gap};

  background: ${(props) => props.background || "transparent"};
  border-radius: ${(props) => props.borderRadius || "5px"};
  border: ${(props) => props.border || "1px solid blueviolet"};
  color: ${(props) => props.color || "blueviolet"};
  padding: ${(props) => props.padding || "7px 14px"};
  font-size: ${(props) => props.fontSize || "16px"};

  min-width: ${(props) => props.minWidth};
  width: ${(props) => props.width || "100%"};
  max-width: ${(props) => props.maxWidth};

  min-height: ${(props) => props.minHeight};
  height: ${(props) => props.height};
  max-height: ${(props) => props.maxHeight};
  /* justify-content: ; */

  &:hover {
    background: ${(props) => props.hoverBackground || "blueviolet"};
    color: ${(props) => props.hoverColor || "white"};
  }

  ${(props) =>
    props.$primary &&
    css`
      background: blueviolet;
      color: white;
      &:hover {
        color: blueviolet;
        background: white;
      }
    `}
`;
