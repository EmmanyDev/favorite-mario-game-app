<template>
  <div class="container">
    <HeaderComponent />
    <GameComponent :games="games" />
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from './components/Header/Header.vue';
import GameComponent from './components/GamesContainer/GamesContainer.vue';
import FooterComponent from './components/Footer/Footer.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    GameComponent,
    FooterComponent
  },

  data() {
    return {
      games: []
    }
  },

  methods: {
    // Promise that grabs data from server 
    fetchGames: async () => {
      const res = await fetch("/api"); // Fetch data from this URL 
      const data = await res.json(); // Grabs the json version of the data
      console.log("Data: ", data["api"]);
      return data["api"];
    }
  },
  async created() {
    this.games = await this.fetchGames();
  }
}
</script>

<style>
  body {
    box-sizing: border-box;
    margin: 0;
  }

  .container {
    background-color: #94ddff;
  }
</style>
