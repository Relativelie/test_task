import { MutableRefObject, useEffect, useRef } from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';

export const Menu = () => {
    const inputValue = useRef() as MutableRefObject<HTMLInputElement>;
    const { getResult } = useTypedSelector(
        (requestState) => requestState.sendRequestReducer,
    );
    const { isSearched } = useTypedSelector(
        (searchState) => searchState.searchReducer,
    );
    const { sendGet, turnOffSearch, turnOnSearch } = useActions();

    useEffect(() => {
        if (isSearched) turnOnSearch(getResult);
        else turnOffSearch();
    }, [getResult]);

    const searchValue = async () => {
        const searchFlag = inputValue.current.value;
        if (searchFlag.trim().length !== 0) {
            const headers = { accept: 'application/json' };
            const url = `https://cors-anywhere.herokuapp.com/https://todo.doczilla.pro/api/todos/find?q=${searchFlag}&limit=100&offset=3`;
            await sendGet(url, headers);
        }
    };
    return (
        <div className='menu'>
            <input
                type="text"
                ref={inputValue}
                placeholder="Поиск"
                onChange={() => searchValue()} />
        </div>
    );
};
