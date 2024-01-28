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
document.querySelectorAll('.sound').forEach((el) => {
  const sound = (<AudioButtonElement>el).dataset.sound as string
  (<AudioButtonElement>el).audio = new Audio(getMp3Url(sound))
})

// 當點擊.sound時 撥放 data-sound的音檔
document.querySelectorAll('.sound').forEach((el) => {
  (<AudioButtonElement>el).addEventListener('click', () => {
    let audio = (<AudioButtonElement>el).audio
    audio.volume = setting.volume
    audio.play()
  })
})