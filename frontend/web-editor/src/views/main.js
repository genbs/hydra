const html = require('choo/html')

module.exports = function mainView (state, emit) {
    return html`
    <body>
    <div id="hydra-ui">
  
    <canvas id="hydra-canvas">
    </canvas>
    <canvas id="audio-canvas">
    </canvas>
  </div>
  <div id="info-container" class="">
    <div id="modal">
      <div id="modal-header">
        <div><!--<i class="fas fa-bars icon"></i>--></div>
        <div>
          <i id ="run-icon" class="fas fa-play-circle icon" title="Run all code (ctrl+shift+enter)" aria-hidden="true"></i>
          <i id="share-icon" title="upload to gallery" class="fas fa-upload icon" aria-hidden="true"></i>
          <i id="clear-icon" title="clear all" class="fa fa-trash icon" aria-hidden="true"></i>
          <i id="shuffle-icon" title="show random sketch" class="fas fa-random icon" aria-hidden="true"></i>
          <i id="mutator-icon" title="make random change" class="fas fa-dice icon" aria-hidden="true"></i>
          <i id="close-icon" class="fas fa-question-circle icon" aria-hidden="true"></i>
  
        </div>
      </div>
      <div id="modal-body">
        <div id="modal-content">
          <h1> hydra</h1>
          <h3> live coding networked visuals </h3>
            <br> ///////////////////////////////////////////////////////////<br>
            <h4> Hydra is a platform for live coding visuals, in which each connected browser window can be used as a node of a modular and distributed video synthesizer.</h4>
          <h4> To get started: <ol>
              <li>Close this window </li>
                <li>Change some numbers </li>
                <li>Type Ctrl + Shift + Enter </li>
              </ol>
          </h4>
  
          <p> ///////////////////////////////////////////////////////////<br><br><br>Built using WebRTC (peer-to-peer web streaming) and WebGL, hydra allows each connected browser/device/person to output a video signal or stream, and receive and modify streams from other browsers/devices/people. The API is inspired by analog modular synthesis, in which multiple visual sources (oscillators, cameras, application windows, other connected windows) can be transformed, modulated, and composited via combining sequences of functions. </p>
          <p>Features: <ul>
          <li>Written in javascript and compatible with other javascript libraries</li>
          <li>Available as a platform as well as a set of standalone modules </li>
          <li>Cross-platform and requires no installation (runs in the browser)</li>
          <li>Also available as a package for live coding from within atom text editor</li>
          <li>Experimental and forever evolving !! </li>
          </ul>
  
            <p class="align-right"> Created by <a class="olivia" href="https://twitter.com/_ojack_" target="_blank">olivia.</a> </p>
          <p> For more information and instructions, see:
            <a href="https://github.com/ojack/hydra#Getting-Started" target="_blank">the documentation on github</a>,
            <a href="https://ojack.xyz/hydra-functions/" target="_blank">a list of hydra functions</a>,
            <!-- <a href="https://github.com/ojack/hydra/blob/master/docs/funcs.md" target="_blank">documentation</a>, -->
            <a href="https://twitter.com/hydra_patterns" target="_blank">a gallery of user-generated sketches</a>,
            <a href="http://pixeljam.glitch.me/" target="_blank">PIXELJAM collaborative editor</a>,
            <a href="https://hydra-book.naotohieda.com/#/" target="_blank">Hydra Book</a>, and more <a href="https://github.com/ojack/hydra/blob/master/examples/README.md">tutorials and examples.</a></p>
            <p>There is also an active <a href="https://discord.gg/ZQjfHkNHXC" target="_blank">Discord server</a> and <a href="https://www.facebook.com/groups/1084288351771117/" target="_blank">facebook group</a> for hydra users+contributors.</p>
  
  
  
          <p> If you enjoy using Hydra, please consider  <a href="https://opencollective.com/hydra-synth" target="_blank">supporting continued development ${'<3 <3'} </a></p>
        </div>
      </div>
    </div>
  </div>
  </body>
 `
  
    function onclick () {
      emit('increment', 1)
    }
  }