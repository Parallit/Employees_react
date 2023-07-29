import { FC } from "react";

interface CustomTitlesBoxProps {
    titles: string[];
    className?: string
}

export const CustomTitlesBox: FC<CustomTitlesBoxProps> = ({ titles, className }) => {
    return (
        <>
            <div className={className}>
                <ul>
                    {titles.map((title, idx) => (
                        <li key={idx}>{title}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}
