/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { LeftNavMenuItem } from "../components";
import { Context } from "../context/ContexApi";
import { categories } from "../utils/Constants";
import { useNavigate } from "react-router-dom";

const LeftNav = () => {
  const clickHandler = (name, type) => {
    switch (type) {
      case "category":
        return setSelectCategories(name);
      case "home":
        return setSelectCategories(name);
      case "menu":
        return false;
      default:
        break;
    }
  };
  const { selectCategories, setSelectCategories, mobileMenu } =
    useContext(Context);

  const navigate = useNavigate();

  return (
    <div
      className={`${
        mobileMenu ? "translate-x-0" : ""
      } md:block w-[240px] overflow-y-auto h-full py-4 bg-black absolute md:relative z-10 translate-x-[-240px] md:translate-x-[0] transition-all`}
    >
      <div className="flex flex-col px-5">
        {categories.map((item) => {
          return (
            <React.Fragment key={item.name}>
              <LeftNavMenuItem
                text={item.type === "home" ? "Home" : item.name}
                icon={item.icon}
                action={() => {
                  clickHandler(item.name, item.type);
                  navigate("/");
                }}
                className={`${
                  selectCategories === item.name ? "bg-white/[0.15]" : ""
                }`}
              />
              {item.divider && <hr className="my-5 border-white/[0.2]" />}
            </React.Fragment>
          );
        })}
        <hr className="my-5 border-white/[0.2]" />
        <div className="text-white/[0.5] text-[15px]">Made by: Debraj Dey</div>
      </div>
    </div>
  );
};

export default LeftNav;
