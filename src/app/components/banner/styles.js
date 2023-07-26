'use client'
import { styled } from "styled-components";

export const Container = styled.div`
border-radius: 1.5rem;
padding: 3rem;

height:100%;
height: 500px;
background-size: cover;
overflow: hidden;
position: relative;
display: flex;
align-items: center;
flex-wrap: wrap;

color:var(--color-orange-300);


h4{
    font-size: clamp(4rem, 6vw, 8rem);
    color: var(--color-orange-800);
    line-height: 100%;
    margin: 1rem 0;
    span{
        color: var(--color-orange-400);
    }
}
p{
    font-size: clamp(1.2rem , 5vw ,1.6rem);
}
> img{
    z-index: -1;
}

> div:nth-child(1){
    flex: 1 1 50%;

}
> div{
    flex: 1 1 50%;
}
> div:nth-child(2){
    
    img{
        
        bottom: 0;
        right: 0;
        margin-right: -6rem;
        height: auto;
        position:absolute;
    }
}

@media (max-width:750px) {
    text-align: center;
    align-items: flex-start;
    > div:nth-child(2){
    
    img{
        width: 80%;
        right: 0;
        left: 0;
        bottom: 0;
        margin: 0 auto;
        height: auto;
        position:absolute;
    }
}
}
`

export const Span = styled.span`
position: relative;
font-weight: bold;
z-index: 0;

    font-size: clamp(1.6rem , 5vw ,4rem);
    font-family: var(--font-caveat);

color:var(--color-red);
img{
    position: absolute;
    width: 110%;
    height: auto;
    z-index: -1;
    left: -5px;
}
`