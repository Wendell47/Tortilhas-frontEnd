

import {Container, Span} from "./styles";
import Image from "next/image";
import bgImage from "../../assets/backgroundImage.jpg"
import bgImage2 from "../../assets/banner2.webp"
import img from "../../assets/img1.png"
import fv from "../../assets/fv.svg"

export default function Banner(){
    return(
        <Container>
           <div>
          <div>
          <Span>Deliciosa & Saborosa
            <Image
            src={fv}

            alt=""
            />

          </Span>
           
          </div>
            <h4>Tortilhas <br/><span> Sua  favorita</span></h4>
            <p>
            Tortilhas caseiras feitas com amor e dedicação 
            especialmente para você !
            </p>
            
           </div>
           <div>
            <Image
            src={img}
            quality={100}   
            width={600}
            alt="tortilha"
            />
           </div>
           <Image
            src={bgImage2}
            layout="fill"
            objectFit="cover"
            quality={100}
            alt="background Image"
            />
        </Container>
    )
}