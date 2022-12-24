import { useEffect } from "react";

const ClubBlock = ({club}) => {

    useEffect(() => {
        console.log(club, "Club")
    }, [])

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              {club[1].name}
            </h1>
            <div className="h-1 w-20 bg-indigo-500 rounded"></div>
          </div>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
            {club[1].description}
            <br></br>
            <br></br>
            {club[1].address} - {club[1].location}
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
        {
          club && club[1].events ? club[1].events.map((ev, key) => (
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="https://dummyimage.com/720x400"
                  alt="content"
                />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  {ev.date}
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  {ev.title}
                </h2>
                <p className="leading-relaxed text-base">
                  {ev.artist ? ev.artist : null}
                </p>
              </div>
            </div>
            
            )) : <></>
          }
          </div>
        </div>
    </section>
  );
};

export default ClubBlock;
