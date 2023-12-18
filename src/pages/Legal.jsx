// components/Legal.js
import React from "react";
import Typography from "../components/Typography";

const Legal = () => (
  <div className="flex py-24 justify-start flex-col custom-container">
    <Typography fontStyle="font-secondary text-sm pb-6">
      CARIBBEAN WEATHER
    </Typography>
    <Typography fontStyle="font-primary text-5xl font-bold pb-4">
      Not all who wander are lost
    </Typography>
    <Typography fontStyle="font-primary text-2xl font-bold">
      1. Introduction
    </Typography>
    <Typography fontStyle="font-primary text-2xl pb-4">
      Welcome to the "Caribbean Weather" app, a service provided by App Banton
      Studios Ltd. ("we", "us", or "our"). Our app offers minimalistic weather
      data, funny weather commentary in creolized English, and timely weather
      alerts, primarily serving Caribbean islanders and the diaspora around the
      world.
    </Typography>
    <Typography fontStyle="font-primary text-2xl font-bold">
      2. Acceptance of Terms
    </Typography>
    <Typography fontStyle="font-primary text-2xl">
      By accessing or using our app, you agree to be bound by these Terms of
      Service ("Terms") and our Privacy Policy. If you do not agree to these
      Terms, you should not use our app. These Terms apply to all users of the
      app, including without limitation users who are browsers, vendors,
      customers, merchants, and contributors of content.{" "}
    </Typography>
  </div>
);

export default Legal;
