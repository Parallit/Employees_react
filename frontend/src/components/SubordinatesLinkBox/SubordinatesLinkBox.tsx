import { NavigateLink } from "src/styles/NavigateLink"
import { AvatarIcon } from "../AvatarIcon"
import { Employees } from "src/store/types.common"
import { FC } from "react"
import { ContainerInfo, SubordinateBox, SubordinateLink, SuborditanesContainer, TitleContainer } from "./StyledSubordinatesLinkBox"

interface SubordinatesLinkBoxProps {
    subordinates: Employees,
    $width?: string,
    $maxHeight?: string,
    className?: string
}

export const SubordinatesLinkBox: FC<SubordinatesLinkBoxProps> = ({ subordinates, $width, $maxHeight, className }) => {
    return (
        <ContainerInfo className={className} $width={$width} $maxHeight={$maxHeight}>
            <TitleContainer>
                <h3>Subordinates:</h3>
            </TitleContainer>
            <SuborditanesContainer>
                {
                    subordinates.map((employee) => (
                        <SubordinateBox key={employee._id}>
                            <AvatarIcon name={employee.avatar} width={"60px"} height={"60px"} />
                            <SubordinateLink>
                                <NavigateLink to={`user/${employee._id}`} $fontSize='18px' $textTransform='capitalize'>
                                    {employee.firstName} {employee.lastName}
                                </NavigateLink>
                            </SubordinateLink>
                        </SubordinateBox>
                    ))
                }
            </SuborditanesContainer>
        </ContainerInfo>
    )
}