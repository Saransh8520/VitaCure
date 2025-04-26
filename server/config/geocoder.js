const NodeGeocoder = require("node-geocoder");
const dotenv = require("dotenv");
dotenv.config();

const options = {
  provider: "opencage",
  apiKey: process.env.OPENCAGE_API_KEY || "dummy_key",
};

const geocoder = NodeGeocoder(options);

const geocodeAddress = async (postalCode) => {
  try {
    return geocoder.geocode(postalCode);
  } catch (error) {
    console.error("Geocoding error:", error);
    return [{ formattedAddress: "Default Location" }];
  }
};

module.exports = { geocodeAddress };
