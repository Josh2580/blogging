import styled, { css } from "styled-components";

export const Card = styled.div`
  position: ${(props) => props.position};
  display: ${(props) => props.display || "flex"};
  flex-direction: ${(props) => props.flexDirection};
  flex: ${(props) => props.flex};

  flex-wrap: ${(props) => props.flexWrap};
  flex-flow: ${(props) => props.flexFlow};
  gap: ${(props) => props.gap};

  border: ${(props) => props.border};
  border-radius: ${(props) => props.borderRadius};

  padding: ${(props) => props.padding};
  padding-top: ${(props) => props.paddingTop};
  padding-right: ${(props) => props.paddingRight};
  padding-bottom: ${(props) => props.paddingBottom};
  padding-left: ${(props) => props.paddingLeft};
  background: ${(props) => props.background};
  justify-content: ${(props) => props.justifyContent};
  color: ${(props) => props.color || "black"};
  align-items: ${(props) => props.alignItems};

  margin: ${(props) => props.margin};
  margin-top: ${(props) => props.marginTop};
  margin-right: ${(props) => props.marginRight};
  margin-bottom: ${(props) => props.marginBottom};
  margin-left: ${(props) => props.marginLeft};

  min-width: ${(props) => props.minWidth};
  width: ${(props) => props.width};
  max-width: ${(props) => props.maxWidth};

  min-height: ${(props) => props.minHeight};
  height: ${(props) => props.height};
  max-height: ${(props) => props.maxHeight};

  cursor: ${(props) => props.cursor};
  z-index: ${(props) => props.zIndex};

  opacity: ${(props) => props.opacity};

  transform: ${(props) => props.transform};
  transition: ${(props) => props.transition};

  box-shadow: ${(props) => props.boxShadow};
`;
