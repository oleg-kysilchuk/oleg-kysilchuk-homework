<template>
    <div class="field" v-on:click="showOptions">
        <div class="container" ref="cont">
            <button v-on:click.prevent="mouseBtn" v-on:contextmenu.prevent="mouseBtn" type="button">What button you clicked?</button>
            <button v-on:click="currentTime" type="button">What time is it?</button>
            <p ref="mesg" class="message">{{msg}}</p>
            <a href="/">TASK 1</a>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            msg: "",
            time: new Date()
        }
    },

    methods: {

        showOptions() {
            this.$refs.cont.style.display = "block"
        },

        mouseBtn() {  
            this.msg = "";

            if(event.which === 1) {
                this.msg = "You clicked LMB!"
            }
            
            if(event.which === 3) {
                this.msg = 'You clicked RMB!';
            }
        },

    currentTime() {
        this.msg = this.time;
    }

    }
}
</script>

<style scoped>

    .field {
        width: 100%;
        height: 100%;
    }

    .container {
        padding-top: 20px;
        margin: 10% auto;
        width: 350px;
        height: 175px;
        outline: 2px solid black;
        text-align: center;
        font-size: 20px;
        background-color: whitesmoke;
        display: none;
    }

    button {
        background: linear-gradient(135deg, #fefcea 0%,#f1da36 100%);
        border-radius: 5px;
        outline: none;
        display: block;
        margin: 0 auto;
        margin-bottom: 10px;
        width: 170px;
    }

    .message {
        border: 1px solid silver;
        border-radius: 25px;
        width: 345px;
        height: 25px;
        margin: 0 auto;
        margin-bottom: 25px;
    }

</style>