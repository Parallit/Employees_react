import { ComponentType } from "react"
import { Employee, ITitle, User } from "src/store/types.common"

interface inputData {
    id: ITitle,
    value: string
}

type Unit = Employee | User

export function withFilter<P>(Component: ComponentType<P>) {
    const ComponentWithFilter = (props: P) => {

        // const handleInputData = (unit: Unit, inputData: inputData) => {
        //     const lowerCaseValue = inputData.value.toLowerCase()
        //     if (lowerCaseValue === ('')) {
        //         return unit
        //     }
        //     if (inputData.id === 'Chief') {
        //         const fullName = [unit.userId.firstName.toLowerCase(), unit.userId.lastName.toLowerCase()].join(" ");
        //         return fullName.includes(lowerCaseValue)
        //     }

        //     const unspacedData = inputData.id.split(' ').join('');
        //     const noLowerCaseData = unspacedData.charAt(0).toLowerCase() + unspacedData.slice(1);
        //     const property = unit[noLowerCaseData as keyof Employee];

        //     if (typeof property === "string") {
        //         return property.toLowerCase().includes(lowerCaseValue)
        //     }
        // }

        return <Component
            // units={}
            {...props}
            key={''}
        />
    }
    return ComponentWithFilter;
}