import React from 'react';
import { InnerLayout } from '../Layouts';
import MainTitle from './MainTitle';
import styled from 'styled-components';
import SellerCard from './SellerCard';
import BlogSection from './BlogSection';
import GradientCardsSections from './GradientCardsSections';

function BodyContent() {
    return (
    <BodyContentStyled>
        <InnerLayout>
            <MainTitle title={'Top Sellers This Month'} subtitle={'All Entrepreneurs'}/>
            <div className="sellercards">
                <SellerCard />
                <SellerCard />
                <SellerCard />
            </div>
            <BlogSection/>
            <GradientCardsSections/>
        </InnerLayout>
    </BodyContentStyled>
    );
}

const BodyContentStyled = styled.main`
    .sellercards{
        display:grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 2rem;
        margin: 2rem 0;
    }
`;
export default BodyContent;
