// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

window.onload = function createMapWithDirections() {
    let directionsService = new google.maps.DirectionsService();
    let directionsRenderer = new google.maps.DirectionsRenderer();
    let chicagoOne = new google.maps.LatLng(41.850033, -87.6500523);
    let chicagoTwo = new google.maps.LatLng(40.850033, -87.6500523);
    let chicagoThree = new google.maps.LatLng(41.850033, -86.6500523);
    initMap(directionsService, directionsRenderer, chicagoOne);
    calcRoute(directionsService, directionsRenderer, chicagoOne, chicagoThree, [chicagoTwo]);
}

function initMap(directionsService, directionsRenderer, center) {
    let mapOptions = {
    zoom: 4,
    center: center
    }
    let map = new google.maps.Map(document.getElementById('map'), mapOptions);
    directionsRenderer.setMap(map);
}

function calcRoute(directionsService, directionsRenderer, start, end, waypoints) {
    let waypointsData = [];
    waypoints.forEach(pt => waypointsData.push({ location: pt }));
    console.log(waypointsData)
    let request = {
        origin: start,
        destination: end,
        waypoints: waypointsData,
        travelMode: 'WALKING'
    };
    directionsService.route(request, function(result, status) {
        if (status == 'OK') {
            directionsRenderer.setDirections(result);
        }
    });
}