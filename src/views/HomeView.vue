<template>
  <div class="home">

  </div>
</template>

<script>
//:
export default {
  name: "HomeView",

  data() {
    return {
      textAnimationEffects: [
        { id: 1, type: "Fade-In", description: "This effect gradually fades in the text from transparent to opaque" },
        { id: 2, type: "Rotating Text:", description: "This animation rotates the text around the center of the element." },
        { id: 3, type: "Typewriter", description: "The text appears as if it is being typed on a typewriter, one character at a time." },
        { id: 4, type: "Bouncing Text", description: " This animation makes the text bounce up and down." },
        { id: 5, type: "Glitch", description: "The text flickers and distorts as if there is an interference in the display." },
        { id: 6, type: "Pulse", description: "The text fades in and out, as if it is pulsating." },
        { id: 7, type: "Rainbow", description: "The text changes color in a rainbow pattern." },
        { id: 8, type: "Scale-Up", description: "The text starts off small and gradually scales up to its final size." },
        { id: 9, type: "Spin", description: "The text spins around its center point." },
        { id: 10, type: "Zoom-In", description: "The text zooms in from the center of the screen to its final position." },
        { id: 11, type: "Wavy Text", description: "This animation uses keyframes to move the text back and forth in a wavy pattern" },
      ], 
    };
  },
  components: {},
};
</script>
