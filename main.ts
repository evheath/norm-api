console.clear()

import * as SunCalc from 'suncalc'

const bozemanLat = 45.6841
const bozemanLong = -111.052


// get position of the sun (azimuth and altitude) at today's sunrise
var sunPosNow = SunCalc.getPosition(new Date(), bozemanLat, bozemanLong);

var bozemanAzimuthInDegrees = sunPosNow.azimuth * 180 / Math.PI;
console.log(`azimuth ${180 + bozemanAzimuthInDegrees}`)


const bozemanAltitudeInDegrees = sunPosNow.altitude * 180 / Math.PI
console.log(`altitude ${bozemanAltitudeInDegrees}`)