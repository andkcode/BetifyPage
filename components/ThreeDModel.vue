<template>
  <div ref="container" class="three-container" />
</template>

<script setup>
import { onMounted, ref, onBeforeUnmount } from 'vue'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

const container = ref(null)
let model, camera, scene, renderer
let mouseX = 0
let mouseY = 0

function onMouseMove(event) {
  const { innerWidth: width, innerHeight: height } = window
  mouseX = (event.clientX / width - 0.5) * 2
  mouseY = (event.clientY / height - 0.5) * 2
}

function updateSizeAndCamera() {
  const width = container.value.clientWidth
  const height = container.value.clientHeight

  camera.aspect = width / height
  camera.updateProjectionMatrix()
  renderer.setSize(width, height)
  
  // Recalculate camera position if model is loaded
  if (model) {
    const box = new THREE.Box3().setFromObject(model)
    const size = box.getSize(new THREE.Vector3())
    const maxDim = Math.max(size.x, size.y, size.z)
    const scale = model.scale.x // Get current scale
    const scaledMaxDim = maxDim * scale
    
    const aspect = width / height
    const fov = camera.fov * (Math.PI / 180)
    
    let cameraDistance
    if (aspect > 1) {
      cameraDistance = (scaledMaxDim / 2) / Math.tan(fov / 2)
    } else {
      cameraDistance = (scaledMaxDim / 2) / (Math.tan(fov / 2) * aspect)
    }
    
    cameraDistance *= 2.0
    
    camera.position.set(0, 0, cameraDistance)
    camera.near = cameraDistance / 100
    camera.far = cameraDistance * 100
    camera.updateProjectionMatrix()
  }
}

onMounted(() => {
  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(60, 1, 1, 300)
  camera.position.z = 20

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setPixelRatio(window.devicePixelRatio)
  container.value.appendChild(renderer.domElement)

  updateSizeAndCamera()

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.6)
  const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
  directionalLight.position.set(5, 5, 5)
  scene.add(ambientLight, directionalLight)

  const loader = new GLTFLoader()
  loader.load('/models/hammer.glb', (gltf) => {
    model = gltf.scene
    scene.add(model)

    // Get bounding box and center the model
    const box = new THREE.Box3().setFromObject(model)
    const center = box.getCenter(new THREE.Vector3())
    const size = box.getSize(new THREE.Vector3())
    
    // Center the model at origin
    model.position.sub(center)

    // Scale model to fit nicely in view
    const maxDim = Math.max(size.x, size.y, size.z)
    const scale = 8 / maxDim // Increased scale for better visibility
    model.scale.setScalar(scale)

    // Position camera to perfectly frame the scaled model
    const containerWidth = container.value.clientWidth
    const containerHeight = container.value.clientHeight
    const aspect = containerWidth / containerHeight
    
    // Calculate optimal camera distance based on container aspect ratio
    const fov = camera.fov * (Math.PI / 180)
    const scaledMaxDim = maxDim * scale
    
    let cameraDistance
    if (aspect > 1) {
      // Wide container - fit to height
      cameraDistance = (scaledMaxDim / 2) / Math.tan(fov / 2)
    } else {
      // Tall container - fit to width accounting for aspect ratio
      cameraDistance = (scaledMaxDim / 2) / (Math.tan(fov / 2) * aspect)
    }
    
    // Add some padding - increase this value to move camera further back
    cameraDistance *= 1.5
    
    camera.position.set(0, 0, cameraDistance)
    camera.lookAt(0, 0, 0)

    // Update camera settings
    camera.near = cameraDistance / 100
    camera.far = cameraDistance * 100
    camera.updateProjectionMatrix()

    renderer.render(scene, camera)
  }, undefined, (error) => {
    console.error('Error loading model:', error)
  })

  const animate = () => {
    requestAnimationFrame(animate)
    if (model) {
      model.rotation.y += (mouseX - model.rotation.y) * 0.08
      model.rotation.x += (mouseY - model.rotation.x) * 0.08
    }
    renderer.render(scene, camera)
  }

  animate()

  window.addEventListener('mousemove', onMouseMove)
  window.addEventListener('resize', updateSizeAndCamera)
})

onBeforeUnmount(() => {
  window.removeEventListener('mousemove', onMouseMove)
  window.removeEventListener('resize', updateSizeAndCamera)
  
  // Clean up Three.js resources
  if (renderer) {
    renderer.dispose()
  }
  if (scene) {
    scene.clear()
  }
})
</script>

<style scoped>
.three-container {
  width: 100%;
  aspect-ratio: 1;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

canvas {
  display: block;
  width: 100%;
  height: 100%;
}
</style>