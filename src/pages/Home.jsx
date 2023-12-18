// components/Home.js
import React from "react";
import Typography from "../components/Typography";
import Image from "../components/Image";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();
  return (
    <div className="flex gap-24 md:pt-24 pt-4 flex-col lg:flex-row lg:justify-between custom-container">
      <div className="flex flex-col sm:w-primary w-full">
        <Typography fontStyle="font-secondary text-sm pb-6">
          CARIBBEAN WEATHER
        </Typography>
        <div className="relative">
          <Typography fontStyle="font-primary text-3xl sm:text-5xl font-bold pb-4 sm:leading-normal leading-normal z-20">
            A Refreshingly Simple Weather App For The Caribbean
          </Typography>
          <Image imageUrl="img/vector.png" styleName="sm:w-secondary w-1/2 absolute bottom-5 sm:bottom-6 -z-20" altText="vector" />
        </div>

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
      <div className="lg:w-1/2 w-full py-4">
        <Image imageUrl="img/video.png" styleName="w-full" altText="video" />
        {/* <iframe
         className="w-full"
         src="https://www.youtube.com/watch?v=TWbVlsN_IfI&list=PLP3lBjwQoLPvjkhJ41FA5g9JWWhjGJIh1"
         title="YouTube video"
         allowFullScreen
         /> */}
      </div>
    </div>
  );
};

export default Home;
