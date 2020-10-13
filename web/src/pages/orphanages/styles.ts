import styled from 'styled-components';

export const PageMap = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
    display: flex;
`;

export const Aside = styled.aside`
    width: 440px;
    height: 100vh;
    padding: 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: linear-gradient(329.54deg, #29b6d1 0%, #00c7c7 100%);
`;

export const Header = styled.header``;

export const MapMarkerIcon = styled.img``;

export const Footer = styled.footer`
    display: flex;
    flex-direction: column;
    line-height: 24px;
`;

export const CreateOrphanage = styled.button`
    width: 64px;
    height: 64px;
    position: absolute;
    right: 40px;
    bottom: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #15c3d6;
    text-align: center;
    border-radius: 20px;
    transition: background-color 200ms;
    border: none;
    outline: none;
    cursor: pointer;
    z-index: 1000;

    &&:hover {
        background-color: #17d7eb;
    }
`;
