import { styled } from "styled-components"

export const ContainerInfo = styled.div<{
    $width?: string,
    $maxHeight?: string
}>`
    width: ${({ $width }) => $width || "100%"};
    max-height: ${({ $maxHeight }) => $maxHeight || "800px"};
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 40px 40px;
    box-sizing: border-box;
    border-radius: 15px;
    background: rgba(0, 0, 0, 0.9);
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.9);
    margin-right: 20px;

            ::-webkit-scrollbar {
        width: 10px;
        }

        ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px #03e9f4;
        border-radius: 10px;
        }

        ::-webkit-scrollbar-thumb {
        background: linear-gradient(166deg, rgba(249,123,30,1) 25%, rgba(205,40,149,1) 81%);
        border-radius: 10px;
        }
`
export const TitleContainer = styled.div`
    padding: 0;
    color: #fff;
    text-align: center;
    font-size: 24px;
    letter-spacing: 2px;
`

export const SuborditanesContainer = styled.ul`
    overflow-y: scroll;
`

export const SubordinateBox = styled.li`
    display: flex;
    justify-content: space-between;
    margin: 15px 20px;
    align-items: center;
`
export const SubordinateLink = styled.div`
    margin: 5px 15px;
    padding: 2px 2px;
    text-align: center;
`