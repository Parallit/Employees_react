import { FC, useState } from 'react';
import style from './EmployeeAddForm.module.scss';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'src/store';
import { addNewEmployee } from 'src/store/employees/employeesSlice';

interface EmployeeAddFormProps {
  onClose: () => void;
}

export const EmployeeAddForm: FC<EmployeeAddFormProps> = ({onClose}) => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [position, setPosition] = useState<string>('');
  const [room, setRoom] = useState<string>('');
  const [department, setDepartment] = useState<string>('');
  const [telephone, setTelephone] = useState<string>('');
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newEmployee = {
      firstName: firstName,
      lastName: lastName,
      position: position,
      room: room,
      department: department,
      telephone: telephone,
    };
    dispatch(addNewEmployee(newEmployee));
    setFirstName('');
    setLastName('');
    setPosition('');
    setRoom('');
    setDepartment('');
    onClose()
  };

  return (
    <>
      <div className={style.container}>
        <h3 className={style.form_heading}>Employee information</h3>
        <form onSubmit={handleSubmit} className={style.form_info}>
          <div className={style.input_wrp}>
            <input
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
              className={style.form_input}
              type="text"
              id="firstName"
              required
            />
            <label htmlFor="firstName" className={style.form_label}>
              First Name:
            </label>
          </div>
          <div className={style.input_wrp}>
            <input
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
              className={style.form_input}
              type="text"
              id="lastName"
              required
            />
            <label htmlFor="lastName" className={style.form_label}>
              Last Name:
            </label>
          </div>
          <div className={style.input_wrp}>
            <input
              onChange={(e) => setPosition(e.target.value)}
              value={position}
              className={style.form_input}
              type="text"
              id="position"
              required
            />
            <label htmlFor="position" className={style.form_label}>
              Position:
            </label>
          </div>
          <div className={style.input_wrp}>
            <input
              onChange={(e) => setRoom(e.target.value)}
              value={room}
              className={style.form_input}
              type="text"
              id="room"
              required
            />
            <label htmlFor="room" className={style.form_label}>
              Room:
            </label>
          </div>
          <div className={style.input_wrp}>
            <input
              onChange={(e) => setDepartment(e.target.value)}
              value={department}
              className={style.form_input}
              type="text"
              id="department"
              required
            />
            <label htmlFor="department" className={style.form_label}>
              Department:
            </label>
          </div>
          <div className={style.input_wrp}>
            <input
              onChange={(e) => setTelephone(e.target.value)}
              value={telephone}
              className={style.form_input}
              type="text"
              id="telephone"
              required
            />
            <label htmlFor="telephone" className={style.form_label}>
              Phone number:
            </label>
          </div>
          <button className={style.add_btn}>Click to add new employee</button>
        </form>
      </div>
    </>
  );
};
