import { MutableRefObject, useRef } from 'react';
import { useActions } from '../../../hooks/useActions';

import './Search.scss';

export const Search = () => {
    const inputValue = useRef() as MutableRefObject<HTMLInputElement>;
    const { sendGet } = useActions();

    const searchValue = async () => {
        const searchFlag = inputValue.current.value;
        if (searchFlag.trim().length !== 0) {
            const headers = { accept: 'application/json' };
            const url = `https://cors-anywhere.herokuapp.com/https://todo.doczilla.pro/api/todos/find?q=${searchFlag}&limit=100&offset=3`;
            await sendGet(url, headers);
        }
    };
    return (
        <input
            className="topMenu__search"
            type="text"
            ref={inputValue}
            placeholder="Поиск"
            onChange={() => searchValue()}
        />
    );
};
