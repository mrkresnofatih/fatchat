// @flow
import * as React from 'react';
import {useState} from 'react';

type Props = {
    src: string,
    alt?: string
};
export const Image = (props: Props) => {
    const {src, alt} = props;
    const [error, setError] = useState<boolean>(false);
    const onError = (): void => setError(true);

    if (!error) {
        return (
            <img src={src} alt={alt} onError={onError}/>
        )
    }

    return <></>;
};