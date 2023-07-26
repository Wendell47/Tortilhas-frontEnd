import { styled } from "styled-components";

export const Container = styled.div`
padding: 2rem;
border: 1px solid var(--color-orange-400);
border-radius: 1.5rem;
background: var(--color-orange-400);
position: relative;

img{
    width: 100%;
    height: auto;
}

h5{

    font-size: 2rem;
    margin-bottom: 1rem;
}

span{
    font-size: 2.4rem;
    font-family: var(--font-roboto);
    font-weight: bold;
    display: block;
    margin-bottom: 2rem;
}

div{
    display: flex;
    gap: 1rem;

    button:first-child{
       flex: 1 1 70% ;

    }
}

.description{
    height: 0;
    overflow: hidden;
    position: absolute;
    top: 30%;
    bottom: 50%;
    left: 0;
    margin: 0 2rem;
    transition: all 140ms;
}

&:hover{
   border-color: var(--color-red);
    .description{
    height: 30%;
    border-radius: 1.3rem;
    padding: 2rem;
    background: var(--color-orange-300);
}
}
`