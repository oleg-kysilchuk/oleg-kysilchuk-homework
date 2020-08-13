<template>
    <form class="color" v-on:submit.prevent="findColor">
        <p class="text"> Enter some color from rainbow &#8595;</p>
        <input v-model="clr" type="text" placeholder="Your color..." required>
        <button type="submit">Change</button>
        <p v-if="colors" class="result">Your color: <span v-bind:style="{ color: yourClr }">{{ yourClr }}</span></p>
        <p v-else class="result">Error!</p>
        <a href="/task2">TASK 2</a>
    </form>
</template>

<script>
export default {
    data() {
        return {
            clr: '',

            yourClr: '',

            colors: [
                "red",
                "orange",
                "yellow",
                "green",
                "blue",
                "indigo",
                "violet"
            ]
        }
    },

    methods: {

        findColor() {
            this.colors.map((item) => {
                if(item === this.clr){
                    this.yourClr = item;
                }
            })
        }
    }
}
</script>

<style scoped>

    .color {
        padding-top: 20px;
        margin: 10% auto;
        width: 350px;
        height: 180px;
        outline: 2px solid black;
        text-align: center;
        font-size: 20px;
        background-color: wheat;
    }

    .text {
        margin: 0 auto;
        text-transform: uppercase;
        margin-bottom: 10px;
    }

    input {
        border-radius: 5px;
        border-color: white;
        margin-right: 5px;
        text-transform: lowercase;
    }

    input:focus {
        outline: none;
    }

    button {
        background: linear-gradient(135deg, #f2f6f8 0%,#d8e1e7 50%,#b5c6d0 51%,#e0eff9 100%);
        text-transform: uppercase;
        border-radius: 5px;
        outline: none;
        border-color: white;
    }

    .result {
        text-align: left;
        margin: 10px 0 10px 45px;
    }

    span {
        text-transform: uppercase;
        font-style: italic;
    }

</style>