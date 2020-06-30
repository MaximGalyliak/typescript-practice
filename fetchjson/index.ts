import axios from 'axios';

const URL = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(URL).then(({ data }) => {
  const { id, title, completed } = data as Todo;

  logTodo(id, title, completed);
});

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
  The todo with ID: ${id}
  Has a title of: ${title}
  Is it finished? ${completed}
  `);
};
