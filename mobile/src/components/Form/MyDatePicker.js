import React, {
  useEffect,
  useRef,
  useState
} from 'react';
import DatePicker from 'react-native-datepicker';
import { useField } from '@unform/core';

export default function MyDatePicker({name, placeholder, ...rest}){

  const dateRef = useRef(null);
  const [dateTemp, setDateTemp] = useState(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
      dateRef.current.value = defaultValue;
    }, [defaultValue]);


  useEffect(() => {
      registerField({
        name: fieldName,
        ref: dateRef.current,
        path: 'value',

        clearValue(ref) {
          ref.value = null;
          ref.clear();
        },

        setValue(ref, value) {
          ref.setNativeProps({ date: value });
          dateRef.current.value = value;
        },
        
        getValue(ref) {
          return ref.value;
        },
      });
    }, [fieldName, registerField]);

    return (
      <DatePicker
      ref={dateRef}
      style={{ width: 330 }}
      mode="date"
      date={dateTemp}
      format="DD-MM-YYYY"
      minDate="01-01-1900"
      placeholder={placeholder}
      maxDate={new Date()}
      confirmBtnText="Confirm"
      cancelBtnText="Cancel"
      showIcon={false}
      
      customStyles={{
        dateInput: {
          width: 330,
          height: 50,
          fontSize: 16,
          borderRadius: 10,
          backgroundColor: '#FFFFFF',
          borderColor: '#FFFFFF',
          alignItems: 'flex-start',
          justifyContent: 'space-around',
        },
        dateTouchBody: {
          marginTop: 10,
          marginBottom: 5,
        },
        dateText: {
          fontWeight: 'bold',
          fontSize: 16,
          color: '#000000',
          padding: 10,
        },

        placeholderText: {
          fontWeight: 'bold',
          fontSize: 16,
          padding: 10,
          color: '#C3C3C3',
        },
      }}
      onDateChange={date => { 
          if(dateRef.current){
              dateRef.current.value = date;
              setDateTemp(date);
          }
       }}
    />
    )
}
