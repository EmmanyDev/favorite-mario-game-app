<template>
    <div class="game">
        <div class="heading">
            <h3>{{ game.name }}</h3>
        </div>
        <div class="img">
            <img v-bind:src="game.img"/>
        </div>
        <div class="details">
            <p><strong>Description: </strong>{{ game.desc }}</p>
            <p><strong>Release Date: </strong>{{ game.rel_date }}</p>
            <p><strong>Platform(s): </strong>{{ game.platforms }}</p>
        </div>
        <div class="watch-trailer">
            <a v-bind:href="game.trailer" target="_blank">Watch Trailer</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "GameBox",
        props: {
            game: Object
        }
    }
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Solway:wght@300;400;500&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
    .game {
        border: none;
        border-radius: 20px;
        margin: 10px 20px;
        box-shadow: 0px 1px 4px -1px rgba(0,0,0,0.75);
        background-color: #fff8d2;
    }

    .heading {
        /* border: 1px solid; */
        font-family: 'Solway', serif;
        padding: 10px 0;
        /* grid-column: 1 / 3;
        display: grid; */
    }
    .heading h3 {
        /* border: 1px solid; */
        text-align: center;
        font-size: 25px;
        align-self: flex-end;
        padding: 10px 0;
    }

    img {
        width: 350px;
        justify-self: center;
        border-radius: 10px;
    }
    .img {
        display: grid;
    }

    .details {
        padding: 15px;
        line-height: 1.5em;
        font-family: 'Solway', serif;
    }

    .details p {
        /* border: 1px solid; */
        font-size: 18px;
        align-self: start;
        padding: 5px 15px;
    }

    .details p strong {
        display: block;
        font-weight: 500;
        font-size: 20px;
        letter-spacing: 1px;
        line-height: 2em;
    }

    .watch-trailer {
        border: none;
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
        width: 100%;
        height: 100%;
        grid-column-start: 1;
        grid-column-end: 3;
        justify-self: center;
        align-self: center;
        display: grid;
        background-color: #ffffff;
        z-index: 22;
    }

    .watch-trailer a {
        border: none;
        border-radius: 15px;
        justify-self: center;
        align-self: center;
        text-decoration: none;
        text-align: center;
        font-size: 15px;
        font-family: 'Press Start 2P', cursive;
        color: #f4f4f4;
        background-color: #EE6352;
        padding: 20px 45px;
        margin: 20px 0;
        width: 65%;
        transition: 0.2s ease-in-out;
    }

    .watch-trailer a:hover {
        color: #EE6352;
        background-color: #e2e2e2;
    }

    /* ********************** Max width 1000px ********************** */
    @media screen and (max-width: 1000px) {
        .game {
            margin: 20px 10px;
        }
        .heading h3 {
            font-size: 23px;
        }

        img {
            width: 300px;
        }
    }

    /* ********************** Max width 750px ********************** */
    @media screen and (max-width: 750px) {
        .game {
            margin: 20px 1px; 
        }
        .heading h3 {
            font-size: 30px;
        }

        .watch-trailer a {
            width: 55%;
            text-align: center;
        }
    }

    /* ********************** Max width 500px ********************** */
    @media screen and (max-width: 500px) {
        .heading h3 {
            font-size: 25px;
        }

        img {
            width: 50%;
        }

        .details p {
            font-size: 15px;
        }

        .details p strong {
            font-size: 17px;
        }

        .watch-trailer a {
            font-size: 10px;
            padding: 10px 40px;
            border-radius: 10px;
        }
    }
</style>