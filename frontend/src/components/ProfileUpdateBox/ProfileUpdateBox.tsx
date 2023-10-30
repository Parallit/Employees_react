import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'src/store';
import { deleteUserProfile } from 'src/store/user/userSlice';
import { User } from 'src/store/types.common';
import { DangerButton } from 'src/styles/Buttons/DangerButton';
import { FormContainer } from 'src/styles/Containers/FormContainer';
import { TitleForm } from 'src/styles/Titles/TitleForm';
import { UpdateUserForm } from 'src/components/Forms/UpdateUserForm';

interface ProfileUpdateBoxProps {
    user: User;
    $width?: string;
    $margin?: string;
}

export const ProfileUpdateBox: FC<ProfileUpdateBoxProps> = ({ user, $width, $margin }) => {
    const dispatch = useDispatch<AppDispatch>();

    return (
        <>
            <FormContainer $width={$width} $margin={$margin}>
                <TitleForm>Edit your information</TitleForm>
                <UpdateUserForm user={user} />
                {/* сделать модалкой */}
                <DangerButton
                    onClick={() => dispatch(deleteUserProfile(user))}
                    $outline='none'
                    $margin="100px 0 30px 0"
                    $padding='25px 20px'>
                    Delete your profile
                </DangerButton>
            </FormContainer>
        </>
    );
};