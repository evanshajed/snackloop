/* **********************************************
     Custom App JavaScripts
     By: Shajed Evan (@evanshajed)
**********************************************///

 jQuery(function($){

  $('.title-featured .line-1').flowtype({
    minimum   : 500,
    maximum   : 1200,
    minFont   : 13,
    maxFont   : 20,
    fontRatio : 30,
    lineRatio : 1.45
  });
  $('.title-featured .line-2').flowtype({
    minimum   : 400,
    maximum   : 1600,
    minFont   : 30,
    maxFont   : 120,
    fontRatio : 5,
    lineRatio : 1
  });
  $('.title-section-main').flowtype({
    minimum   : 300,
    maximum   : 1600,
    minFont   : 18,
    maxFont   : 48,
    fontRatio : 15,
    lineRatio : 1.45
  });
  $('.title-campaign-list').flowtype({
    minimum   : 300,
    maximum   : 900,
    minFont   : 12,
    maxFont   : 24,
    fontRatio : 17,
    lineRatio : 1.1
  });
 });
