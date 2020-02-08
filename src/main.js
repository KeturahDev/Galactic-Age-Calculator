import $ from 'jquery';
import 'bootstrap';
import './styles.css';
import { Age } from './age.js';


function mercuryInfo(age) {
  $('#mercury').toggle();
  $('#mars').hide();
  $('#jupiter').hide();
  $('#venus').hide();
  age.getMerked(age.userAge);
  $('#mercAge').html(age.newYears);
  // age.lifeLeftOnEarth();
  if (age.userAge < 73) {
    age.getMerked(age.remainingEarthLife);
    $('#mercExp').html(`you would live ${age.remainingEarthLife} more years`);
  } else {
    age.getMerked(age.winningBy);
    $('#mercExp').html(`you would live ${age.winningBy} more years`);
  }
}
function venusInfo(age) {
  $('#venus').toggle();
  $('#mercury').hide();
  $('#jupiter').hide();
  $('#mars').hide();
  age.getVenused(age.userAge);
  $('#venAge').html(age.newYears);
  // age.lifeLeftOnEarth();
  if (age.userAge < 73) {
    age.getVenused(age.remainingEarthLife);
    $('#venExp').html(`you would live ${age.remainingEarthLife} more years`);
  } else {
    age.getVenused(age.winningBy);
    $('#venExp').html(`you would live ${age.winningBy} more years`);
  }
}
function marsInfo(age) {
  $('#mars').toggle();
  $('#mercury').hide();
  $('#jupiter').hide();
  $('#venus').hide();
  age.getMarsed(age.userAge);
  $('#marsAge').html(age.newYears);
  // age.lifeLeftOnEarth();
  if (age.userAge < 73) {
    age.getMarsed(age.remainingEarthLife);
    $('#marsExp').html(`you would live ${age.remainingEarthLife} more years`);
  } else {
    age.getMarsed(age.winningBy);
    $('#marsExp').html(`you would live ${age.winningBy} more years`);
  }
}
function jupiterInfo(age) {
  $('#jupiter').toggle();
  $('#mercury').hide();
  $('#venus').hide();
  $('#mars').hide();
  $('#juptAge').html(age.newYears);
  age.getJupt(age.userAge);
  // age.lifeLeftOnEarth();
  if (age.userAge < 73) {
    age.getJupt(age.remainingEarthLife);
    $('#juptExp').html(`you would live ${age.remainingEarthLife} more years`);
  } else {
    age.getJupt(age.winningBy);
    $('#juptExp').html(`you would live ${age.winningBy} more years`);
  }
}
function mercuryExpectency() {
  $('#mercExp').toggle();
}
function venusExpectency() {
  $('#venExp').toggle();
}
function marsExpectency() {
  $('#marsExp').toggle();
}
function jupiterExpectency() {
  $('#juptExp').toggle();

}
$(document).ready(function () {
  $('#formy').submit(function (event) {
    event.preventDefault();
    let age = $('#age').val();
    let usersAge = new Age(age);
    usersAge.lifeLeftOnEarth();

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

    $('#mercExpButton').click(function () {
      mercuryExpectency(usersAge);
    });
    $('#venExpButton').click(function () {
      venusExpectency(usersAge);
    });
    $('#marsExpButton').click(function () {
      marsExpectency(usersAge);
    });
    $('#juptExpButton').click(function () {
      jupiterExpectency(usersAge);
    });

  });
});