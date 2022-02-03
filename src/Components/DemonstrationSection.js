import React from 'react';
import styled from 'styled-components';
import { SectionLayout } from '../Layouts';
import MainTitle from './MainTitle';
import computer from '../img/computer.jpg'
import bitcoin2 from '../img/bitcoin2.jpg';
import bitcoin from '../img/bitcoin.jpg';
import person from '../img/person.jpg';
import CtaButton from './CtaButton';
import GradientCard from './GradientCard';
import avatar from '../img/avatar.png';


function DemostrationSection() {
    const ctaButton = <CtaButton name={'Place bid'} />
    return (
        <DemostrationSectionStyled>
            <SectionLayout>
                <div className="title-con">
                    <MainTitle title={'Live Demonstration'} subtitle={'Live Demostration'} para={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga porro a nisi placeat laudantium dicta quod cumque, dolorem fugit repellendus!'} />
                </div>

                <div className="gradient-cards-con">
                    <GradientCard image={computer} avatar={avatar} name={'@Joel Clocl'} price={'0,067 ETH'} title={'Just a dummy title'} ctaButton={ctaButton}/>
                    <GradientCard image={bitcoin2} avatar={avatar} name={'@Joel Clocl'} price={'0,067 ETH'} title={'Just a dummy title'} ctaButton={ctaButton}/>
                    <GradientCard image={bitcoin} avatar={avatar} name={'@Joel Clocl'} price={'0,067 ETH'} title={'Just a dummy title'} ctaButton={ctaButton}/>
                    <GradientCard image={person} avatar={avatar} name={'@Joel Clocl'} price={'0,067 ETH'} title={'Just a dummy title'} ctaButton={ctaButton}/>
                </div>
            </SectionLayout>
        </DemostrationSectionStyled>
    );
}

const DemostrationSectionStyled = styled.div`

`;

export default DemostrationSection;
