import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Countries = ({ data }) => {
    console.log(data);
  
    return (
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-6 ">
        {data?.map((event, index) => (
          <div key={index} className="border bg-slate-300 p-4">
            <img src={event.image} alt={event.title} className="w-full h-48 object-cover mb-2" />
            <h3 className="text-xl text-center font-bold mb-2">{event.title}</h3>
            <p className="text-sm mb-4">{event.short_description}</p>
            <Link to={`/countriesDetails/${event.id}`}>
                  <button className="btn btn-info">Details</button>
                  </Link>
          </div>
        ))}
      </div>
     
    );
  };
  
  export default Countries;
  