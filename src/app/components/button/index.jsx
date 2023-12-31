'use client'
import { Container } from "./styles";


export default function Button({title,icon: Icon, children, btn, className, disabled = false,...rest}){

 if(btn == "primary"){
    btn = 'btnPrimary'
 }
 else if (btn == 'secondary'){
    btn = "btnSecondary"
 }
 else if (btn == 'dark'){
    btn = "btnDark"
 }
 else if (btn == 'transparent'){
    btn = "btnTransparent"
 }
 else if (btn == 'borderTransparent'){
   btn = "btnTransparentWithBorder"
}
    return(
        <>
      
        <Container
        className={`${btn} ${className}`}
        {...rest}
        disabled={disabled}
        >
         {Icon && <Icon size={20}/>}         
          {disabled ? "...carregando" : title}
          {children}
        </Container>
       
        </>
    )
}