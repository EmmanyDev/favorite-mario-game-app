<template>
    <div class="header">
        <h1>Favorite Super Mario Video Games</h1>
        <p>Growing up, I loved playing Super Mario games with my brothers. Here are a few games that were all-time favorites
        to play growing up. Enjoy!</p>
    </div>
</template>

<script>
    export default {
        name: "HeaderComponent"
    }
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Solway:wght@300;400&display=swap');
    .header {
        border: none;
        border-bottom-left-radius: 15px;
        border-bottom-right-radius: 25px;
        width: 70%;
        margin: 0 auto;
        padding: 10px 30px;
        text-align: center;
        color: #282828;
        background-color: #fbd000;
    }

    h1 {
        font-size: 40px;
        font-family: 'Press Start 2P', cursive;
        line-height: 1.5em;
    }

    p {
        font-size: 23px;
        font-family: 'Solway', serif;
        letter-spacing: 2px;
        line-height: 1.9em;;
    }

    /* ********************** Max width 1000px ********************** */
    @media screen and (max-width: 1000px) {
        h1 {
            font-size: 35px;
        }

        p {
            font-size: 21px;
        }
    }

    /* ********************** Max width 500px ********************** */
    @media screen and (max-width: 500px) {
        h1 {
            font-size: 22px;
        }

        p {
            font-size: 17px;
        }
    }
</style>