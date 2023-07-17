import { FC } from "react";

interface CustomTitlesBoxProps {
    titles: string[];
}

export const CustomTitlesBox: FC<CustomTitlesBoxProps> = ({ titles, ...props }) => {
    return (
        <>
            <div {...props}>
                <ul>
                    {titles.map((title, idx) => (
                        <li key={idx}>{title}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}

