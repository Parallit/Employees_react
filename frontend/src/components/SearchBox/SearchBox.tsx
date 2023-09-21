import { FC, useEffect, useState } from "react";
import { InputSearch } from "src/components/InputSearch";
import { IconComponent } from "src/components/Icon";
import { PrimaryButton } from "src/styles/Buttons/PrimaryButton";
import { useSearchContext } from "src/components/Hook/useSearchContext";
import { InputItem, SearchContainer } from "./StyledSearchBox";

interface SearchBoxProps {
    className?: string,
    titles: string[]
}

export const SearchBox: FC<SearchBoxProps> = ({ titles }) => {
    const [curInputId, setCurInputId] = useState<string>('First Name');
    const [curGridPosition, setCurGridPosition] = useState<string>('1');
    const [isActiveInput, setIsActiveInput] = useState<boolean>(true);
    const { inputSearchData } = useSearchContext();

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

    const handleRenderButton = () => {
        if (inputSearchData.value) {
            setIsActiveInput(false)
        } else {
            setIsActiveInput(true)
        }
    }

    useEffect(() => {
        handleRenderButton();
    }, [inputSearchData.value])

    return (
        <>
            <SearchContainer>
                <ul>
                    <li>
                        {
                            isActiveInput &&
                            <PrimaryButton
                                children={<IconComponent type={"arrow-left"} />}
                                onClick={() => handleClickPrev(titles, curInputId)}
                                $margin="0"
                                $padding="5px 10px"
                            />
                        }
                    </li>
                    <InputItem $gridPosition={curGridPosition}>
                        <InputSearch title={curInputId} />
                    </InputItem>
                    <li>
                        {
                            isActiveInput &&
                            <PrimaryButton
                                children={<IconComponent type={"arrow-right"} />}
                                onClick={() => handleClickNext(titles, curInputId)}
                                $margin="0"
                                $padding="5px 10px"
                            />
                            }
                    </li>
                </ul>
            </SearchContainer>
        </>
    );
}