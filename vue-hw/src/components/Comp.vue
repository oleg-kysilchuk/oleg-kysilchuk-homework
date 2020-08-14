<template>
    <div class="container">
        <input ref="inp" type="number" v-model="num" @blur="getNum">
        <p ref="res" class="result">{{curNum}}</p>
        <button type="button" @click="incNum">increase</button>
        <button type="button" @click="decNum">decrease</button>
    </div>    
</template>

<script>
export default {
    data() {
        return {
            num: null,
            curNum: null,
        }
    },

    methods: {
        getNum() {
            this.curNum = this.num;
            this.$refs.res.innerText = this.curNum;
            this.num = '';
        },

        incNum() {
            this.curNum++;
            this.$refs.res.innerText = this.curNum;
        },

        decNum() {
            this.curNum--;
            this.$refs.res.innerText = this.curNum;
        }
    }
    
}
</script>

<style scoped>
    .container {
        margin: 10% auto 0;
        width: 200px;
        height: 150px;
        border: 2px solid white;
        border-radius: 15px;
        padding: 2% 1%;
    }

    input {
        width: 100%;
        outline: none;
        margin: 5px 0 10px;
        border-radius: 10px;
        text-align: center;
    }

    .result {
        margin: 0 auto;
        width: 100%;
        background-color: #ffffff;
        color: black;
        height: 16px;
        margin-bottom: 10px;
        border-radius: 10px;
        text-align: center;
    }

    button {
        display: block;
        width: 100%;
        margin-bottom: 5px;
        background-color: blue;
        color: white;
        text-transform: uppercase;
        border-radius: 10px;
        outline: none;
    }

    button:last-of-type {
        background-color: red;
    }

</style>