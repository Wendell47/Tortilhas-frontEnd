import { styled } from "styled-components";

export const Container = styled.div`

border-radius: 1.5rem;
background: var(--color-orange-400);
padding: 2rem;
display: flex;
gap: 2rem;
align-items: center;
justify-content: space-between;

h4{
    font-size: clamp(1.2rem, .1rem + 1vw, 1.6rem);
    font-weight: 500;
}
span {
    font-size: clamp(2.5rem, 1vw, 3.5rem);
    font-weight: bold;
    text-transform: uppercase;

}
`