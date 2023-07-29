import { FC, useState } from "react";
import { styled } from "styled-components";
import { FilterSearch } from "../FilterSearch";
import { IconComponent } from "src/components/Icon";
import { Button } from "src/styles/Buttons/Button";

type inputId = 'First Name' | 'Last Name' | 'Position' | 'Department' | 'Room' | 'Telephone' | 'Chief';

interface inputData {
    id: inputId,
    value: string
}
interface SearchBoxProps {
    className?: string,
    getInputData: (data: inputData) => void,
    titles: string[]
}

export const SearchBox: FC<SearchBoxProps> = ({ titles, getInputData }) => {
    const [curInputId, setCurInputId] = useState<string>('First Name');
    const [curGridPosition, setCurGridPosition] = useState<string>('1');

    const handleClickPrev = (inputIdList: string[], curInputId: string) => {
        let id = inputIdList.findIndex((el) => el === curInputId)
        if (id > 0) {
            id -= 1;
            setCurInputId(inputIdList[id])
            setCurGridPosition((id + 1).toString())
        }
    }

    const handleClickNext = (inputIdList: string[], curInputId: string) => {
        let id = inputIdList.findIndex((el) => el === curInputId)
        if (id < inputIdList.length - 1) {
            id += 1;
            setCurInputId(inputIdList[id])
            setCurGridPosition((id + 1).toString())
        }
    }

    return (
        <>
            <SearchWrapper>
                    <Search>
                        <li>
                            <Button
                                children={<IconComponent type={"arrow-left"} />}
                                onClick={() => handleClickPrev(titles, curInputId)}
                                $primaryButton
                                $margin="0"
                                $padding="5px 10px"
                            />
                        </li>
                        <MainLi $gridPosition={curGridPosition}>
                            <FilterSearch title={curInputId} getInputData={getInputData} />
                        </MainLi>
                        <li>
                            <Button
                                children={<IconComponent type={"arrow-right"} />}
                                onClick={() => handleClickNext(titles, curInputId)}
                                $primaryButton
                                $margin="0"
                                $padding="5px 10px"
                            />
                        </li>
                    </Search>
            </SearchWrapper>
        </>
    );
}


const SearchWrapper = styled.div`
    margin: 0 0 30px 0;
    color: #fff;
    max-width: 100%;
    min-height: 50px;
    border-radius: 0 0 15px 15px;
    background: rgba(0, 0, 0, 0.9);
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.9);
    padding: 10px 20px;
    position: relative;

`

const MainLi = styled.li<{ 
    $gridPosition?: string
}>`
    grid-column-start: ${({ $gridPosition }) => $gridPosition || "1"};
    transition: all 2s ease-in-out;
`

const Search = styled.ul`
    display: grid;
    grid-template-columns: repeat(7, 150px);
    justify-content: center;
    text-align: center;
    column-gap: 15px;
    margin: 0;
    min-height: 50px;
    position: relative;

    & li {
        list-style-type: none;
        display: flex;
        align-items: center;
        justify-content: center;

        & svg {
            width: 35px;
            height: 35px;
        }
    }

    & li:first-child {
        position: absolute;
        left: 25px;
        top: 0;
        transition: all 0.5s ease-in-out;
    }

    & li:last-child {
        position: absolute;
        right: 25px;
        top: 0;
        transition: all 0.5s ease-in-out;
    }



`


