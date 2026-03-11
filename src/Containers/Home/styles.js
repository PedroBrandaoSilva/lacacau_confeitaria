import styled from "styled-components";

//f7f3ef
//af7761



export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 70px;
    align-items: center;
    margin: 30% 0 0;
    

`

export const LogoImage = styled.img`
    max-width: 210px;
    border: 4px solid #af7761 ;
    border-radius: 50%;
`
export const Upside = styled.div`

    display: flex;
    flex-direction:column ;
    align-items: center;
    gap: 1rem;


    div{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;
        color: #af7761;


        h2:first-child{
            font-size: 30px;
        }

    }
`
export const LinksBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
`
export const Link = styled.a`
    width: 100%;
    border: 2px solid #af7761;
    border-radius: 20px;
    padding: 10px 15px;
    text-decoration: none;
    text-align: center;
    color: #af7761;
    font-size: 20px;
    font-weight: bold;
    transition: background 0.7s ease-in-out;
    transition: color 0.6s ease-in-out;


    &:hover{
        background-color: #90614f;
        color: #fff;
    }
    
`


