import { useEffect, useState } from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { DataType } from '../../types/dataType';
import { FilterByStatus } from '../filterByStatus/FilterByStatus';
import { Menu } from '../menu/Menu';
import { Tasks } from '../tasks/Tasks';

function App() {
  const [tasks, setTasks] = useState<DataType[]>([]);
  const { content } = useTypedSelector(
    (contentState) => contentState.contentReducer,
  );
  const { searchedList, isSearched } = useTypedSelector(
    (searchState) => searchState.searchReducer,
  );
  const { getResult } = useTypedSelector(
    (requestState) => requestState.sendRequestReducer,
  );
  const { filteredContent } = useTypedSelector(
    (filterState) => filterState.FilterByStatusReducer,
);

  const { sendGet, saveContent } = useActions();

  useEffect(() => {
    if (filteredContent.length !== 0) {
      setTasks(filteredContent);
    } else if (searchedList.length !== 0) {
      setTasks(searchedList);
    } else setTasks(content);
  }, [searchedList, filteredContent]);

  useEffect(() => {
    const getRequest = async () => {
      const url = 'https://cors-anywhere.herokuapp.com/https://todo.doczilla.pro/api/todos?limit=100&offset=3';
      const headers = { accept: 'application/json' };
      await sendGet(url, headers);
    };
    getRequest();
  }, []);

  useEffect(() => {
    saveContent(getResult);
  }, [getResult]);

  return (
    <div className="App">
      <Menu />
      <FilterByStatus data={isSearched ? searchedList : content}/>
      <Tasks data={tasks} />
    </div>
  );
}

export default App;
