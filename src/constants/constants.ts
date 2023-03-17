import type {ITodoListData} from "@/types/dataTypes";

export const TODO_LIST_INIT_DATA = ((): ITodoListData[] => ([
  {
    todoData: 'To-do를 만들어 보세요',
    finished: false,
  },
  {
    todoData: `'삭제' 버튼을 누르면 To-do가 삭제됩니다.`,
    finished: false,
  }
]))()