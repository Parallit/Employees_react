import { FC, useState } from 'react';
import { MenuLinks } from 'src/components/Header/Header';
import { IconComponent } from 'src/components/Icon';
import { PrimaryButton } from 'src/styles/Buttons/PrimaryButton';
import { NavigateLink } from 'src/styles/NavigateLink';
import { BurgerContainer, NavigateContainer } from './StyledSideMenu';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'src/store';
import { userLogout } from 'src/store/auth/authSlice';

interface SideMenuProps {
  navigation: MenuLinks[];
  isAuth: boolean | null;
}

export const SideMenu: FC<SideMenuProps> = ({ navigation, isAuth }) => {
  const [burgerOpen, setBurgerOpen] = useState<boolean>();
  const toggleBurgerMenu = () => {
    setBurgerOpen(!burgerOpen);
  };
  const dispatch = useDispatch<AppDispatch>();

  return (
    <>
      <BurgerContainer>
        <PrimaryButton $margin={'0'} onClick={toggleBurgerMenu}>
          <IconComponent type={'burger'} />
        </PrimaryButton>
      </BurgerContainer>
      {burgerOpen && (
        <NavigateContainer onClick={toggleBurgerMenu}>
          <div>
            <ul
              onClick={(e: React.MouseEvent<HTMLElement>) =>
                e.stopPropagation()
              }
            >
              {navigation.map((item) => (
                <li key={item.name}>
                  <NavigateLink onClick={toggleBurgerMenu} to={item.path}>
                    {item.name}
                  </NavigateLink>
                </li>
              ))}
              <li>
                {isAuth ? (
                  <NavigateLink
                    to={'/login'}
                    onClick={() => dispatch(userLogout())}
                  >
                    Logout
                  </NavigateLink>
                ) : (
                  <NavigateLink to={'/login'} onClick={toggleBurgerMenu}>
                    Sig In
                  </NavigateLink>
                )}
              </li>
            </ul>
          </div>
        </NavigateContainer>
      )}
    </>
  );
};
