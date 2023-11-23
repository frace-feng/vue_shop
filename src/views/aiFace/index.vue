<template>
  <div class="container">
    <div class="image-container">
      <img class="image-area" src="imageInfo.url" alt="检测图像" ref="image"
      :style="{
          width: `${imageInfo.width}px`,
          height: `${imageInfo.height}px`
        }" />
      <div v-for="face in faces" :key="face.id" class="face-box"
        :style="{width:`${face.width}px`,height: `${face.height}px`,
          left: `${face.x}px`, top: `${face.y}px`}">
      </div>
    </div>
  </div>
</template>

<script>
import { queryFace } from './api.js'
export default {
  name: 'FaceImageApp',
  data () {
    return {
      imageInfo: {},
      faces: []
    }
  },
  created () {
    this.getFaceInfo()
  },
  methods: {
    getFaceInfo () {
      queryFace().then(res => {
        const { imageInfo, faceInfo } = res.data
        this.imageInfo = imageInfo
        this.faces = faceInfo
      })
    }
  }
}
</script>

<style>
.container {
  text-align: center;
}

.image-container {
  position: relative;
  margin-top: 20px;
}

.image-area{
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;

}
.face-box {
  position: absolute;
  box-sizing: border-box;
  border: 5px solid red;
  z-index: 10;
}
</style>
