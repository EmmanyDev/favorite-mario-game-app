<template>
    <div class="game-container">
        <div v-for="game in games" :key="game.id">
            <GameCard :game="game"/>
        </div>
    </div>
</template>

<script>
    import GameCard from './GameBox.vue';

    export default {
        name: "GameContainer",
        components: {
            GameCard
        },
        props: {
            games: Array
        }
    }
</script>

<style scoped>
    .game-container {
        border: none;
        border-radius: 50px;
        margin: 100px 0;
        padding: 50px 15px;
        display: grid;
        gap: 30px 30px;
        grid-template: repeat(3, auto) / repeat(2, 1fr);
        align-items: flex-end; 
        background-color: rgb(177, 215, 178);
    }

    /* ********************** Max width 1000px ********************** */
    @media screen and (max-width: 1000px) {
        .game-container {
            gap: 0;
        }
    }

    /* ********************** Max width 800px ********************** */
    @media screen and (max-width: 800px) {
        .game-container {
            grid-template-columns: 1fr;
            padding: 50px 20px;
        }
    }

    /* ********************** Max width 500px ********************** */
    @media screen and (max-width: 500px) {
        .game-container {
            padding: 30px 10px;
        }
    }
</style>