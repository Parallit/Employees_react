import { FC } from 'react';
import { NavigateLink } from 'src/styles/NavigateLink';
import { useSelector } from 'react-redux';
import { selectIsAuth } from 'src/store/auth/selectors';
import { HeaderMenu } from 'src/components/Menu/HeaderMenu';
import { SideMenu } from 'src/components/Menu/SideMenu';
import { HeaderContainer, LogoContainer } from './StyledHeader';

export interface MenuLinks {
    name: string,
    path: string,
}

const Navigation: MenuLinks[] = [
    {
        name: 'Homepage',
        path: '/',
    },
    {
        name: 'Employees',
        path: '/employees',
    },
    {
        name: 'Users',
        path: '/users',
    },
    {
        name: 'Profile',
        path: '/profile',
    },
];

export const Header: FC = () => {
    const isAuth = useSelector(selectIsAuth);

    return (
        <>
            <HeaderContainer>
                <LogoContainer>
                    <NavigateLink $activeColor='none' to={'/'}>
                        Handbook
                    </NavigateLink>
                </LogoContainer>
                <HeaderMenu navigation={Navigation} isAuth={isAuth}/>
                <SideMenu navigation={Navigation} isAuth={isAuth}/>
            </HeaderContainer>
        </>
    );
};
