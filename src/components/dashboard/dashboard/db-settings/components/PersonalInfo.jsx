import AvatarUploader from "./AvatarUploader";

const PersonalInfo = () => {
  return (
    <>
      <form>
        <AvatarUploader />
        {/* End AvatarUploader*/}

        <div className="border-top-light mt-30 mb-30" />

        <div className="col-xl-9">
          <div className="row x-gap-20 y-gap-20">
            <div className="col-12">
              <label className="lh-1 text-16 text-light-1">Business Name</label>
              <div className="form-input ">
                <input
                  type="text"
                  required
                  placeholder="Business Name"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all placeholder-gray-400"
                />
              </div>
            </div>
            {/* End col-12 */}
            <div className="col-12">
              <label className="lh-1 text-16 text-light-1">User Name</label>
              <div className="form-input ">
                <input
                  type="text"
                  required
                  placeholder="User Name "
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all placeholder-gray-400"
                />
              </div>
            </div>
            {/* End col-12 */}

            <div className="col-md-6">
              <label className="lh-1 text-16 text-light-1">First Name</label>
              <div className="form-input ">
                <input
                  type="text"
                  required
                  placeholder="First Name"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all placeholder-gray-400"
                />
              </div>
            </div>
            {/* End col-6 */}

            <div className="col-md-6">
              <label className="lh-1 text-16 text-light-1">Last Name</label>
              <div className="form-input ">
                <input
                  type="text"
                  required
                  placeholder="Last Name"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all placeholder-gray-400"
                />
              </div>
            </div>
            {/* End col-6 */}

            <div className="col-md-6">
              <label className="lh-1 text-16 text-light-1">Email</label>
              <div className="form-input ">
                <input
                  type="text"
                  required
                  placeholder="Email"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all placeholder-gray-400"
                />
              </div>
            </div>
            {/* End col-6 */}

            <div className="col-md-6">
              <label className="lh-1 text-16 text-light-1">Phone Number</label>
              <div className="form-input ">
                <input
                  type="text"
                  required
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all placeholder-gray-400"
                />
              </div>
            </div>
            {/* End col-6 */}

            <div className="col-12">
              <label className="lh-1 text-16 text-light-1">Birthday</label>
              <div className="form-input ">
                <input
                  type="text"
                  required
                  placeholder="Birthday"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all placeholder-gray-400"
                />
              </div>
            </div>
            {/* End col-6 */}

            <div className="col-12">
              <label className="lh-1 text-16 text-light-1">
                About Yourself
              </label>
              <div className="form-input ">
                <textarea
                  required
                  rows={5}
                  defaultValue={""}
                  placeholder="About Yourself"
                />
              </div>
            </div>
          </div>
        </div>
        {/* End col-xl-9 */}

        <div className="d-inline-block pt-30">
          <button
            type="submit"
            className="button h-50 px-24 -dark-1 bg-yellow-1 text-white"
          >
            Save Changes <div className="icon-arrow-top-right ml-15" />
          </button>
        </div>
      </form>
    </>
  );
};

export default PersonalInfo;
