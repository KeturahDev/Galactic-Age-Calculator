import $ from 'jquery';
import 'bootstrap';
import './styles.css';
import { Age } from './age.js';


function mercuryInfo(age) {
  age.getMerked(age.userAge);
  $('#mercury').toggle();
  $('#mars').hide();
  $('#jupiter').hide();
  $('#venus').hide();
  $('#mercAge').html(age.newYears);
}
function venusInfo(age) {
  age.getVenused(age.userAge);
  $('#venus').toggle();
  $('#mercury').hide();
  $('#jupiter').hide();
  $('#mars').hide();
  $('#venAge').html(age.newYears);
}
function marsInfo(age) {
  age.getMarsed(age.userAge);
  $('#mars').toggle();
  $('#mercury').hide();
  $('#jupiter').hide();
  $('#venus').hide();
  $('#marsAge').html(age.newYears);
}
function jupiterInfo(age) {
  age.getJupt(age.userAge);
  $('#jupiter').toggle();
  $('#mercury').hide();
  $('#venus').hide();
  $('#mars').hide();
  $('#juptAge').html(age.newYears);
}
$(document).ready(function () {
  $('#formy').submit(function (event) {
    event.preventDefault();
    let age = $('#age').val();
    let usersAge = new Age(age);

    $('.output').show();
    $('#currentAge').html(usersAge.userAge);

    $('#mercButton').click(function () {
      mercuryInfo(usersAge);
    });
    $('#venusButton').click(function () {
      venusInfo(usersAge);
    });
    $('#marsButton').click(function () {
      marsInfo(usersAge);
    });
    $('#jupiterButton').click(function () {
      jupiterInfo(usersAge);
    });
  });
});