import { Link } from "react-router-dom";

const Sidebar = () => {
  const sidebarData = [
    {
      icon: "/img/dashboard/sidebar/booking.svg",
      title: "Manage Hotel",
      links: [
        { title: "All Hotel", href: "/vendor-dashboard/hotels" },
        { title: "Add Hotel", href: "/vendor-dashboard/add-hotel" },
        { title: "All Bookings", href: "/vendor-dashboard/booking" },
        { title: "Recovery", href: "/vendor-dashboard/recovery" },
      ]
    }
  ];

  return (
    <>
      <div className="sidebar -dashboard" id="vendorSidebarMenu">
        <div className="sidebar__item ">
          <Link
            to="/dashboard/db-dashboard"
            className="sidebar__button d-flex items-center text-15 lh-1 fw-500"
          >
            <img
              src="/img/dashboard/sidebar/compass.svg"
              alt="image"
              className="mr-15"
            />
            Dashboard
          </Link>
        </div>
        {/* End accordion__item */}

        <div className="sidebar__item ">
          <a
            href="#"
            className="sidebar__button d-flex items-center text-15 lh-1 fw-500"
          >
            <img
              src="/img/dashboard/sidebar/booking.svg"
              alt="image"
              className="mr-15"
            />
            Booking Manager
          </a>
        </div>
        {/* End accordion__item */}

        {sidebarData.map((item, index) => (
          <div className="sidebar__item" key={index}>
            <div className="accordion -db-sidebar js-accordion">
              <div className="accordion__item">
                <div
                  className="accordion__button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#sidebarItem${index}`}
                >
                  <div className="sidebar__button col-12 d-flex items-center justify-between">
                    <div className="d-flex items-center text-15 lh-1 fw-500">
                      <img src={item.icon} alt="image" className="mr-10" />
                      {item.title}
                    </div>
                    <div className="icon-chevron-sm-down text-7" />
                  </div>
                </div>
                <div
                  id={`sidebarItem${index}`}
                  className="collapse"
                  data-bs-parent="#vendorSidebarMenu"
                >
                  <ul className="list-disc pt-15 pb-5 pl-40">
                    {item.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link to ={link.href} className="text-15">
                          {link.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="sidebar__item ">
          <a
            href="#"
            className="sidebar__button d-flex items-center text-15 lh-1 fw-500"
          >
            <img
              src="/img/dashboard/sidebar/log-out.svg"
              alt="image"
              className="mr-15"
            />
            Logout
          </a>
        </div>
        {/* End accordion__item */}
      </div>
    </>
  );
};

export default Sidebar;
