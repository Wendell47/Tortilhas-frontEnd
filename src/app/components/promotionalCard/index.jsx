
import { Container } from "./styles";
import Button from "../button";
export default function PromotionalCard({title, content, btnTitle}){
    return(
        <Container>
            <div>
                <h4>
                   {title} 
                </h4>
                <span>
                    {content}
                </span>
            </div>
            <Button
            title={btnTitle}
            btn="primary"
            />
        </Container>
    )
}