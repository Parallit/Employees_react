import styled from 'styled-components'
import { FC } from 'react';
import { AiFillEdit, AiFillDelete, AiOutlineRight } from "src/icons";

interface IconComponentProps {
    type: string
}

const icons = (type: string) => {
    switch (type) {
        case "edit": {
            return <AiFillEdit />;
        }
        case "remove": {
            return <AiFillDelete />;
        }
        default: {
            return <AiOutlineRight />;
        }
    }
};

export const IconComponent: FC<IconComponentProps> = ({ type }) => {
    return (
        <>
            <i>
                {icons(type)}
            </i>
        </>
    );
};

// export const IconComp = styled(IconComponent)`
//     display: flex;
//     color: aquamarine;
// `