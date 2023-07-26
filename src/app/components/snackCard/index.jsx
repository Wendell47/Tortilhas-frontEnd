import { Container } from "./styles";
import Button from "../button";
import Image from "next/image";
import img from "../../assets/tortilha.webp"
import {LuHeart} from 'react-icons/lu'
export default function SnackCard({title,price}){
    return(
        <Container>
            <Image
            src={img}
            alt="snackImage"
            quality={100}
            />
            <h5>
                {title}
            </h5>
            <div className="description">
                <p>
                Queijo, presunto, alface
                tomate, carne, molho
                </p>
            </div>
            <span>{price}</span>

            <div>
                <Button
                 btn="primary"
                 title="Adicionar ao carrinho"
                />  
                <Button
                 btn="secondary"
                 icon={LuHeart}
                />  
            </div>
        </Container>
    )
}