import { Container } from "./styles";

export default function SectionTitle({subTitle, title}){
    return(
        <Container>
            <span>
                {subTitle}
            </span>
            <h4>
                {title}
            </h4>
        </Container>
    )
}