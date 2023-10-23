import { FC, Suspense } from "react";
import { Await, useLoaderData, useNavigate } from "react-router-dom";
import { TitlePage } from 'src/styles/Titles/TitlePage';
import { Button } from "src/styles/Buttons/Button";
import { ChiefInfo } from "src/components/ChiefInfo";
import { SubordinatesLinkBox } from "src/components/SubordinatesLinkBox";
import { ContainerInfo } from "./StyledChiefInfoPage";
import { ChiefLoaderData } from "./ChiefInfoLoader";
import { Spinner } from "src/components/Spinner";

export const ChiefInfoPage: FC = () => {
    const { user } = useLoaderData() as ChiefLoaderData;
    
    const navigate = useNavigate();
    const goBackPage = () => {
        navigate(-1)
    }

    return (
        <>
            <TitlePage>Chief information</TitlePage>
            <Button onClick={goBackPage} children={'Go Back'} $primaryButton $padding="20px 30px" $margin="10px 10px" />
            <ContainerInfo>
                {/* добавить скелетон */}
                <Suspense fallback={<Spinner />}>
                    <Await
                        errorElement={<div>Something went wrong!</div>}
                        resolve={user}
                    >
                        {(resolvedUser) => (
                            <>
                                <ChiefInfo user={resolvedUser} />
                                <SubordinatesLinkBox subordinates={resolvedUser.employeesId} $width="40%" />
                            </>
                        )}
                    </Await>
                </Suspense>
            </ContainerInfo>
        </>
    );
}