import styled from "styled-components";

//f7f3ef
//af7761



export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    align-items: center;
    margin: 15% 0 0;
    
     @media (min-width: 1024px) {
       margin: 2% 0 0;
    }
`

export const LogoImage = styled.img`
    max-width: 210px;
    border: 4px solid #af7761 ;
    border-radius: 50%;

     @media (min-width: 768px) {
        max-width: 270px;
    }
     @media (min-width: 1024px) {
        max-width: 230px;
    }
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

             @media (min-width: 768px) {
                font-size: 40px;
            }
            @media (min-width: 1024px) {
                font-size: 30px;
            }
        }

        h2:last-child{
            
            @media (min-width: 768px) {
                font-size: 35px;
            }

             @media (min-width: 1024px) {
                font-size: 30px;
            }
        }

        

    }
`
export const LinksBox = styled.div`
    display: flex;
    width: 90%;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;

    @media (min-width: 1024px) {
       width: 50%;
  }
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

    @media (min-width: 768px) {
        font-size: 30px;
    }

    
    
`


