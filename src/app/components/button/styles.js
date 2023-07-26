import styled from "styled-components";

export const Container = styled.button`



border-radius: 1rem;
font-family: 'Poppins', sans-serif;
border: none;
color: var(--color-orange-300);
font-weight: 400;
padding: 12px 15px;
display: flex;
position: relative;
align-items: center;
justify-content: center;
gap: 10px;

&.btnPrimary{
    background: var(--color-red);
}

&.btnSecondary{
    background: var(--color-red-200);
    color: var(--color-red);
}

&.btnDark{
    background: var(--bg-color-800);
}
&.btnTransparent{
    background: transparent;
    padding: 12px 0;
    width: auto;
}
&.btnTransparentWithBorder{
    border: 1px solid var(--color-white);
    background: transparent;
}

&:disabled{
    opacity: 0.8;

    animation: blink 2s ease-in-out  infinite ;
}

@keyframes blink {
    
    0%{
        opacity: 1 ;
    }

    50%{
        opacity: 0.6;

    }

    100%{
        opacity: 1;
    }
}
`