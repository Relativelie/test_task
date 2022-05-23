import { useEffect, useState } from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { DataType } from '../../types/dataType';
import { TopMenu } from '../topMenu/TopMenu';
import { Tasks } from '../tasks/Tasks';
import { Sidebar } from '../sidebar/Sidebar';

function App() {
    const [tasks, setTasks] = useState<DataType[]>([]);

    const { content } = useTypedSelector(
        (contentState) => contentState.contentReducer,
    );
    const { searchedList } = useTypedSelector(
        (searchState) => searchState.searchReducer,
    );
    const { getResult } = useTypedSelector(
        (requestState) => requestState.sendRequestReducer,
    );

    const { filteredList } = useTypedSelector(
        (filterState) => filterState.filterByDateFlagReducer,
    );

    const { sendGet, saveContent } = useActions();

    useEffect(() => {
        if (searchedList.length !== 0) setTasks(searchedList);
        else if (filteredList.length !== 0) setTasks(filteredList);
        else setTasks(content);
        console.log(filteredList)
    }, [searchedList, content, filteredList]);
    console.log(filteredList)
    useEffect(() => {
        const getRequest = async () => {
            const url = 'https://cors-anywhere.herokuapp.com/https://todo.doczilla.pro/api/todos?limit=100&offset=3';
            const headers = { accept: 'application/json' };
            await sendGet(url, headers);
        };
        getRequest();
    }, []);

    // useEffect(() => {
    //     saveContent(getResult);
    // }, [getResult]);

    return (
        <div className="App">
            <TopMenu />
            <Sidebar />
            {/* <FilterByStatus data={isSearched ? searchedList : content} /> */}
            <Tasks data={tasks} />
        </div>
    );
}

export default App;
