// start screen to explain the game

<script setup>
defineProps(['onStart'])
</script>

<template>
  <div class="start-screen">
    <h2>📬 Willkommen bei *Phish or Miss*</h2>
    <p>
      In diesem Spiel bekommst du E-Mails angezeigt, wie sie jeder von uns schon im digitalen Postkasten hatte. Deine Aufgabe ist es, zu entscheiden:
      <br><strong>Handelt es sich um eine Phishing-Mail oder eine echte Nachricht?</strong>
    </p>
    <p>
      Für jede richtige Antwort bekommst du 10 Punkte. Maximal gibt es 100 Punkte zu erreichen.
      Schaffst du es, den Überblick zu behalten? 
    </p>
    <button @click="onStart">Spiel starten</button>
  </div>
</template>