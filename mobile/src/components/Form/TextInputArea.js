import React, {
    useEffect,
    useRef,
    useState,
} from 'react';
import { useField } from '@unform/core';
import Textarea from 'react-native-textarea';

function TextInputArea({ name, ...rest }) {

    const inputRef = useRef(null);
    const { fieldName, registerField, defaultValue, error } = useField(name);

    useEffect(() => {
        inputRef.current.value = defaultValue;
    }, [defaultValue]);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value',
            clearValue(ref) {
                ref.value = '';
                ref.clear();
            },
            setValue(ref, value) {
                ref.setNativeProps({ text: value });
                inputRef.current.value = value;
            },
            getValue(ref) {
                return ref.value;
            },
        });
    }, [fieldName, registerField]);


    return (
        <Textarea
            ref={inputRef}
            keyboardAppearance="dark"
            defaultValue={defaultValue}
            placeholderTextColor="#C0C0C0"
            onChangeText={value => {
                if (inputRef.current) {
                    inputRef.current.value = value;
                }
            }}
            {...rest}
        />
    );
};

export default TextInputArea;