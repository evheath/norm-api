import * as SunCalc from 'suncalc'
const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();

// const bozemanLat = 45.6841 // original lat
// const bozemanLong = -111.052 // original long
const bozemanLat = 45.79516 // norm's requested lat
const bozemanLong = -111.05729 // norm's requested long

app.get('/', (req, res) => {

  // get position of the sun (azimuth and altitude) at today's sunrise
  let sunPosNow = SunCalc.getPosition(new Date(), bozemanLat, bozemanLong);
  let bozemanAzimuthInDegrees = 180 + sunPosNow.azimuth * 180 / Math.PI;
  const bozemanAltitudeInDegrees = sunPosNow.altitude * 180 / Math.PI

  res.json({
    azimuth: bozemanAzimuthInDegrees,
    altitude: bozemanAltitudeInDegrees,
  })
});

app.listen(PORT);