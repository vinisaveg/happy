import styled from 'styled-components';

export const Title = styled.h1<{
    fontSize: number;
    lineHeight: number;
    fontWeight: number;
    marginTop?: number;
}>`
    font-size: ${(props) => props.fontSize + 'px'};
    line-height: ${(props) => props.lineHeight + 'px'};
    font-weight: ${(props) => props.fontWeight};
    margin-top: ${(props) => props.marginTop + 'px'};
`;

export const Text = styled.p<{
    marginTop: number;
    fontSize: number;
    lineHeight: number;
    fontWeight: number;
}>`
    margin-top: ${(props) => props.marginTop + 'px'};
    font-size: ${(props) => props.fontSize + 'px'};
    line-height: ${(props) => props.lineHeight + 'px'};
    font-weight: ${(props) => props.fontWeight};
`;
