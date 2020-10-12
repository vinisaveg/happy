import styled from 'styled-components'

export const PageLanding = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(329.54deg, #29B6D1 0%, #00C7C7 100%);
`;

export const ContentWrapper = styled.div`
    position: relative;
    width: 100%;
    max-width: 1100px;
    height: 100%;
    max-height: 680px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    background: url('../../assets/images/landing.svg') no-repeat 80% center;
`

export const LogoImage = styled.img`

`

export const Main= styled.main<{maxWidth?: number}>`
    max-width: ${(props) => props.maxWidth + "px" || "auto"};
`

// Global generic style
export const Title = styled.h1<{
    fontSize: number,
    lineHeight: number,
    fontWeight: number
}>`
    
    font-size: ${(props) => props.fontSize + "px"};
    line-height: ${(props) => props.lineHeight + "px"};
    font-weight: ${(props) => props.fontWeight };
`;

// Global generic style
export const Text = styled.p<{
    marginTop: number
    fontSize: number
    lineHeight: number,
    fontWeight: number
}>`
    margin-top: ${(props) => props.marginTop + "px"};
    font-size: ${(props) => props.fontSize + "px"};
    line-height: ${(props) => props.lineHeight + "px"};
    font-weight: ${(props) => props.fontWeight };
`;

export const Location = styled.div`
    display: flex;
    position: absolute;
    right: 0;
    top: 0;
`

// Global generic style
export const EnterApp = styled.a`
    width: 80px;
    height: 80px;
    position: absolute;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ffd666;
    text-align: center;
    border-radius: 30px;
    transition: 150ms ease;

    &&:hover {  
        background-color: #96FEFF;
    }

`