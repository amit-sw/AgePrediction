var ENDPOINT = 'https://d3yowc8vr7.execute-api.us-east-1.amazonaws.com/Predict/f7e3178d-09ff-4302-beee-3daf8e30a1c5';

var sliderCountries = document.getElementById("sliderCountries")
var sliderYears = document.getElementById("sliderYears")
var sliderHeight = document.getElementById("sliderHeight")

var valueCountries = document.getElementById("valueCountries")
var valueYears = document.getElementById("valueYears")
var valueHeight = document.getElementById("valueHeight")

var valuePrediction = document.getElementById("valuePrediction")

valueCountries.innerHTML=sliderCountries.value
valueYears.innerHTML=sliderYears.value
valueHeight.innerHTML=sliderHeight.value

sliderCountries.oninput = function() {
  valueCountries.innerHTML = this.value
  makePrediction()
}

sliderYears.oninput = function() {
  valueYears.innerHTML = this.value
  makePrediction()
}

sliderHeight.oninput = function() {
  valueHeight.innerHTML = this.value
  makePrediction()
}

function makePrediction() {
  var c=valueCountries.innerHTML
  var y=valueYears.innerHTML
  var h=valueHeight.innerHTML
  var d = `{"num_countries":${c},"years_school":${y},"height":${h}}`;
  predict(d)
}

function predict(data) {
  console.log("\n\n\nPrediction input: ",data)

  return fetch(ENDPOINT, {
    method: 'POST',
    body: data,
  })
  .then(res => res.json())
  .then(response => JSON.parse(response.body))
  .then(function(data) {
    var predictedValue=data["predicted_label"]
    valuePrediction.innerHTML=predictedValue
  })
  .catch(err => console.log('err', err));
};


