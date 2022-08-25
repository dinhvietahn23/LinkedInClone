import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    padding: 0;
`

const Nav = styled.nav`
    max-width: 1128px;
    width: 100%;
    margin: auto;
    padding: 12px 0px 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    flex-wrap: nowrap;

    &>a{
        width: 135px;
        height: 34px;
        @media (max-width: 768px) {
            padding: 0 5px;
        }
        /* height: 334px; */
    }
`

const Join = styled.a`
    cursor: pointer;
    font-size: 16px;
    padding: 10px 12px;
    border-radius: 4px;
    color: rgba(0,0,0,0.6);
    margin-right: 12px;
    &:hover{
        background-color: rgba(0,0,0,0.08);
        color: rgba(0,0,0,0.9);
    }

`

const SignIn = styled.a`
    cursor: pointer;
    box-shadow: inset 0 0 0 1px #0a66c2;
    color: #0a66c2;
    border-radius: 24px;
    font-size: 16px;
    font-weight: 600;
    transition-duration: 200ms;
    line-height: 40px;
    padding: 10px 12px ;
    text-align: center;
    &:hover {
        background-color: rgba(112, 181, 249, 0.15);
    }
`

const Section = styled.section`
    display: flex;
    min-height: 700px;
    padding: 60px 0;
    align-content: start;
    position: relative;
    flex-wrap: wrap;
    max-width: 1128px;
    width: 100%;
    /* align-items: center; */
    margin: auto;

    @media (max-width:768px) {
        margin: auto;
        min-height: 0px;
    }

`

const Hero = styled.div`
    width: 100%;
    h1{
        padding-bottom: 0;
        width: 55%;
        font-size: 56px;
        color: #2977c9;
        font-weight: 200;
        line-height: 70px;
        @media (max-width: 768px) {
            text-align: center;
            font-size: 20px;
            width: 100%;
            line-height: 2;
        }
    }

    img{
        width: 700px;   
        height: 650px;
        position: absolute;
        top: 0;
        /* bottom: -20px; */
        right: -150px;
        @media (max-width: 768px) {
            /* top: 230px; */
            width: initial;
            height: initial;
            position: initial;
        }
    }
`

const Form = styled.div`
    margin-top: 100px;
    width: 55%;
    display: flex;
    /* justify-content: center; */
    @media(max-width: 768px){
        margin-top: 20px;
        width: 100%;
        display: flex;
        justify-content: center;
    }
`

const Google = styled.button`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 56px;
    width: 80%;
    border-radius:40px;
    border: 1px solid black;
    transition-duration: 200ms;
    font-size: 700;
    vertical-align: middle;

    &:hover{
        background-color: rgba(207, 207, 207, 0.5);
    }
`


export default function Login() {
  return (
    <Container>
        <Nav>
            <a href='/'>
                <img src = '/images/login-logo.svg'/>
            </a>
            <div>
                <Join>Join Now</Join>
                <SignIn>Sign In</SignIn>
            </div>
        </Nav>
        <Section>
            <Hero>
                <h1>Welcom to the professional community.</h1>
                <img src ="/images/login-hero.svg" alt='' />
            </Hero>
            <Form>
                <Google>
                    <img src = '/images/google.svg' alt=''/>
                    Sign In With Google
                </Google>
            </Form>
        </Section>
    </Container>
  )
}
