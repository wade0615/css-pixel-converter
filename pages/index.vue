<template>
  <!-- <Tutorial /> -->
  <div class="w-screen h-screen flex flex-wrap justify-center items-center">
    <h1 class="hidden">F2E 螢幕解析度轉換器</h1>
    <section class="w-3/4 sm:w-1/2">
      <h2>螢幕高度解析度</h2>
      <b-form-input class="mb-3" type="number"
        v-model="devicePixelHeight" placeholder="**** 像素"></b-form-input>

      <h2>螢幕寬度解析度</h2>
      <b-form-input class="mb-3" type="number"
        v-model="devicePixelWidth" placeholder="**** 像素"></b-form-input>

      <h2>屏幕像素密度</h2>
      <b-form-input class="mb-3" type="number"
        v-model="ppi" placeholder="ppi(dpi)"></b-form-input>

      <div class="mt-2">螢幕高度解析度: {{ devicePixelHeight }}</div>
      <div class="mt-2">螢幕寬度解析度: {{ devicePixelWidth }}</div>
      <div class="mt-2">ppi(dpi): {{ ppi }}</div>

      <h2 class="mt-5 mb-3">css 像素解析度</h2>
      <p>{{ cssPixelHeight }} x {{ cssPixelWidth }}</p>

    </section>
  </div>
</template>

<script>
export default {
  watch: {
    ppi(ppi) {
      if(ppi > 99) {
        console.log("ppi change");
        const pixelDensity = this.getPixelDensity(ppi);
        this.cssPixelHeight = this.devicePixelHeight / pixelDensity;
        this.cssPixelWidth = this.devicePixelWidth / pixelDensity;
      };
    }
  },
  data() {
    return {
      devicePixelHeight: '',
      devicepixelWidth: '',
      ppi: '',
      cssPixelHeight: '',
      cssPixelWidth: '',
    }
  },
  methods: {
    // 計算邏輯像素密度
    getPixelDensity(ppi){
      let pixelDensity = Math.round(ppi/160);
      return pixelDensity;
    },
  }
}
</script>
