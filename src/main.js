import $ from 'jquery';
import { Age } from './age.js';

$(document).ready(function () {
  $('#formy').submit(function (event) {
    event.preventDefault();
    let age = $('#age').val();
    let usersAge = new Age(age);

    console.log(usersAge);
  });
});