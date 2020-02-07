import $ from 'jquery';
import 'bootstrap';
import './styles.css'
import { Age } from './age.js';

$(document).ready(function () {
  $('#formy').submit(function (event) {
    event.preventDefault();
    let age = $('#age').val();
    let usersAge = new Age(age);

    $('#currentAge').html(usersAge.userAge);


    console.log(usersAge.userAge);
    $('.output').show();
    $('#mercAge').append(usersAge.userAge)
  });
});