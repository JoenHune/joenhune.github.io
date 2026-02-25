import DefaultTheme from 'vitepress/theme'
import { onMounted, watch } from 'vue'
import { useRoute } from 'vitepress'
import './custom.css'

function initPhotoGlow() {
  const photo = document.querySelector('.hero-photo') as HTMLElement
  if (!photo) return
  photo.addEventListener('mousemove', (e) => {
    const rect = photo.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    photo.style.setProperty('--mouse-x', `${x}%`)
    photo.style.setProperty('--mouse-y', `${y}%`)
  })
}

export default {
  extends: DefaultTheme,
  setup() {
    const route = useRoute()
    onMounted(() => initPhotoGlow())
    watch(() => route.path, () => {
      setTimeout(initPhotoGlow, 100)
    })
  },
}
