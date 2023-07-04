import React, { useState, useContext, createContext } from "react";
import {
  Container,
  Item,
  Header,
  Title,
  Body,
  Image,
  Content,
} from "./styles/accordion";

const ToggleContext = createContext();

export default function Accordion({ children, ...restProps }) {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      {children.map((child, index) => (
        <ToggleContext.Provider
          key={index}
          value={{ index, activeIndex, setActiveIndex }}
        >
          <Container> {child} </Container>
        </ToggleContext.Provider>
      ))}
    </>
  );
}

Accordion.Item = function AccordionItem({ children, ...restProps }) {
  return <Item {...restProps}> {children} </Item>;
};

Accordion.Header = function AccordionHeader({ children, ...restProps }) {
  const { setActiveIndex, index } = useContext(ToggleContext);
  return (
    <Header {...restProps} 
    onClick={() => setActiveIndex(index)}>
      {children}
    </Header>
  );
};

Accordion.Title = function AccordionTitle({ children, ...restProps }) {
  return <Title {...restProps}> {children} </Title>;
};

Accordion.Body = function AccordionBody({ children, ...restProps }) {

    const {index, activeIndex} = useContext(ToggleContext)

    let isActive = index === activeIndex

  return isActive ? <Body {...restProps}> {children} </Body> : null
};

Accordion.Image = function AccordionImage({ children, ...restProps }) {
  return <Image {...restProps} />;
};

Accordion.Content = function AccordionContent({ children, ...restProps }) {
  return <Content {...restProps}> {children} </Content>;
};
