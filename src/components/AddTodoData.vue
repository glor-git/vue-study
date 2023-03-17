<template>
  <input type="text" placeholder="To-do" :value="todoData" @change="localTodoDataChange" />
  <CustomButton :clickEvent="addTodo">추가</CustomButton>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import type { Ref } from "vue";
import CustomButton from "@/components/CustomButton.vue";
import type { ISetTodoListData } from "@/types/dataTypes";

interface Props {
  setTodoListData: ({ data, type, index }: ISetTodoListData) => void;
}

const { setTodoListData } = defineProps<Props>()
const todoData: Ref<string> = ref('');
const addTodo = () => {
  setTodoListData({ data: todoData.value, type: 'add' });
  todoData.value = '';
}
const localTodoDataChange = ($event: Event) => {
  todoData.value = ($event.target as HTMLInputElement).value;
}
</script>