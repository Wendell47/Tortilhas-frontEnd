'use client'

import { Container, FlexContainer } from './styles/styles'
import Banner from './components/banner'
import ContainerContent from './components/ContainerContent'
import MySwiper from './components/Swiper'
import SectionTitle from './components/sectionTitle'
import { SwiperSlide } from "swiper/react"
import PromotionalCard from './components/promotionalCard'
import SnackCard from './components/snackCard'
import {LuChevronLeft, LuChevronRight} from 'react-icons/lu'
import { useState, useEffect } from 'react'

export default function Home(){
    
    const [swiper, setSwiper] = useState('')

    useEffect(()=>{
        MySwiper
    },[])
    return(
        <Container>
            <ContainerContent>
                <MySwiper
                pagination={true}
                >
                    <SwiperSlide>
                        <Banner/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Banner/>
                    </SwiperSlide>
                </MySwiper>
                <MySwiper
                slides={2}
                >
                <SwiperSlide>
                <PromotionalCard
            title="Desconto na primeira compra"
            content="20% OFF"
            btnTitle="fazer login"
            />
                    </SwiperSlide>
                <SwiperSlide>
                <PromotionalCard
            title="Desconto na primeira compra"
            content="20% OFF"
            btnTitle="fazer login"
            />
                    </SwiperSlide>
                </MySwiper>

                <div className='headerSection'>
                <SectionTitle
                subTitle="experimente"
                title="Nossos Sabores"
                />
              <FlexContainer>
                
                <div class="myswiper-button-prev">
                <LuChevronLeft/>
                </div>

                <div class="myswiper-button-next">
                <LuChevronRight/>
                </div>
              </FlexContainer>
                </div>

            <MySwiper
            customNav
            slides={4}
            >
            <SwiperSlide>
                <SnackCard
                title="Queijo e presunto"
                price="R$ 9,90"
                />
            </SwiperSlide>
            <SwiperSlide>
                <SnackCard
                title="Queijo e presunto"
                price="R$ 9,90"
                />
            </SwiperSlide>
            <SwiperSlide>
                <SnackCard
                title="Queijo e presunto"
                price="R$ 9,90"
                />
            </SwiperSlide>
            <SwiperSlide>
                <SnackCard
                title="Queijo e presunto"
                price="R$ 9,90"
                />
            </SwiperSlide>
            <SwiperSlide>
                <SnackCard
                title="Queijo e presunto"
                price="R$ 9,90"
                />
            </SwiperSlide>
            </MySwiper>
            <div className='headerSection'>
                <SectionTitle
                subTitle="experimente"
                title="Nossos Sabores"
                />
              <FlexContainer>
                
                <div class="myswiper-button-prev">
                <LuChevronLeft/>
                </div>

                <div class="myswiper-button-next">
                <LuChevronRight/>
                </div>
              </FlexContainer>
                </div>
                
            <MySwiper
            customNav
            slides={4}
            >
            <SwiperSlide>
                <SnackCard
                title="Queijo e presunto"
                price="R$ 9,90"
                />
            </SwiperSlide>
            <SwiperSlide>
                <SnackCard
                title="Queijo e presunto"
                price="R$ 9,90"
                />
            </SwiperSlide>
            <SwiperSlide>
                <SnackCard
                title="Queijo e presunto"
                price="R$ 9,90"
                />
            </SwiperSlide>
            <SwiperSlide>
                <SnackCard
                title="Queijo e presunto"
                price="R$ 9,90"
                />
            </SwiperSlide>
            <SwiperSlide>
                <SnackCard
                title="Queijo e presunto"
                price="R$ 9,90"
                />
            </SwiperSlide>
            </MySwiper>
            </ContainerContent>
            
        </Container>
    )
}