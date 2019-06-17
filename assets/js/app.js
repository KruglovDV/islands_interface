import css from "../css/app.css"
import "phoenix_html"
import {Socket} from "phoenix"
import Vue from 'vue';
import App from './components/App.vue';

window.Socket = Socket;

var socket = new Socket("/socket", {})
socket.connect();

window.new_channel = function new_channel(subtopic, screen_name) {
  return socket.channel("game:" + subtopic, {screen_name: screen_name});
}
window.join = function join(channel) {
  channel.join()
  .receive("ok", response => {
    console.log("Joined successfully!", response);
  })
  .receive("error", response => {
    console.log("Unable to join", response);
  })
}

// window.leave = function leave(channel) { channel.leave()
//                           .receive("ok", response => {
//                               console.log("Left successfully", response)
//                           })
//                           .receive("error", response => {
//                               console.log("Unable to leave", response) })
//                         }

// var game_channel = new_channel("moon", "moon")
// join(game_channel)

// window.game_channel = game_channel;

// game_channel.on("subscribers", response => { console.log("These players have joined: ", response)
//                                            })
// Import local files
//
// Local files can be imported directly using relative paths, for example:
// import socket from "./socket"
new Vue({
  el: '#app',
  render: h => h(App),
});