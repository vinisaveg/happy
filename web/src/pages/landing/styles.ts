import styled from 'styled-components';
import landingImage from '../../assets/images/landing.svg';

export const PageLanding = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(329.54deg, #29b6d1 0%, #00c7c7 100%);
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
    background: url(${landingImage}) no-repeat 80% center;
`;

export const LogoImage = styled.img``;

export const Main = styled.main<{ maxWidth?: number }>`
    max-width: ${(props) => props.maxWidth + 'px' || 'auto'};
`;

export const Location = styled.div`
    display: flex;
    position: absolute;
    right: 0;
    top: 0;
`;

export const EnterApp = styled.button`
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
    border: none;
    outline: none;
    cursor: pointer;

    &&:hover {
        background-color: #96feff;
    }
`;
