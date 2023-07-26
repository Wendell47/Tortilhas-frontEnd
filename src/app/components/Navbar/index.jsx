import { Container, Menu, DropMenu, Content} from "./styles";
import logo from '../../assets/logo.svg'
import Image from "next/image";
import Link from "next/link";
import {LuChevronDown, LuSearch, LuShoppingCart, LuUser} from 'react-icons/lu'
import ContainerContent from "../ContainerContent";

export default function Navbar(){
    return(
        <Container>
          <ContainerContent>
            <Content>
                <Menu>
                <Link href="/"> home</Link>
                <DropMenu href="/"> Catalogo <LuChevronDown/></DropMenu>
                </Menu>
                <Image src={logo} alt="" width={40} height={40}/>
                <Menu>
                <Link href="/"> <LuSearch/></Link>
                <Link href="/"> <LuShoppingCart/></Link>
                <Link href="/"> <LuUser/></Link>
                </Menu>
            </Content>
          </ContainerContent>
        </Container>
    )
}