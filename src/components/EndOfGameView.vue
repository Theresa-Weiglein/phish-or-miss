// end screen of the game with possibility to start the game

<script setup>
defineProps(['score', 'onRestart'])

const showScoreFeedback = (score) => 
{
  if (score >= 50) {
    return "Du bist schon ziemlich gut informiert, was Phishing-Mails angeht!"
  } else {
    return "Sei vorsichtig! Um dich zu schützen, könntest du dich noch etwas besser über Phishing informieren."
  }
}

</script>

<template>
  <div class="end-screen">
    <h2> Spiel beendet!</h2>
    <p>Dein Endstand: <strong>{{ score }}</strong> Punkte</p>
    <p> {{ showScoreFeedback(score) }} </p> 
    <button @click="onRestart"> Nochmal spielen </button>
  </div>
</template>