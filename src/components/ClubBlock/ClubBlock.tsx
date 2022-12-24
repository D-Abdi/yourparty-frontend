import { useEffect } from "react";
import "./ClubBlock.css"

const ClubBlock = ({club}) => {

    useEffect(() => {
        console.log(club, "Club")
    }, [])

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
              {club[1].name}
            </h1>
            <div className="h-1 w-20 bg-primary rounded mb-3"></div>
            <span className="text-xl text-white">Locatie: {club[1].address} - {club[1].location}</span>
          </div>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="carousel py-5 rounded-box w-auto">       
        {
          club && club[1].events ? club[1].events.map((ev, index) => (
            <div className="carousel-item w-1/4" key={index}>             
              <div className="p-2 w-72">
                <div className="bg-neutral p-6 rounded-lg">
                  <img
                    className="h-40 rounded w-full object-cover object-center mb-6"
                    src={ev.img}
                    alt="content"
                  />
                  <h3 className="tracking-widest text-info text-xs font-medium title-font">
                    {ev.date}
                  </h3>
                  <h2 className="text-lg font-medium title-font mb-4 text-gray-100">
                    {ev.title}
                  </h2>
                  <p className="leading-relaxed text-base text-gray-100">
                    {ev.artist ? ev.artist : null}
                  </p>
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
