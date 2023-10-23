import { ChangeEvent, useState } from 'react'

export const useArea = (initialValue: string) => {
    const [value, setValue] = useState<string>(initialValue)

    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setValue(e.target.value)
    }

    return {
        value,
        setValue,
        onChange: handleChange,
    }
}