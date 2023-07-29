import { FC } from "react";
import { styled } from "styled-components";
import { keyframes } from 'styled-components'

interface SpinnerProps {
    $width?: string,
    $height?: string,
    className?: string,
}

export const Spinner: FC<SpinnerProps> = ({$width, $height, className}) => {
    return (
        <Preloader className={className}>
            <Loader></Loader>
        </Preloader>
    );
}

const spin = keyframes`
    0%   {
        -webkit-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(360deg);
        -ms-transform: rotate(360deg);
        transform: rotate(360deg);
    }
`

export const Preloader = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 999999;
`

export const Loader = styled.div<{
    $width?: string,
    $height?: string
}>`
    display: block;
    position: relative;
    left: 50%;
    top: 50%;
    width: ${({ $width }) => $width || '100px'};
    height: ${({ $height }) => $height || '100px'};
    margin: -75px 0 0 -75px;
    border-radius: 50%;
    border: 3px solid transparent;
    border-top-color: ${({ theme }) => theme.colors.neonBlue};
    -webkit-animation: ${spin} 2s linear infinite;
    animation: ${spin} 2s linear infinite;

    &::before {
        content: "";
        position: absolute;
        top: 5px;
        left: 5px;
        right: 5px;
        bottom: 5px;
        border-radius: 50%;
        border: 3px solid transparent;
        border-top-color: ${({ theme }) => theme.colors.white};
        -webkit-animation: ${spin} 3s linear infinite;
        animation: ${spin} 3s linear infinite;
    }
    &::after {
        content: "";
        position: absolute;
        top: 15px;
        left: 15px;
        right: 15px;
        bottom: 15px;
        border-radius: 50%;
        border: 3px solid transparent;
        border-top-color: ${({ theme }) => theme.colors.danger};
        -webkit-animation: ${spin} 1.5s linear infinite;
        animation: ${spin} 1.5s linear infinite;
    }
`