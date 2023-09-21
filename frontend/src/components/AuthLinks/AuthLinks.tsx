import { FC } from "react";
import { ContainerLink } from "src/styles/Containers/ContainerLink";
import { NavigateLink } from "src/styles/NavigateLink";
import { IconComponent } from "../Icon";
import { styled } from "styled-components";

interface AuthLinksProps {
    isAuth: true | false;
    onClick: () => void;
}

export const AuthLinks: FC<AuthLinksProps> = ({ isAuth, onClick }) => {
    return (
        <>
            {isAuth ?
                <ContainerLink >
                    <NavigateLink  to={'/login'} onClick={onClick}>
                        <Text>Logout</Text>
                    </NavigateLink>
                </ContainerLink>
                :
                <ContainerLink >
                    <NavigateLink to={'/login'}>
                        <Text>Sig In</Text>
                        <IconComponent type={'login'} />
                    </NavigateLink>
                </ContainerLink>
            }
        </>
    )
}

const Text = styled.span`
    padding: 0 10px;
`