import { useContext } from 'react';
import { MyContext } from '../contexts/MyContext';
import { TodoContext } from '../contexts/TodoContext';
import ReactVideo from './ReactVideo';

export const HomePage = () => {
    const { username, isLogged } = useContext(MyContext);
    // const { tasks } = useContext(TodoContext);
    return (
        
        <ReactVideo></ReactVideo>
    )
}