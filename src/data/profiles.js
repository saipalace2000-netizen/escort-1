// =========================
// INDIAN PROFILES
// =========================

import annaImg from "../assets/profiles/anna.jpeg";
import mayaImg from "../assets/profiles/maya.jpeg";
import saraImg from "../assets/profiles/sara.jpeg";
import riyaImg from "../assets/profiles/riya.jpeg";
import ishaImg from "../assets/profiles/isha.jpeg";
import kavyaImg from "../assets/profiles/kavya.jpeg";
import poojaImg from "../assets/profiles/pooja.jpeg";

export const indianProfiles = [
  {
    id: "anna",
    name: "Anna",
    age: 24,
    nationality: "Indian",
    image: annaImg,
    description: "Elegant and confident companion for premium engagements.",
  },
  {
    id: "maya",
    name: "Maya",
    age: 26,
    nationality: "Indian",
    image: mayaImg,
    description: "Sophisticated presence with a modern lifestyle.",
  },
  {
    id: "sara",
    name: "Sara",
    age: 23,
    nationality: "Indian",
    image: saraImg,
    description: "Young, vibrant, and event-friendly companion.",
  },
  {
    id: "riya",
    name: "Riya",
    age: 25,
    nationality: "Indian",
    image: riyaImg,
    description: "Charming and confident. Ideal for private dinners.",
  },
  {
    id: "isha",
    name: "Isha",
    age: 23,
    nationality: "Indian",
    image: ishaImg,
    description: "Soft-spoken and classy. Elite events only.",
  },
  {
    id: "kavya",
    name: "Kavya",
    age: 27,
    nationality: "Indian",
    image: kavyaImg,
    description: "Bold, stylish, discreet meetings.",
  },
  {
    id: "pooja",
    name: "Pooja",
    age: 25,
    nationality: "Indian",
    image: poojaImg,
    description: "Calm, composed, premium experience.",
  },
];


// =========================
// RUSSIAN PROFILES
// =========================

import russian6 from "../assets/profiles/Russian/russian6.jpeg";
import russian9 from "../assets/profiles/Russian/russian9.jpeg";
import russian10 from "../assets/profiles/Russian/russian10.jpeg";
import russian11 from "../assets/profiles/Russian/russian11.jpeg";
import russian12 from "../assets/profiles/Russian/russian12.jpeg";
import russian13 from "../assets/profiles/Russian/russian13.jpeg";
import russian14 from "../assets/profiles/Russian/russian14.jpeg";

export const russianProfiles = [
  {
    id: "russian-irina",
    name: "Irina",
    age: 26,
    nationality: "Russian",
    image: russian6,
    description: "Refined luxury companionship.",
  },
  {
    id: "russian-daria",
    name: "Daria",
    age: 27,
    nationality: "Russian",
    image: russian9,
    description: "Sophisticated and elegant presence.",
  },
  {
    id: "russian-ksenia",
    name: "Ksenia",
    age: 24,
    nationality: "Russian",
    image: russian10,
    description: "Elite private engagements.",
  },
  {
    id: "russian-yulia",
    name: "Yulia",
    age: 26,
    nationality: "Russian",
    image: russian11,
    description: "Luxury international companion.",
  },
  {
    id: "russian-polina",
    name: "Polina",
    age: 23,
    nationality: "Russian",
    image: russian12,
    description: "International charm and warmth.",
  },
  {
    id: "russian-vera",
    name: "Vera",
    age: 28,
    nationality: "Russian",
    image: russian13,
    description: "Mature premium experience.",
  },
  {
    id: "russian-mila",
    name: "Mila",
    age: 24,
    nationality: "Russian",
    image: russian14,
    description: "Exclusive international companion.",
  },
];


// =========================
// COMBINED EXPORT
// =========================

export const allProfiles = [...indianProfiles, ...russianProfiles];
