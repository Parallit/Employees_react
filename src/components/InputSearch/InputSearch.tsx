import { FC, useEffect, useState } from 'react';
import { useSearchContext } from '../Hook/useSearchContext';
import { Input } from './StyledInput';

type inputId =
  | 'First Name'
  | 'Last Name'
  | 'Position'
  | 'Department'
  | 'Room'
  | 'Telephone'
  | 'Chief';

interface InputSearchProps {
  className?: string;
  title: string;
}

export const InputSearch: FC<InputSearchProps> = ({ className, title }) => {
  const [value, setValue] = useState<string>('');
  const { getInputData } = useSearchContext();

  const onChangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    getInputData({
      id: title as inputId,
      value: e.target.value,
    });
  };

  useEffect(() => {
    setValue('');
  }, [title]);

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
