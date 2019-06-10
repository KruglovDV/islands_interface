// We need to import the CSS so that webpack will load it.
// The MiniCssExtractPlugin is used to separate it out into
// its own CSS file.
import css from "../css/app.css"

// webpack automatically bundles all modules in your
// entry points. Those entry points can be configured
// in "webpack.config.js".
//
// Import dependencies
//
import "phoenix_html"

import {Socket} from "phoenix"

window.Socket = Socket;

var socket = new Socket("/socket", {})
socket.connect();

window.new_channel = function new_channel(subtopic, screen_name) {
    return socket.channel("game:" + subtopic, {screen_name: screen_name});
}
window.join = function join(channel) { channel.join()
                                       .receive("ok", response => {
                                           console.log("Joined successfully!", response)
                                       })
                                       .receive("error", response => {
                                           console.log("Unable to join", response) })
                                     }
window.leave = function leave(channel) { channel.leave()
                          .receive("ok", response => {
                              console.log("Left successfully", response)
                          })
                          .receive("error", response => {
                              console.log("Unable to leave", response) })
                        }

var game_channel = new_channel("moon", "moon")
join(game_channel)

window.game_channel = game_channel;
// Import local files
//
// Local files can be imported directly using relative paths, for example:
// import socket from "./socket"
