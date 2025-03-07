const Location = () => {
  return (
    <div className="row x-gap-20 y-gap-20">
      <div className="col-12">
        <label className="lh-1 text-16 text-light-1">Location</label>
        <div className="form-input ">
          <input
            type="text"
            required
            placeholder="Location"
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all placeholder-gray-400"
          />
        </div>
      </div>
      <div className="col-12">
        <label className="lh-1 text-16 text-light-1">Real address</label>
        <div className="form-input ">
          <input
            type="text"
            required
            placeholder="Enter  address"
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all placeholder-gray-400"
          />
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <label className="lh-1 text-16 text-light-1">Map Latitude</label>
        <div className="form-input ">
          <input
            type="text"
            required
            placeholder="Enter latitude"
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all placeholder-gray-400"
          />
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <label className="lh-1 text-16 text-light-1">Map Longitude</label>
        <div className="form-input ">
          <input
            type="text"
            required
            placeholder="Enter longitude"
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all placeholder-gray-400"
          />
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <label className="lh-1 text-16 text-light-1">Map Zoom</label>
        <div className="form-input ">
          <input
            type="text"
            required
            placeholder="Map zoom"
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all placeholder-gray-400"
          />
        </div>
      </div>
      <div className="col-lg12">
        <div className="d-flex ratio ratio-4:1 mt-10">
          <div className="d-flex px-20 py-20 bg-yellow-5 h-full w-1/1 absolute rounded-4">
            <div className>
              <div className="form-input bg-white">
                <input type="text" required />
                <label className="lh-1 text-16 text-light-1">
                  Search by name...
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
