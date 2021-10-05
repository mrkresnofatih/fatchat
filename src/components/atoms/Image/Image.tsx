// @flow
import * as React from 'react';
import {useState} from 'react';

type Props = {
    src: string,
    fallbackSrc?: string,
    className?: any,
    alt?: string
};
export const Image = (props: Props) => {
    const {src, alt, fallbackSrc, className} = props;
    const [error, setError] = useState<boolean>(false);
    const onError = (): void => setError(true);

    if (!error) {
        return (
            <img
                src={src}
                alt={alt}
                onError={onError}
                className={className}
            />
        )
    }

    if (fallbackSrc) {
        return (
            <img
                src={fallbackSrc}
                alt={alt}
            />
        )
    }

    return <></>;
};