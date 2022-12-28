import { useEffect } from "react";
import "./ClubBlock.css"

import axios from "axios";

const ClubBlock = ({club}) => {
    const navigateToPage = (URL, clubName) => {
      const requestURL = "http://127.0.0.1:8000/clubs/" + clubName + URL
    }

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-12">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
              {club.name}
            </h1>
            <div className="h-1 w-20 bg-primary rounded mb-3"></div>
            <span className="text-xl text-white">Locatie: {club.address} - {club.location}</span>
          </div>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="carousel py-12 rounded-box w-auto">       
        {
          club && club.events ? club.events.map((ev, index) => (
            <div className="carousel-item w-1/4" key={index}>  
                  
              <div className="p-2 w-72">
                <div className="bg-neutral p-6 rounded-lg">
                  <img
                    className="h-40 rounded w-full object-fit object-center mb-6"
                    src={ev.img}
                    alt="content"
                  />
                  <h3 className="tracking-widest text-info text-xs font-medium title-font">
                    {ev.date}
                  </h3>
                  <h2 className="text-lg font-medium title-font mb-4 text-gray-100 h-16">
                    {ev.title}
                  </h2>
                  <a className="link-accent inline-flex items-center md:mb-2 lg:mb-0 mt-2" href={ev.link} target="_blank">Visit event
                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>   
                  </a>
                </div>
              </div>
            </div>
            )) : <></>
          }
            </div>
          </div>
        </div>
    </section>
  );
};

export default ClubBlock;
