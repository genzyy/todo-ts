// Interfaces and types that are available globally.

interface Todo {
    text: string,
    complete: boolean;
}

type ToggleTodo = (gtodo: Todo) => void;

type AddTodo = (text: string) => void;