import React from 'react';
import styled from 'styled-components';
import { SectionLayout } from '../Layouts';
import GradientCard from './GradientCard';
import MainTitle from './MainTitle';
import person from '../img/person.jpg';
import bitcoin3 from '../img/bitcoin3.jpg';
import avatar from '../img/avatar.png';
import bitcoin2 from '../img/bitcoin2.jpg';
import bitcoin from '../img/bitcoin.jpg';
import person3 from '../img/person3.jpg';
import computer from '../img/computer.jpg'
import CtaButton from './CtaButton';

function GradientCardsSections() {
    return (
        <GradientCardsSectionsStyled>
            <SectionLayout>
                <div className="title-con">
                <MainTitle title={'New Upcoming Items'} subtitle={'Discover Upcoming Items'} para={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas incidunt quidem sunt consectetur labore, animi quisquam odio explicabo unde veniam!'} />
                </div>

                <div className="gradient-cards-con">
                    <GradientCard image={person} avatar={avatar} name={'@Joel Clocl'} price={'0,067 ETH'} title={'Just a dummy title'}/>
                    <GradientCard image={bitcoin3} avatar={avatar} name={'@Joel Clocl'} price={'0,067 ETH'} title={'Just a dummy title'}/>
                    <GradientCard image={person3} avatar={avatar} name={'@Joel Clocl'} price={'0,067 ETH'} title={'Just a dummy title'}/>
                    <GradientCard image={computer} avatar={avatar} name={'@Joel Clocl'} price={'0,067 ETH'} title={'Just a dummy title'}/>
                    <GradientCard image={bitcoin2} avatar={avatar} name={'@Joel Clocl'} price={'0,067 ETH'} title={'Just a dummy title'}/>
                    <GradientCard image={bitcoin} avatar={avatar} name={'@Joel Clocl'} price={'0,067 ETH'} title={'Just a dummy title'}/>
                    <GradientCard image={person} avatar={avatar} name={'@Joel Clocl'} price={'0,067 ETH'} title={'Just a dummy title'}/>
                    <GradientCard image={bitcoin2} avatar={avatar} name={'@Joel Clocl'} price={'0,067 ETH'} title={'Just a dummy title'}/>
                </div>

                <div className="cta-btn">
                            <CtaButton name='View more'/>
                </div>

            </SectionLayout>
        </GradientCardsSectionsStyled>
    );
}

const GradientCardsSectionsStyled = styled.div`
.cta-btn{
    padding-top: 3rem;
    text-align: center;
}
`;

export default GradientCardsSections;
