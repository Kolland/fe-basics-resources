<template>
  <button class="my-button">***{{ text }}***</button>
</template>

<script>
export default {
  name: 'MyButton',
  props: {
      text: String
  }
}
</script>

<style>
    .my-button {
        background-color: black;
        color: white;
    }
</style>
