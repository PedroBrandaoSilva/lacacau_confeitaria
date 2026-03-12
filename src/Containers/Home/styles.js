import styled from "styled-components";



export const Container = styled.div`
    width: 100%;
    display: flex;
    background-color: #f1f3e1;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    align-items: center;
    padding: 15% 0 0;
    
     @media (min-width: 768px) {
       padding: 2rem 0 5rem;
    }
     @media (min-width: 1024px) {
       padding: 2rem 0 5rem;
    }
`

export const LogoImage = styled.img`
    max-width: 210px;
    border: 4px solid #af7761 ;
    border-radius: 50%;
    

     @media (min-width: 768px) {
        max-width: 250px;
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
    background: none;


    div{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;
        color: #af7761;
        background: none;

        h2:first-child{
            font-size: 30px;
            background: none;

             @media (min-width: 768px) {
                font-size: 35px;
            }
            @media (min-width: 1024px) {
                font-size: 30px;
            }
        }

        h2:last-child{
            background: none;

            @media (min-width: 768px) {
                font-size: 30px;
            }

             @media (min-width: 1024px) {
                font-size: 25px;
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
    background: none;

    @media (min-width: 768px) {
       width: 60%;
  }
    @media (min-width: 1024px) {
       width: 30%;
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
    @media (min-width: 1024px) {
        font-size: 22px;
    }



    
    
`


