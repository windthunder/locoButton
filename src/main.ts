import './style.sass'
import GUI from 'lil-gui';

interface AudioButtonElement extends HTMLElement {
  audio: HTMLAudioElement;
}

const gui = new GUI();

const setting = {
	volume: 1,
};

gui.add(setting, 'volume', 0, 1, 0.01);

function getMp3Url(fileName: string) : string {
  return new URL(`../public/mp3/${fileName}`, import.meta.url).href
}

// perload all mp3
let total_count = document.querySelectorAll('.sound').length
let loaded_count = 0
const loading = document.getElementById('loading') as HTMLDivElement

document.querySelectorAll('.sound').forEach((el) => {
  let el2 = el as AudioButtonElement
  const sound = el2.dataset.sound as string
  const audio = new Audio(getMp3Url(sound))
  audio.addEventListener('canplaythrough', () => {
    loaded_count++
    loading.innerText = `Loading ${loaded_count}/${total_count}`
  })
  audio.preload = 'auto'
  el2.audio = audio
})

// 當點擊.sound時 撥放 data-sound的音檔
document.querySelectorAll('.sound').forEach((el) => {
  let el2 = el as AudioButtonElement
  el2.addEventListener('click', () => {
    let audio = el2.audio
    audio.volume = setting.volume
    audio.play()
  })
})