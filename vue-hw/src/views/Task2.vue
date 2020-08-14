<template>
    <div class="container">
        <ol>
            <li class="item" v-for="lnk in links" :key="lnk"><a v-bind:href="lnk.link" v-bind:title="lnk.title" target="_blank">{{lnk.name}}</a></li>
        </ol>
        <a href="/">TASK 1</a>
    </div>
</template>

<script>
export default {
    data() {
        return {
            links: [
                {
                    name: 'facebook',
                    title: 'facebook',
                    link: 'https://www.facebook.com/'
                },

                {
                    name: 'twitter',
                    title: 'twitter',
                    link: 'https://www.twitter.com/'
                },

                {
                    name: 'beetroot',
                    title: 'beetroot academy',
                    link: 'https://beetroot.academy/'
                },

                {
                    name: 'dribbble',
                    title: 'dribbble',
                    link: 'https://dribbble.com/'
                }
            ]
        }
    }

}
</script>

<style scoped>

    .container {
        margin: 10% auto 0;
        width: 200px;
        height: 200px;
    }

    ol {
        border: 2px solid white;
        border-radius: 15px;
        padding: 10% 20%;
        margin-bottom: 20px;
    }

    li {
        margin-bottom: 10px;
    }

    a {
        color: yellow;
        text-transform: uppercase;
        text-decoration: none;
        letter-spacing: 0.7px;
    }

</style>