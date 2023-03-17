<template>
  <Title>To-do</Title>
  <TodoList :getTodoListData="getTodoListData" :setTodoListData="setTodoListData" />
  <AddTodoData :setTodoListData="setTodoListData" />
</template>

<script lang="ts" setup>
import { ref } from "vue";
import type { Ref } from 'vue';
import Title from "@/components/Title.vue";
import TodoList from "@/components/TodoList.vue";
import AddTodoData from "@/components/AddTodoData.vue";
import type { ISetTodoListData, ITodoListData } from "@/types/dataTypes";
import { TODO_LIST_INIT_DATA } from "@/constants/constants";

const todoListData: Ref<ITodoListData[]> = ref(TODO_LIST_INIT_DATA);
const setTodoListData = ({ data, type, index }: ISetTodoListData) => {
  switch (type) {
    case 'add':
      if (data) {
        todoListData.value.push({
          todoData: data,
          finished: false,
        });
      }
      break;
    case 'delete':
      todoListData.value = todoListData.value.filter((obj, filterIndex) => {
        return filterIndex !== index;
      })
      break;
    case 'edit':
      if (index || index === 0) {
        todoListData.value[index].finished = !todoListData.value[index].finished;
      }
      break;
    default:
      break;
  }
}

const getTodoListData = () => {
  return todoListData.value;
}
</script>