<script lang="ts">
  import Card from '../components/Card.vue';

  export default {
    components: {
      Card
    }
  }

</script>

<template>

  <div class="container container-main-text">
    <h1>This is an <u>about page</u></h1>
  </div>

  <div class="main-container">
    <div class="img-container">
      <img src="../assets/art.svg" width="200" alt="Quadro com pequena árvore">
      <p>Text here</p>
    </div>
    <div class="text-container">
      <h2>Testing</h2>
      <p>A simple text about something interesting!</p>
    </div>
  </div>

  <div class="container text-center">
    <h1>Interesting options</h1>
    <p>and a subtitle more interesting</p>
    <div class="container-flex space-around wrap">
      <div class="container-flex col">
        <img src="../assets/art.svg" width="200" alt="Quadro com pequena árvore">
        <span>text here</span>
      </div>
      <div class="container-flex col">
        <img src="../assets/art.svg" width="200" alt="Quadro com pequena árvore">
        <span>text here</span>
      </div>
      <div class="container-flex col justify-center">
        <img src="../assets/art.svg" width="200" alt="Quadro com pequena árvore">
        <span>text here</span>
      </div>
    </div>
  </div>

  <div class="container text-center">
    <h1>Other section</h1>
    <div class="container-flex space-around wrap">
      <Card title="Card One" text="a subtitle" />
      <Card title="Card Two" text="a subtitle" />
      <Card title="Card Three" text="a subtitle" />

      <Card title="Card For" text="a subtitle" />
      <Card title="Card Five" text="a subtitle" />
      <Card title="Card Six" text="a subtitle" />

    </div>
  </div>
  <h1 class="text-center">More one section</h1>

   <div class="main-container">
     <div class="text-container">
       <h2>Testing</h2>
       <p>A simple text about something interesting!</p>
     </div>
    <div class="img-container">
      <img src="../assets/art.svg" width="200" alt="Quadro com pequena árvore">
      <p>Text here</p>
    </div>
  </div>

</template>

<style scoped>
.container-main-text {
      font-weight: 700;
      letter-spacing: 5px;
      display: flex;
      justify-content: center;
    
      animation: floating 5s infinite;
  }

  /* .container-main-text h1 {
    transition: 1s;
  }

  .container-main-text h1:hover {
    letter-spacing: 10px;
  } */

  .container {
      height: 80vh;
  }

  .container-flex {
    display: flex;
    margin: 50px 0;
  }

  .row {
    flex-direction: row;
  }

  .col {
    flex-direction: column;
  }

  .wrap {
    flex-wrap: wrap;
  }

  .justify-center {
    align-items: center;
  }

  .space-around {
    justify-content: space-around;
  }

  .main-container {
    display: flex;
    height: 80vh;
    width: 55rem;
    justify-content: space-around;
    align-items: center;

    padding: 0 0; 
  }

  .img-container {
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    padding: 0 100px;
  }

  .text-container {
    flex-grow: 1;

    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;

  }
  .text-center {
    text-align: center;
  }

  @media (max-width: 1024px) {

    .container-main-text {
      text-align: center;
    }
    .main-container {
      flex-direction: column;
      margin: 0 auto;
      height: 60vh;;
      width: 80%;
    }

    .img-container {
      padding: 0;
    }

    .text-container {
      padding-top: 2rem;
      align-items: center;
      text-align: center;
    }
  }

  @keyframes floating {
    0% {
      letter-spacing: 5px;
    }
    50% {
      letter-spacing: 10px;
    }
    100% {
      letter-spacing: 5px;
    }
  }

</style>
