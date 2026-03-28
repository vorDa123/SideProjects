<script setup lang="ts"></script>
<template>
  <div class="p-3 containerHeight containerBorder">
    <p class="subtitle">Countdown</p>
    <div class="d-flex gapContent align-items-center justify-content-center">
      <div class="countdownNumber">
        <div class="d-flex flex-column justify-content-center align-items-center">
          <span class="countdownNumberFontSize">120</span>
          <span class="bold">D</span>
        </div>
      </div>
      <span class="countdownNumberDelimiter">:</span>
      <div class="countdownNumber">
        <div class="d-flex flex-column justify-content-center align-items-center">
          <span class="countdownNumberFontSize">10</span>
          <span class="bold">H</span>
        </div>
      </div>
      <span class="countdownNumberDelimiter">:</span>
      <div class="countdownNumber">
        <div class="d-flex flex-column justify-content-center align-items-center">
          <span class="countdownNumberFontSize">14</span>
          <span class="bold">M</span>
        </div>
      </div>
    </div>
  </div>
</template>
