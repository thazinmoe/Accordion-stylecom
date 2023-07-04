import styled from "styled-components";
// Item, Header, Title, Body, Image, Content

export const Container = styled.div`
    max-width: 500px;
    margin: 0 auto;
    box-shadow: 2px 2px 5px gray;
`
export const Item = styled.div`
`

export const Header = styled.div`
    padding: 1rem;
    display: flex;
    cursor: pointer;
    transform: scale(1);
    transition: all 250ms ease-in-out;
     &:hover {
        transform: scale(1.05);
     }
    h1 {
        margin-right: 1rem;
    }
`

export const Title = styled.h1``

export const Body = styled.div`
    padding: 1rem;
`

export const Image = styled.img`
    width: 100%;
    height: 250px;
`

export const Content = styled.p`
    line-height: 1.4;
    letter-spacing: 1px;
    @media (min-width: 500px) {
        width: 50ch;
    }
`