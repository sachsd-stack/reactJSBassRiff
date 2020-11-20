import './App.css';
import FIRSTNOTE from './sounds/firstNote.mp3';
import SECONDNOTE from './sounds/secondNotes.mp3';
import THIRDNOTE from './sounds/thirdNote.mp3';
import FOURTHNOTE from './sounds/fourthNote.mp3';
import FIFTHNOTE from './sounds/fifthNote.mp3';
import SIXTHNOTE from './sounds/sixthNote.mp3';
import SEVENTHNOTE from './sounds/seventhNote.mp3';
import EIGHTHNOTE from './sounds/eighthNote.mp3';
import BGAUDIO from './sounds/backgroundAudio.mp3';
import React, { Component } from 'react';


function removeTransition(e) {
  if(e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

class App extends Component {

  componentDidMount(){
    window.addEventListener('keydown', function (e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
    setTimeout(function(){
      key.classList.remove('playing')
    }, 150);
    })
  }
  
  render(){
    return (
      <div className="App">
        <div class="keys">
          <div data-key="65" class="key">
            <kbd>A</kbd>
            <span class="sound">First</span>
          </div>
          <div data-key="83" class="key">
            <kbd>S</kbd>
            <span class="sound">Second</span>
          </div>
          <div data-key="68" class="key">
            <kbd>D</kbd>
            <span class="sound">Third</span>
          </div>
          <div data-key="70" class="key">
            <kbd>F</kbd>
            <span class="sound">Fourth</span>
          </div>
        </div>

      <div class="keys">
        <div data-key="74" class="key">
          <kbd>J</kbd>
          <span class="sound">Fifth</span>
        </div>
        <div data-key="75" class="key">
          <kbd>K</kbd>
          <span class="sound">Sixth</span>
        </div>
        <div data-key="76" class="key">
          <kbd>L</kbd>
          <span class="sound">Seventh</span>
        </div>
        <div data-key="186" class="key" onClick="">
          <kbd>;</kbd>
          <span class="sound">Eighth</span>
        </div>
      </div>

      <audio data-key="65" src={FIRSTNOTE}></audio>
      <audio data-key="83" src={SECONDNOTE}></audio>
      <audio data-key="68" src={THIRDNOTE}></audio>
      <audio data-key="70" src={FOURTHNOTE}></audio>
      <audio data-key="74" src={FIFTHNOTE}></audio>
      <audio data-key="75" src={SIXTHNOTE}></audio>
      <audio data-key="76" src={SEVENTHNOTE}></audio>
      <audio data-key="186" src={EIGHTHNOTE}></audio>
    </div>
    );
  }
}

export default App;
