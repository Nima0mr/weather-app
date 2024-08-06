import {create} from 'zustand';

export const useStore = create((set) => ({
  city: "Tehran",
  weatherType: "Fog",
  weatherDegree: 3,
  allWeatherTypes:[
    "Mostly Clear",
    "Clear",
    "Fog",
    "Heavy Snow",
    "Snowy",
    "Thunder",
    "Rainy",
    "Cloudy",
    "Sunny",
    "Partly Cloudy"
  ]
}));