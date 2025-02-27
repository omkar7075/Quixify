const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const serviceProviders = [
  {
    name: "John Doe",
    userName: "john_doe",
    email: "john@example.com",
    password: bcrypt.hashSync("password123", 10),
    services: ["Plumbing", "Electrical"],
    location: { type: "Point", coordinates: [-73.935242, 40.73061] }, // New York
    isAvailable: true,
    rating: 4.5,
    notifications: [{ userId: new mongoose.Types.ObjectId(), message: "New booking request", status: "pending" }],
    serviceLogs: [{ serviceId: new mongoose.Types.ObjectId(), status: "completed" }],
    complaints: []
  },
  {
    name: "Jane Smith",
    userName: "jane_smith",
    email: "jane@example.com",
    password: bcrypt.hashSync("password123", 10),
    services: ["Cleaning", "Carpentry"],
    location: { type: "Point", coordinates: [-118.2437, 34.0522] }, // Los Angeles
    isAvailable: true,
    rating: 4.2,
    notifications: [],
    serviceLogs: [],
    complaints: [{ userId: new mongoose.Types.ObjectId(), complaint: "Delayed service", status: "pending" }]
  },
  {
    name: "Alice Johnson",
    userName: "alice_johnson",
    email: "alice@example.com",
    password: bcrypt.hashSync("password123", 10),
    services: ["Gardening", "Plumbing"],
    location: { type: "Point", coordinates: [-87.623177, 41.881832] }, // Chicago
    isAvailable: false,
    rating: 4.7,
    notifications: [],
    serviceLogs: [],
    complaints: []
  },
  {
    name: "Bob Brown",
    userName: "bob_brown",
    email: "bob@example.com",
    password: bcrypt.hashSync("password123", 10),
    services: ["Painting", "Electrical"],
    location: { type: "Point", coordinates: [-95.3698, 29.7604] }, // Houston
    isAvailable: true,
    rating: 3.9,
    notifications: [],
    serviceLogs: [],
    complaints: []
  },
  {
    name: "Charlie Wilson",
    userName: "charlie_wilson",
    email: "charlie@example.com",
    password: bcrypt.hashSync("password123", 10),
    services: ["Car Repair", "Towing"],
    location: { type: "Point", coordinates: [-122.4194, 37.7749] }, // San Francisco
    isAvailable: true,
    rating: 4.3,
    notifications: [],
    serviceLogs: [],
    complaints: []
  },
  {
    name: "David Lee",
    userName: "david_lee",
    email: "david@example.com",
    password: bcrypt.hashSync("password123", 10),
    services: ["Security", "Housekeeping"],
    location: { type: "Point", coordinates: [-122.3321, 47.6062] }, // Seattle
    isAvailable: false,
    rating: 4.6,
    notifications: [],
    serviceLogs: [],
    complaints: []
  },
  {
    name: "Eve Adams",
    userName: "eve_adams",
    email: "eve@example.com",
    password: bcrypt.hashSync("password123", 10),
    services: ["Nanny", "Cooking"],
    location: { type: "Point", coordinates: [-71.0589, 42.3601] }, // Boston
    isAvailable: true,
    rating: 4.8,
    notifications: [],
    serviceLogs: [],
    complaints: []
  },
  {
    name: "Frank Carter",
    userName: "frank_carter",
    email: "frank@example.com",
    password: bcrypt.hashSync("password123", 10),
    services: ["Tech Support", "Networking"],
    location: { type: "Point", coordinates: [-97.7431, 30.2672] }, // Austin
    isAvailable: false,
    rating: 4.1,
    notifications: [],
    serviceLogs: [],
    complaints: []
  },
  {
    name: "Grace Foster",
    userName: "grace_foster",
    email: "grace@example.com",
    password: bcrypt.hashSync("password123", 10),
    services: ["Fitness Training", "Yoga"],
    location: { type: "Point", coordinates: [-104.9903, 39.7392] }, // Denver
    isAvailable: true,
    rating: 4.9,
    notifications: [],
    serviceLogs: [],
    complaints: []
  },
  {
    name: "Henry Morgan",
    userName: "henry_morgan",
    email: "henry@example.com",
    password: bcrypt.hashSync("password123", 10),
    services: ["Pet Grooming", "Dog Walking"],
    location: { type: "Point", coordinates: [-80.1918, 25.7617] }, // Miami
    isAvailable: true,
    rating: 4.2,
    notifications: [],
    serviceLogs: [],
    complaints: []
  }
];

module.exports = serviceProviders;
