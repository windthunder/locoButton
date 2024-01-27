import './style.sass'

// 當點擊.sound時 撥放 data-sound的音檔
document.querySelectorAll('.sound').forEach((el) => {
  el.addEventListener('click', () => {
    const sound = el.getAttribute('data-sound') as string
    const audio = new Audio('/public/mp3/' + sound)
    audio.play()
  })
})