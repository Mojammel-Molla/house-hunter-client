import { NavLink, Outlet } from 'react-router-dom';

const DashboardLayOut = () => {
  return (
    <div className="flex">
      <div className="w-60 min-h-screen bg-blue-600 text-white">
        <ul className="p-4 font-medium space-y-4 text-lg">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'text-black underline' : ''
              }
              to="/dashboard/user-profile"
            >
              My Profile
            </NavLink>
          </li>

          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'text-black underline' : ''
              }
              to="/dashboard/add-apartment"
            >
              Add Apartment
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'text-black underline' : ''
              }
              to="/dashboard/apartment-list"
            >
              Apartment List
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'text-black underline' : ''
              }
              to="/dashboard/booking-requests"
            >
              Booking Requests
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashboardLayOut;
