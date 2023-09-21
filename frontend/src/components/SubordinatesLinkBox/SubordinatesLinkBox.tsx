import { NavigateLink } from "src/styles/NavigateLink"
import { styled } from "styled-components"
import { AvatarIcon } from "../AvatarIcon"
import { Employees } from "src/store/types.common"
import { FC } from "react"

interface SubordinatesLinkBoxProps {
    subordinates: Employees
}

export const SubordinatesLinkBox: FC<SubordinatesLinkBoxProps> = ({ subordinates }) => {
    return (
        <WrapperBox>
            {
                subordinates.map((employee) => (
                    <SubordinateBox key={employee._id}>
                        <AvatarIcon name={employee.avatar} width={"30px"} height={"30px"} />
                        <WrapperLink>
                            <NavigateLink to={`user/${employee._id}`} $fontSize='15px' $textTransform='capitalize'>
                                {employee.firstName} {employee.lastName}
                            </NavigateLink>
                        </WrapperLink>
                    </SubordinateBox>
                ))
            }
        </WrapperBox>
    )
}

const WrapperBox = styled.div`
    margin-top: 10px;
    max-height: 250px;
    overflow: scroll;
`

const SubordinateBox = styled.div`
    padding: 2px 2px;
`
const WrapperLink = styled.div`
    margin: 5px 15px;
    padding: 2px 2px;
    text-align: center;
`