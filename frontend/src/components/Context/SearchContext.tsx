import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";
import { ITitle } from "src/store/types.common";

interface SearchContextProviderProps {
    children: ReactNode,
}

export interface SearchContextProps {
    inputSearchData: inputData,
    setInputSearchData: Dispatch<SetStateAction<inputData>>,
    getInputData: (data: inputData) => void,
}

const DefaultContextProps: SearchContextProps = {
    inputSearchData: { id: '', value: '' },
    setInputSearchData: () => null,
    getInputData: () => null,
}

interface inputData {
    id: ITitle,
    value: string
}

export const SearchContext = createContext<SearchContextProps>(DefaultContextProps);

export const SearchContextProvider = ({children}: SearchContextProviderProps) => {
    const [inputSearchData, setInputSearchData] = useState<inputData>({ id: 'First Name', value: '' });    
    const getInputData = (data: inputData) => {
        setInputSearchData({
            id: data.id,
            value: data.value
        });
    }

    return (
        <SearchContext.Provider value={{
            inputSearchData,
            setInputSearchData,
            getInputData,
            }}>
            {children}
        </SearchContext.Provider>
    )
}   