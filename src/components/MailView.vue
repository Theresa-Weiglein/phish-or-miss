<script setup>
    import { ref } from 'vue'

    defineProps(['mail', 'onAnswer', 'result'])
</script>

<template>
    <div class="mail">
        <h2> {{ mail.subject }} </h2>
        <p> {{ mail.body }} </p>

        <div v-if="result === null">
            <button @click="onAnswer(true)"> Phishing </button>
            <button @click="onAnswer(false)"> Safe </button>
        </div>

        <div v-else>
            <p v-if="result === 'correct'" class="correct">✅ Richtig!</p>
            <p v-else class="wrong"> Falsch!</p>
            <p class="explanation"> <strong>Erklärung:</strong> {{ mail.explanation }}</p>
        </div>
    </div>
</template>