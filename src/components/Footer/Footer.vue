<template>
    <div class="footer">
        <p>Developed by <a href="https://www.linkedin.com/in/emmanuel-amoh-a0a624152/" target="_blank">EmmanyDev_</a>Created on November 29th, 2022</p>
        <p>&copy; Copyright 2022; All Rights Reserved</p>
    </div>
</template>

<script>
    export default {
        name: "FooterComponent"
    }

</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Solway:wght@300;400;500&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
    .footer {
        border-top: 1px solid;
        display: grid;
        justify-content: center;
        text-align: center;
        padding: 10px 0;
        font-family: 'Solway', serif;
        background-color: #1c1c1c;
    }

    .footer p {
        color: #f4f4f4;
    }
    .footer p:first-child {
        font-size: 20px;
        line-height: 3.5em;
    }

    .footer p:last-child {
        font-size: 18px;
        font-weight: 500;
    }

    .footer p a {
        text-decoration: none;
        display: block;
        font-family: 'Press Start 2P', cursive;
        font-size: 40px;
        color: #f4f4f4;
        border: 5px solid #fff;
        border-radius: 10px;
        padding: 10px 30px;
        transition: 0.3s ease-in-out;
    }

    .footer p a:hover {
        color: #1c1c1c;
        background-color: #fbd000;
        border: 5px solid #fbd000;
        transform: scale(1.03);
    }

    /* ********************** Max width 500px ********************** */
    @media screen and (max-width: 500px) {
        .footer p:first-child {
            font-size: 17px;
        }

        .footer p:last-child {
            font-size: 15px;
        }

        .footer p a {
            font-size: 20px;
            border-radius: 10px; 
            padding: 2px 10px;
        }

        .footer p a:hover {
            color: #fbd000;
        }
    }
</style>