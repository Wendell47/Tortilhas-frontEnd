import { styled } from "styled-components";

export const Container = styled.div`
width: 100%;
max-width: 1300px;
margin: 0 auto;
padding: 0 2rem;

> div:last-child{
    margin-bottom: 2rem;
}
> div + div {
    margin-top: 2rem;
}

`