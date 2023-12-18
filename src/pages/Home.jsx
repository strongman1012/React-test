// components/Home.js
import React from "react";
import Typography from "../components/Typography";
import Image from "../components/Image";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();
  return (
    <div className="flex gap-24 md:pt-24 pt-4 flex-col lg:flex-row lg:justify-between custom-container">
      <div className="flex flex-col">
        <Typography fontStyle="font-secondary text-sm pb-6">
          CARIBBEAN WEATHER
        </Typography>
        <Typography
          fontStyle="font-primary text-3xl sm:text-5xl leading-loose font-bold pb-4"
        >
          A Refreshingly Simple Weather App For The Caribbean
        </Typography>
        <Typography fontStyle="font-primary text-lg sm:text-2xl pb-12">
          A minimalist weather app tailored to Caribbean Islanders and the
          diaspora
        </Typography>
        <div className="flex flex-row gap-4">
          <Image
            imageUrl="img/apple.png"
            onClick={() => history.push("/error")}
          />
          <Image
            imageUrl="img/google.png"
            onClick={() => history.push("/legal")}
          />
        </div>
      </div>
      <div>
        <Image imageUrl="img/video.png" className="w-full" altText="video" />
      </div>
    </div>
  );
};

export default Home;
