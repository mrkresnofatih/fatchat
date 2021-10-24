// @flow
import * as React from 'react';
import {useEffect, useState} from 'react';
import {Input} from "./Input";
import styles from './selectinput.module.css';

type Props = {
    label: string,
    onChange: (p: string) => void,
    backgroundColor?: string,
    color?: string,
    selectOptions: string[],
    placeHolder: string
};
export const SelectInput = (props: Props) => {
    const {placeHolder, onChange} = props;
    const [select, setSelect] = useState<string>(placeHolder);
    const [collapse, setCollapse] = useState<boolean>(false);
    const onToggle = () => setCollapse(i => !i);

    useEffect(()=>{
        if(select!==placeHolder){
            onChange(select);
        }
    }, [select, onChange, placeHolder])

    const onSelect = (p: string) => () => {
        setSelect(p);
        onToggle();
    };

    return (
        <Input
            label={props.label}
            Content={
                <div className={styles.selectInputContainer}>
                    <div className={`${styles.selectInputMainBox} ${styles.borderRound}`} onClick={onToggle}>{select}</div>
                    <div className={`${styles.selectInputOptions} ${!collapse && styles.hide}`}>
                        {props.selectOptions.map((p, index) => (
                            <div key={index} onClick={onSelect(p)} className={styles.selectInputMainBox}>{p}</div>
                        ))}
                    </div>
                </div>
            }
        />
    );
};