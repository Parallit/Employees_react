import { FC, useState } from "react";
import style from './FilterSearch.module.scss'

interface FilterSearchProps {
    filteredList: (name: string) => void
}

export const FilterSearch: FC<FilterSearchProps> = ({ filteredList }) => {
    const [name, setName] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
        filteredList(name)
    }

    return (
        <>
            <div className={style.container}>
                <input
                    type="text"
                    value={name}
                    id="name"
                    onChange={handleChange}
                    placeholder="Search by the Name ..."
                />
                <label htmlFor="name">Filter</label>
            </div>
        </>
    );
}