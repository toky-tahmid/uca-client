/* eslint-disable react/prop-types */
const Countries = ({ data }) => {
    console.log(data);
  
    return (
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-6 ">
        {data?.map((event, index) => (
          <div key={index} className="border p-4">
            <img src={event.image} alt={event.title} className="w-full h-32 object-cover mb-2" />
            <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
            <p className="text-sm mb-4">{event.short_description}</p>
            <p className="text-gray-600">{event.long_description}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default Countries;
  