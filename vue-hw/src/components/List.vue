<template>
    <div class="list">
        <ul >
            <li v-for="frt in fruits" :key="frt.name">{{frt.name}} costs: {{frt.cost}}$</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'List',
    data() {
       return {
           fruits : [
               {
                   name: "orange",
                   cost: 5
               },
               {
                   name: "orange",
                   cost: 7

               },
               {
                   name: "banana",
                   cost: 8
               }
           ]
       }
    }
}
</script>

<style lang="scss" scoped>
    li {
        color: red;
    }
</style>