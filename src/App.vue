/// main game script which shows the game loop
/// from start view over game to end of game view 
/// handles player score and events based on it

<script setup>
import { ref } from 'vue'
import MailView from './components/MailView.vue'
import StartView from './components/StartView.vue'
import EndOfGameView from './components/EndOfGameView.vue'
import { mails } from './assets/emails.js' 

const currentIndex = ref(0)
const currentMail = ref(mails[currentIndex.value])
const result = ref(null)
const score = ref(0)
const maxScore = 100

const gameStarted = ref(false)
const gameFinished = ref(false)


//compare clicked answer to mail bool
function checkAnswer(playerAnswer) 
{
  const correct = currentMail.value.isPhishing === playerAnswer
  result.value = correct ? 'correct' : 'wrong'

  if (correct) 
  {
    score.value += 10
  }
}

function showNextMail()
{
  currentIndex.value++
  // game ends if the maxScore or the end of mails is reached
  if (currentIndex.value >= mails.length || score.value >= maxScore)
  {
    gameFinished.value = true
    return
  }
  currentMail.value = mails[currentIndex.value]
  result.value = null
}

function startGame()
{
  gameStarted.value = true
}

// reset all values to start the game again without reloading
function restartGame() 
{
  currentIndex.value = 0
  currentMail.value = mails[0]
  score.value = 0
  result.value = null
  gameFinished.value = false
}

</script>

<template>
  <div class="container">
    <h1>Phish or Miss</h1>

    <!-- show start view first -->
    <StartView v-if="!gameStarted"
    :onStart="startGame"
    />

    <!-- show end of game view if the game has finished -->
    <EndOfGameView v-else-if="gameFinished"
      :score="score"
      :onRestart="restartGame"
    />

    <div v-else>
      <MailView
        :mail="currentMail"
        :onAnswer="checkAnswer"
        :result="result" 
      />

      <p> Score: {{ score }} </p>

      <!-- load and show next mail on click of next mail button-->
      <div v-if="result !== null">
        <button @click="showNextMail">Nächste Mail</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>