import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { MenuLinks } from 'src/components/Header/Header';
import { AppDispatch } from 'src/store';
import { userLogout } from 'src/store/auth/authSlice';
import { NavigateLink } from 'src/styles/NavigateLink';
import { Item, List, NavigateContainer } from './StyledMenu';

interface HeaderMenuProps {
  navigation: MenuLinks[];
  isAuth: boolean | null;
}

export const HeaderMenu: FC<HeaderMenuProps> = ({ navigation, isAuth }) => {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <>
      <NavigateContainer>
        <List>
          {navigation.map((item) => (
            <Item key={item.name}>
              <NavigateLink to={item.path}>{item.name}</NavigateLink>
            </Item>
          ))}
          <Item>
            {isAuth ? (
              <NavigateLink
                to={'/login'}
                onClick={() => dispatch(userLogout())}
              >
                Logout
              </NavigateLink>
            ) : (
              <NavigateLink to={'/login'}>Sig In</NavigateLink>
            )}
          </Item>
        </List>
      </NavigateContainer>
    </>
  );
};
