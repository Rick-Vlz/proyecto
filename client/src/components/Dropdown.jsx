import { Dropdown } from "flowbite-react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export function UserDropdown({ logoutHandler }) {
    const userLoginReducer = useSelector((state) => state.userLoginReducer)
    const {userInfo} = userLoginReducer
  return (
    <Dropdown
      label={
        <span className="text-black">{userInfo ? userInfo.name : "User"} ▼</span>
      }
      dismissOnClick={false}
    >
      <Link to="/order-history">
        <Dropdown.Item className="text-black">
          Historial de Ordenes
        </Dropdown.Item>
      </Link>
      <Dropdown.Item className="text-black" onClick={logoutHandler}>
       Log out ↦
      </Dropdown.Item>
    </Dropdown>
  );
}
