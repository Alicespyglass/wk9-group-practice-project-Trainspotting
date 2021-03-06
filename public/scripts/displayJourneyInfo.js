"use strict";
(function(exports){
  function displayJourneyInfo() {

    spinner.stop();
    // show trip info
    $('#train-info').toggleClass('hidden');
    // get terminus
    var specTrain = userJourney.deptTime + " to: " + userJourney.finalDestination;
    $('#terminus-station').text(specTrain);

    $('#usr-destination').append(userJourney.stopOfInterestName);
    // get train operator
    $('#train-operator').append(userJourney.operator);
    // get last stationFinder
    var closestStation = "Current station: " + userJourney.closestStation
    $('#closest-station').append(closestStation);
    // get arrival time
    $('#arrival-time').append(userJourney.arrivalTime);
  };

  exports.displayJourneyInfo = displayJourneyInfo;
})(this);
