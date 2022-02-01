import React from 'react';
import styled from 'styled-components';
import { SectionLayout } from '../Layouts';
import MainTitle from './MainTitle';
import blogs from '../blogs'

function BlogSection() {
    return (
    <BlogSectionStyled>
        <SectionLayout>
            <div className="title-con">
                <MainTitle title={'Popular Blogs'} subtitle={'Our Top Blogs'} para={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae quisquam harum eum mollitia minima rerum fugiat aut aspernatur porro ex?'} />
            </div>
            <div className="blogs">
                {
                    blogs.map((blog) => {
                        return <div className="blog" key={blog.id}>
                            <div className="image">
                                <img src={blog.image} alt="" />
                            </div>
                            <h6>{blog.title}</h6>
                            <div className="user">
                                <p>Creator :</p>
                                <p>{blog.name}</p>
                            </div>
                        </div>
                    })
                }
            </div>
        </SectionLayout>
    </BlogSectionStyled>
    );
}

const BlogSectionStyled = styled.div`
    .blogs{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 2rem;
        padding-top: 2rem;
        .blog{
            background: rgba(255,255,255, 0.03);
            border-radius: 20px;
            .image{
                height: 300px;
                width: 100%;
                overflow: hidden;
                border-top-left-radius: 20px;
                border-top-right-radius: 20px;
                transition: all .4s ease-in-out;
                img{
                    height: 100%;
                    width: 100%;
                    border-top-left-radius: 20px;
                    border-top-right-radius: 20px;
                    transition: all .4s ease-in-out;
                    object-fit: cover;
                    filter: grayscale(70%);
                    &:hover{
                        filter: grayscale(0);
                        transform: scale(1.2) rotate(5deg);
                    }
                }
            }

            h6{
                font-weight: 500;
                font-size: 1.3rem;
                padding-top: 1rem;
                padding-left: 1rem;
                padding-right: 1rem;
            }

            .user{
                padding-top: .2rem;
                padding-bottom: 1.5rem;
                padding-left: 1rem;
                padding-right: 1rem;
                display: flex;
                p:first-child{
                    padding-right: 0.4rem;
                    opacity:0.5;
                }
            }
        }
    }
`;

export default BlogSection;
