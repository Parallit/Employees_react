import { FC, useEffect, useState } from 'react';
import { styled } from 'styled-components';

type inputId = 'First Name' | 'Last Name' | 'Position' | 'Department' | 'Room' | 'Telephone' | 'Chief';
interface inputData {
  id: inputId,
  value: string
}

interface FilterSearchProps {
  className?: string,
  title: string,
  getInputData: (data: inputData) => void
}

export const FilterSearch: FC<FilterSearchProps> = ({ className, title, getInputData }) => {
  const [value, setValue] = useState<string>('');

  const onChangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    getInputData(
      {
        id: title as inputId,
        value: e.target.value
      }
    );
  }

  useEffect(() => {
    setValue('')
  }, [title])

  return (
    <>
        <Input
          type="text"
          value={value}
          id={title}
          placeholder={title}
          onChange={onChangeHandle}
          className={className}
        />
    </>
  );
};


const Input = styled.input`
    background: rgba(0, 0, 0, 0.9);
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.9);
    color: #fff;
    outline: none;
    border: none;
    border-bottom: 1px solid #03e9f4;
    border-top: 1px solid #e55455;
    border-radius: 10px;
    height: 80%;
    text-align: center;

    &:focus~& label {
    top: -20px;
    left: 0;
    color: #03e9f4;
    font-size: 12px;
    }
`