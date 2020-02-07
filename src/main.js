import $ from 'jquery';
import 'bootstrap';
import './styles.css';
import { Age } from './age.js';


function mercuryInfo(age) {
  age.getMerked(age.userAge);
  // $('#mercury').show();
  $('#mercAge').html(age.newYears);
}
// function venusInfo(age) {
//   age.getVenused(age.userAge);
//   $('#venus').show();
//   $('#venAge').html(age.newYears);
// }
// function marsInfo(age) {
//   age.getMarsed(age.userAge);
//   $('#mars').show();
//   $('#marsAge').html(age.newYears);
// }
// function jupiterInfo(age) {
//   age.getJupt(age.userAge);
//   $('#jupiter').show();
//   $('#juptAge').html(age.newYears);
// }
$(document).ready(function () {
  $('#formy').submit(function (event) {
    event.preventDefault();
    let age = $('#age').val();
    let usersAge = new Age(age);

    $('.output').show();
    $('#currentAge').html(usersAge.userAge);

    $('#mercButton').click(mercuryInfo(usersAge));
    // $('#venusButton').click(venusInfo(usersAge));
    // $('#marsButton').click(marsInfo(usersAge));
    // $('#jupiterButton').click(jupiterInfo(usersAge));
  });
});