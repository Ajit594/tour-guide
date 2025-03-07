const HotelContent = () => {
  return (
    <div className="row x-gap-20 y-gap-20">
      <div className="col-20">
        <label className="lh-1 text-16 text-light-1">
          Hotel Name <span className="text-danger">*</span>
        </label>
        <div className="form-input ">
          <input type="text" placeholder=" Hotel Name" required  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all placeholder-gray-400"/>
        </div>
      </div>
      {/* End Name */}

      <div className="col-12">
        <div className="form-input ">
          <textarea placeholder="Content" required rows={5} defaultValue={""} />
        </div>
      </div>
      {/* End Content */}

      <div className="col-12">
        <div className="form-input ">
          <input type="text" placeholder="Youtube Video" required className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all placeholder-gray-400" />
        </div>
      </div>
      {/* End youtube Video */}
    </div>
  );
};

export default HotelContent;
