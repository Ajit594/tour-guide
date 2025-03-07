const PasswordInfo = () => {
  return (
    <form className="col-xl-9">
      <div className="row x-gap-20 y-gap-20">
        <div className="col-12">
        <label className="lh-1 text-16 text-light-1">
              Current Password
            </label>
          <div className="form-input ">
            <input type="text" required placeholder="Current Password" className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all placeholder-gray-400"/>
          </div>
        </div>
        {/* End col-12 */}

        <div className="col-12">
        <label className="lh-1 text-16 text-light-1">New Password</label>
          <div className="form-input ">
            <input type="text" required placeholder="New Password" className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all placeholder-gray-400"/>
          </div>
        </div>
        {/* End col-12 */}

        <div className="col-12">
        <label className="lh-1 text-16 text-light-1">
              New Password Again
            </label>
          <div className="form-input ">
            <input type="text" required placeholder="New Password Again" className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all placeholder-gray-400"/>
          </div>
        </div>
        {/* End col-12 */}

        <div className="col-12">
          <div className="row x-gap-10 y-gap-10">
            <div className="col-auto">
              <button
                type="submit"
                className="button h-50 px-24 -dark-1 bg-yellow-1 text-white"
              >
                Save Changes <div className="icon-arrow-top-right ml-15" />
              </button>
            </div>
            <div className="col-auto">
              <button className="button h-50 px-24 -yellow-1 bg-yellow-5 text-blue-1">
                Cancel
              </button>
            </div>
          </div>
        </div>
        {/* End col-12 */}
      </div>
    </form>
  );
};

export default PasswordInfo;
