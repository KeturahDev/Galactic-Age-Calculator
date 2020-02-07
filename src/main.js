import { Age } from './age.js';
import $ from jquery;

$(document).ready(function () {
  $('#formy').submit(function (event) {
    event.preventDefault();
    let age = $('#age').val();

  })
})