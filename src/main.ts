import './style.sass'

function getMp3Url(fileName: string){
  const imgUrl = new URL(`../public/mp3/${fileName}`, import.meta.url).href
  return imgUrl
}

// 當點擊.sound時 撥放 data-sound的音檔
document.querySelectorAll('.sound').forEach((el) => {
  el.addEventListener('click', () => {
    const sound = el.getAttribute('data-sound') as string
    const audio = new Audio(getMp3Url(sound))
    audio.play()
  })
})