import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Countries = ({ data }) => {
  console.log(data);

  return (
    <div className="max-w-[1440px] mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-6 mx-auto px-2">
      {data?.map((event, index) => (
        <div key={index} className="border rounded-2xl shadow">
          <img src={event.image} alt={event.title} className="w-full h-48 object-cover mb-2 rounded-t-2xl" />
          <div className="px-4 pb-4">
            <h3 className="text-2xl text-center font-semibold mb-2">{event.title}</h3>
            <p className="text mb-4 h-20 overflow-hidden">{event.short_description}</p>
            <Link to={`/countriesDetails/${event.id}`}>
              <button className="bg-[#f7c221] text-base font-semibold rounded-lg px-5 py-2">Details</button>
            </Link>
          </div>
        </div>
      ))}
    </div>

  );
};

export default Countries;
