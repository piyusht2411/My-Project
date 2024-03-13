import React, { useState } from 'react';
import styles from './index.module.scss';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import calender from '../../../assets/svg/date.svg';

type InputBoxProps = {
  label?: string;
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
};

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const CalenderBox = (props: InputBoxProps) => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className={styles.surroundingDiv}>
      <div className={styles.innerDiv}>
        <img src={calender} loading="lazy" alt="calender" className={styles.calendarImage} />
        <div className={styles.text}>
          {/* <input type="number" className={styles.inputBox} placeholder="01/03/2021" />
           */}
          <DatePicker
            onChange={onChange}
            value={value}
            className={styles.datePicker}
            calendarIcon={null}
            clearIcon={null}
            calendarClassName={styles.calendar}
          />
        </div>
        <div className={styles.optional}></div>
      </div>
    </div>
  );
};

export default CalenderBox;
