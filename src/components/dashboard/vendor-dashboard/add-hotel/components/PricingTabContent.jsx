const PricingTabContent = () => {
  return (
    <div className="col-xl-9 col-lg-11">
      <div className="row x-gap-20 y-gap-20">
        <div className="col-12">
          <div className="text-18 fw-500 mb-10">Pricing</div>
          <label className="lh-1 text-16 text-light-1">Hotel Price</label>
          <div className="form-input ">
            <input
              type="text"
              required
              placeholder="Hotel Price"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all placeholder-gray-400"
            />
          </div>

          <div className="d-flex mt-20">
            <div className="form-checkbox ">
              <input type="checkbox" name="name" />
              <div className="form-checkbox__mark">
                <div className="form-checkbox__icon icon-check" />
              </div>
            </div>
            <div className="text-15 lh-11 ml-10">Enable extra price</div>
          </div>

          <div className="fw-500 mt-30">Enable service fee</div>

          <div className="d-flex mt-10">
            <div className="form-checkbox ">
              <input type="checkbox" name="name" />
              <div className="form-checkbox__mark">
                <div className="form-checkbox__icon icon-check" />
              </div>
            </div>
            <div className="text-15 lh-11 ml-10">Enable extra price</div>
          </div>
        </div>
        {/* End .col-12 */}
      </div>
      {/* End .row */}

      <div className="text-18 fw-500 mb-10 pt-30">
        Check in / Check out time
      </div>

      <div className="row x-gap-20 y-gap-20">
        <div className="col-md-6">
          <label className="lh-1 text-16 text-light-1">Time for check in</label>
          <div className="form-input ">
            <input
              type="text"
              required
              placeholder="Time for check in"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all placeholder-gray-400"
            />
          </div>
        </div>
        {/* End col-6 */}
        <div className="col-md-6">
          <label className="lh-1 text-16 text-light-1">
            Time for check out
          </label>
          <div className="form-input ">
            <input
              type="text"
              required
              placeholder="Time for check out"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all placeholder-gray-400"
            />
          </div>
        </div>
        {/* End col-6 */}
        <div className="col-md-6">
          <label className="lh-1 text-16 text-light-1">
            Minimum advance reservations
          </label>
          <div className="form-input ">
            <input
              type="text"
              required
              placeholder="Minimum advance reservation"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all placeholder-gray-400"
            />
          </div>
        </div>
        {/* End col-6 */}
        <div className="col-md-6">
          <label className="lh-1 text-16 text-light-1">
            Minimum day stay requirements
          </label>
          <div className="form-input ">
            <input
              type="text"
              required
              placeholder="Minimum day stay requirment"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all placeholder-gray-400"
            />
          </div>
        </div>
        {/* End col-6 */}
      </div>
      {/* End row */}

      <div className="col-md-12 d-inline-block mt-30">
        <button
          type="submit"
          className="button h-50 px-24 -light-1 bg-yellow-1 text-white"
        >
          Save Changes <div className="icon-arrow-top-right ml-15" />
        </button>
      </div>
    </div>
  );
};

export default PricingTabContent;
