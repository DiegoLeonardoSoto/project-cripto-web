import React from 'react';
import { InnerLayout } from '../Layouts';
import MainTitle from './MainTitle';
import styled from 'styled-components';
import SellerCard from './SellerCard';
import BlogSection from './BlogSection';
import GradientCardsSections from './GradientCardsSections';
import DemonstrationSection from './DemonstrationSection';
import ContactSection from './ContactSection';

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
            <DemonstrationSection/>
        </InnerLayout>
        <ContactSection/>
        <footer>
            <p>Copyright ©YourName. All Rights Reserved</p>
        </footer>
    </BodyContentStyled>
    );
}

const BodyContentStyled = styled.main`
    .sellercards{
        display:grid;
        grid-template-columns: repeat(auto-fill,minmax(300px,1fr));
        grid-gap: 2rem;
        margin: 2rem 0;
    }

    footer{
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 3rem 0;
        background-color: #020A27;
        border-top: 1px solid rgba(255, 255, 255, 0.08);
        p{
            opacity: 0.7;
            text-align: center;
        }
    }
`;
export default BodyContent;
