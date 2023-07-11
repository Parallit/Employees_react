import { FC } from 'react';
import { AiFillEdit, AiFillDelete, AiOutlineRight, AiOutlineLogout, AiOutlineLogin } from "src/icons";

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
        case 'login': {
            return <AiOutlineLogin />
        }
        case "logout": {
            return <AiOutlineLogout />
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