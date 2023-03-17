<template>
<ul>
  <li v-for="({ todoData, finished }, index) in getTodoListData()">
    <span :class="{finished}">{{ todoData }}</span>
    <CustomButton :clickEvent="() => deleteTodo(index)">삭제</CustomButton>
    <CustomButton :clickEvent="() => finishedTodo(index)">{{ finished ? '열기' : '닫기' }}</CustomButton>
  </li>
</ul>
</template>

<script lang="ts" setup>
import CustomButton from "@/components/CustomButton.vue";
import type { ISetTodoListData, ITodoListData } from "@/types/dataTypes";

interface Props {
  getTodoListData: () => ITodoListData[];
  setTodoListData: ({ data, type, index }: ISetTodoListData) => void;
}
const { getTodoListData, setTodoListData } = defineProps<Props>();

const deleteTodo = (index: number) => {
  setTodoListData({ type: 'delete', index });
}

const finishedTodo = (index: number) => {
  setTodoListData({ type: 'edit', index });
}
</script>

<style scoped>
.finished {
  text-decoration-line: line-through;
}
</style>