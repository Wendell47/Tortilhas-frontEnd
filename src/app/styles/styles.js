
'use client'

import styled from "styled-components";

export const Container = styled.div`

width: 100%;
height: 100vh;

.headerSection{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.myswiper-button-next,.myswiper-button-prev{
    border-radius: 100%;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;

    background: var(--color-orange-400);
}
.myswiper-button-next.swiper-button-disabled,.myswiper-button-prev.swiper-button-disabled{
    opacity: 0.6;
}
`

export const FlexContainer = styled.div`
display: flex;
gap: 1.5rem;

`
