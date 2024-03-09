import { useState } from "react";
import Alert from "./Alert";
import Complaints from "./Complaints";
import Polling from "./Polling";
import EventNotification from "./EventNotification";

const Navbar = () => {
  const [currentView, setCurrentView] = useState("Complaints");
  const renderView = (viewName) => {
    switch (viewName) {
      case "Alert":
        return <Alert />;
      case "Complaints":
        return <Complaints />;
      case "Polling":
        return <Polling />;
      case "EventNotification":
        return <EventNotification />;
      default:
        return <Complaints />;
    }
  };
  return (
    <div className={`bg-sky-200 h-screen`}>
      <div className={`bg-sky-500 h-[75px]`}></div>
      <div className={`flex justify-between bg-green-300`}>
        <div className={`flex-row bg-white h-full w-1/6 `}>
          <div className={``}>
            <button className="hover:bg-neutral-200 bg-sky-100 rounded text-neutral-800 font-extrabold w-full p-3 mt-3">
              Complaints
            </button>
          </div>
          <div className={``}>
            <button className="hover:bg-neutral-200 bg-sky-100 rounded text-neutral-800 font-extrabold w-full p-3 mt-3">
              Event Notification
            </button>
          </div>
          <div className={``}>
            <button className="hover:bg-neutral-200 bg-sky-100 rounded text-neutral-800 font-extrabold w-full p-3 mt-3">
              Alert
            </button>
          </div>
          <div className={``}>
            <button className="hover:bg-neutral-200 bg-sky-100 rounded text-neutral-800 font-extrabold w-full p-3 mt-3">
              Polling
            </button>
          </div>
        </div>
        <div className={`flex-row`}> {renderView(currentView)} </div>
      </div>
    </div>
  );
};
export default Navbar;
