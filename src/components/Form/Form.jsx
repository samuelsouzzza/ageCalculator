import React from 'react';
import {
  Container,
  Label,
  Input,
  SendButton,
  MessageError,
} from './Form.styles.js';
import IconButton from './components/IconButton.jsx';

const Form = ({ calculate }) => {
  const [day, setDay] = React.useState(28);
  const [month, setMonth] = React.useState(6);
  const [year, setYear] = React.useState(2003);
  const [errors, setErrors] = React.useState({
    fieldDay: false,
    fieldMonth: false,
    fieldYear: false,
  });

  React.useEffect(() => {
    calculate(day, month, year);
  }, []);

  const inputDay = React.useRef();
  const inputMonth = React.useRef();
  const inputYear = React.useRef();

  function handleClick() {
    const currentYear = new Date().getFullYear();
    let formValid = true;

    const newErrors = {
      fieldDay: false,
      fieldMonth: false,
      fieldYear: false,
    };

    if (day.lenght === 0 || day > 31 || day <= 0) {
      formValid = false;
      newErrors.fieldDay = true;
      inputDay.current.style.borderColor = 'hsl(0, 100%, 67%)';
      setTimeout(() => {
        inputDay.current.style.borderColor = 'hsl(0, 0%, 86%)';
      }, 2000);
    }
    if (month.lenght === 0 || month > 12 || month <= 0) {
      formValid = false;
      newErrors.fieldMonth = true;
      inputMonth.current.style.borderColor = 'hsl(0, 100%, 67%)';
      setTimeout(() => {
        inputMonth.current.style.borderColor = 'hsl(0, 0%, 86%)';
      }, 2000);
    }
    if (year.lenght === 0 || year > currentYear || year <= 0) {
      formValid = false;
      newErrors.fieldYear = true;
      inputYear.current.style.borderColor = 'hsl(0, 100%, 67%)';
      setTimeout(() => {
        inputYear.current.style.borderColor = 'hsl(0, 0%, 86%)';
      }, 2000);
    }
    if (formValid) calculate(day, month, year);

    setErrors(newErrors);
    setTimeout(() => {
      const reset = {
        fieldDay: false,
        fieldMonth: false,
        fieldYear: false,
      };
      setErrors(reset);
    }, 2000);
  }
  return (
    <Container>
      <Label htmlFor='txtDay'>
        DAY
        <Input
          id='txtDay'
          ref={inputDay}
          type='text'
          maxLength={2}
          placeholder='DD'
          required
          value={day}
          onChange={({ target }) => setDay(target.value)}
        />
        {errors.fieldDay && <MessageError>Invalid</MessageError>}
      </Label>
      <Label htmlFor='txtMonth'>
        MONTH
        <Input
          id='txtMonth'
          ref={inputMonth}
          type='text'
          maxLength={2}
          placeholder='MM'
          required
          value={month}
          onChange={({ target }) => setMonth(target.value)}
        />
        {errors.fieldMonth && <MessageError>Invalid</MessageError>}
      </Label>
      <Label htmlFor='txtYear'>
        YEAR
        <Input
          id='txtYear'
          ref={inputYear}
          type='text'
          maxLength={4}
          placeholder='YYYY'
          required
          value={year}
          onChange={({ target }) => setYear(target.value)}
        />
        {errors.fieldYear && <MessageError>Invalid</MessageError>}
      </Label>
      <SendButton onClick={handleClick}>
        <IconButton />
      </SendButton>
    </Container>
  );
};

export default Form;
