const Transportation = () => {
  return (
    <div className="mt-30">
      <div className="fw-500 mb-20">Transportation</div>
      <div className="overflow-scroll scroll-bar-1">
        <table className="table-5 -border-bottom col-12">
          <thead className="bg-light-2">
            <tr className="bg-yellow-2 text-white">
              <th>Name</th>
              <th>Content</th>
              <th>Distance</th>
              <th />
              <th />
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="col-2">
                <label className="lh-1 text-16 text-light-1">Sunny beach</label>
                <div className="form-input ">
                  <input
                    type="text"
                    required
                    placeholder="Sunny beach"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all placeholder-gray-400"
                  />
                </div>
              </td>
              <td className="col-6">
                <label className="lh-1 text-16 text-light-1">Content</label>
                <div className="form-input ">
                  <textarea
                    required
                    rows={5}
                    defaultValue={""}
                    placeholder="Content"
                  />
                </div>
              </td>
              <td className="col-2">
                <label className="lh-1 text-16 text-light-1">Sunny beach</label>
                <div className="form-input ">
                  <input
                    type="text"
                    required
                    placeholder="Sunny beach"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all placeholder-gray-400"
                  />
                </div>
              </td>
              <td className="col-2">
                <label className="lh-1 text-16 text-light-1">
                  Select Country
                </label>
                <div className="form-input ">
                  <input
                    type="text"
                    required
                    placeholder="Select country"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all placeholder-gray-400"
                  />
                </div>
              </td>
              <td className="col-auto">
                <button className="flex-center bg-light-2 rounded-4 size-35">
                  <i className="icon-trash-2 text-16 text-light-1" />
                </button>
              </td>
            </tr>
            <tr>
              <td className="col-2">
                <label className="lh-1 text-16 text-light-1">Sunny beach</label>
                <div className="form-input ">
                  <input
                    type="text"
                    required
                    placeholder="Sunny beach"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all placeholder-gray-400"
                  />
                </div>
              </td>
              <td className="col-6">
                <label className="lh-1 text-16 text-light-1">Content</label>
                <div className="form-input ">
                  <textarea
                    required
                    rows={5}
                    defaultValue={""}
                    placeholder="Content"
                  />
                </div>
              </td>
              <td className="col-2">
                <label className="lh-1 text-16 text-light-1">Sunny beach</label>
                <div className="form-input ">
                  <input
                    type="text"
                    required
                    placeholder="sunny beach"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all placeholder-gray-400"
                  />
                </div>
              </td>
              <td className="col-2">
                <label className="lh-1 text-16 text-light-1">
                  Select Country
                </label>
                <div className="form-input ">
                  <input
                    type="text"
                    required
                    placeholder="select country"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all placeholder-gray-400"
                  />
                </div>
              </td>
              <td className="col-auto">
                <button className="flex-center bg-light-2 rounded-4 size-35">
                  <i className="icon-trash-2 text-16 text-light-1" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="d-flex justify-end">
        <button className="button -md -yellow-1 bg-blue-1-05 text-black mt-20">
          Add Item
        </button>
      </div>
    </div>
  );
};

export default Transportation;
