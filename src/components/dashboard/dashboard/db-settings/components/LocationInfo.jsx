const LocationInfo = () => {
  return (
    <form className="col-xl-9">
      <div className="row x-gap-20 y-gap-20">
        <div className="col-12">
        <label className="lh-1 text-16 text-light-1">Address Line 1</label>
          <div className="form-input ">
            <input type="text" required 
            placeholder="Adress Line 1"
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all placeholder-gray-400" />
          </div>
        </div>
        {/* End col-12 */}

        <div className="col-12">
        <label className="lh-1 text-16 text-light-1">Address Line 2</label>
          <div className="form-input ">
            <input type="text" required  placeholder="Adress Line 2" className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all placeholder-gray-400"/>
          </div>
        </div>
        {/* End col-12 */}

        <div className="col-md-6">
        <label className="lh-1 text-16 text-light-1">City</label>
          <div className="form-input ">
            <input type="text" required placeholder="City" className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all placeholder-gray-400"/>
          </div>
        </div>
        {/* End col-6 */}

        <div className="col-md-6">
        <label className="lh-1 text-16 text-light-1">State</label>
          <div className="form-input ">
            <input type="text" required placeholder="State" className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all placeholder-gray-400"/>
          </div>
        </div>
        {/* End col-6 */}

        <div className="col-md-6">
        <label className="lh-1 text-16 text-light-1">Select Country</label>
          <div className="form-input ">
            <input type="text" required placeholder="Select Country" className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all placeholder-gray-400"/>
          </div>
        </div>
        {/* End col-6 */}

        <div className="col-md-6">
        <label className="lh-1 text-16 text-light-1">ZIP Code</label>
          <div className="form-input ">
            <input type="text" required placeholder="ZIP Code" className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all placeholder-gray-400"/>
          </div>
        </div>
        {/* End col-6 */}

        <div className="col-12">
          <div className="d-inline-block">
            <button
              type="submit"
              className="button h-50 px-24 -dark-1 bg-yellow-1 text-white"
            >
              Save Changes <div className="icon-arrow-top-right ml-15" />
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default LocationInfo;
