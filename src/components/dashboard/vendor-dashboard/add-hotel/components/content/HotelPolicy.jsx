const HotelPolicy = () => {
  return (
    <>
      <div className="row x-gap-15 y-gap-0">
        <div className="col-12">
          <label className="lh-1 text-16 text-light-1">
            Hotel rating standard <span className="text-danger ">*</span>
          </label>
          <div className="form-input ">
            <input
              type="text"
              placeholder="Enter hoteil rating standerd"
              required
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all placeholder-gray-400"
            />
          </div>
        </div>
      </div>
      {/* End hotel rating standard */}

      <div className="mt-20">
        <div className="fw-500 mb-20">
          Policy <span className="text-danger">*</span>
        </div>
        <div className="overflow-scroll scroll-bar-1">
          <table className="table-5 -border-bottom col-12">
            <thead className="bg-light-2">
              <tr className="bg-yellow-2 text-white">
                <th>Title</th>
                <th>Content</th>
                <th />
              </tr>
            </thead>
            {/* End thead */}

            <tbody>
              <tr>
                <td className="col-5">
                  <div className="form-input ">
                    <input
                      type="text"
                      placeholder="Which footwear is most suitable?"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all placeholder-gray-400"
                    />
                    <label className="lh-1 text-16 text-light-1"></label>
                  </div>
                </td>
                {/* End td */}

                <td className="col-7">
                  <div className="form-input ">
                    <textarea
                      required
                      rows={5}
                      defaultValue={""}
                      placeholder="Content"
                    />
                    <label className="lh-1 text-16 text-light-1"></label>
                  </div>
                </td>
                {/* End td */}
                <td className="col-auto">
                  <button className="flex-center bg-light-2 rounded-4 size-35">
                    <i className="icon-trash-2 text-16 text-light-1" />
                  </button>
                </td>
              </tr>
              {/* End tr */}

              <tr>
                <td className="col-5">
                  <div className="form-input ">
                    <input
                      type="text"
                      required
                      placeholder="Eg: Whhic hotel is most suitable?"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all placeholder-gray-400"
                    />
                    <label className="lh-1 text-16 text-light-1"></label>
                  </div>
                </td>

                {/* End td */}

                <td className="col-7">
                  <div className="form-input ">
                    <textarea
                      required
                      rows={5}
                      defaultValue={""}
                      placeholder="Content"
                    />
                    <label className="lh-1 text-16 text-light-1"></label>
                  </div>
                </td>
                {/* End td */}

                <td className="col-auto">
                  <button className="flex-center bg-light-2 rounded-4 size-35">
                    <i className="icon-trash-2 text-16 text-light-1" />
                  </button>
                </td>
                {/* End td */}
              </tr>
              {/* End tr */}
            </tbody>
          </table>
        </div>
        {/* End overflow */}

        <div className="d-flex justify-end">
          <button className="button -md -yellow-2 bg-blue-1-05 text-black mt-20">
            Add Item
          </button>
        </div>
      </div>
      {/* End policy */}
    </>
  );
};

export default HotelPolicy;
