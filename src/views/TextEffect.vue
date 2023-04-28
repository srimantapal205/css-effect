<template>
  <h1>Text Effect</h1>
<BouncingText/>
<FadeIn/>
<GlitchText/>
<RainbowText/>
<ScalingText/>
<RotatingText/>
<TypingText/>
<WavyText/>
<ShakeText/>
</template>

<script>
import BouncingText from "@/components/TextEffect/BouncingText.vue";
import FadeIn from "@/components/TextEffect/Fade-In.vue";
import GlitchText from "@/components/TextEffect/Glitch-Text.vue";
import RainbowText from "@/components/TextEffect/Rainbow-Text.vue";
import RotatingText from "@/components/TextEffect/RotatingText.vue";
import ScalingText from "@/components/TextEffect/ScalingText.vue";
import TypingText from "@/components/TextEffect/TypingText.vue";
import WavyText from "@/components/TextEffect/WavyText.vue";
import ShakeText from '@/components/TextEffect/ShakeText.vue';

export default {
  name: "TextEffect",
  components: {
    BouncingText,
    FadeIn,
    GlitchText,
    RainbowText,
    ScalingText,
    RotatingText,
    TypingText,
    WavyText,
    ShakeText
  },
};
</script>

<style lang="scss" svcomcoped></style>
