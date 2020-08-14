<template>
    <div class="todo" v-bind:class="{ editMode: isEditMode, 'completed-tasks': todo.status }">
        <input type="checkbox" v-model="todo.status">
        <label>{{ todo.text }}</label>
        <input type="text" v-model="todo.text" @blur="onEdit">
        <button class="edit" @click="onEdit">Edit</button>
        <button class="delete" @click="onDelete">Delete</button>
    </div>
</template>

<script>
export default {
    props: {
        todo: {
            type: Object,
            required: true
        }
    },

    data() {
        return {
            isEditMode: false
        }
    },

    methods: {

        onDelete() {
            this.$emit('delete', this.todo.id);
        },

        onEdit() {
            this.isEditMode = !this.isEditMode;
        }
    }
}
</script>