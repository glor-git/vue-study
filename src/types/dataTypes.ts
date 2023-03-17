export interface ISetTodoListData {
  data?: String;
  type?: 'add' | 'delete' | 'edit';
  index?: number
}

export interface ITodoListData {
  todoData: String;
  finished: boolean;
}