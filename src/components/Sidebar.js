import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { IoHomeOutline } from "react-icons/io5";
import "react-pro-sidebar/dist/css/styles.css";
import "../custom.scss";

export default function Sidebar() {
  return (
    <ProSidebar
      collapsed
      collapsedWidth="60px"
      style={{
        height: "105vh",
        marginTop: -7.5,
        marginBottom: 100,
        position: "absolute",
        borderRight: "1px solid rgba(173, 173, 173, 0.5)"
      }}
    >
      <Menu iconShape="square">
        <MenuItem
          icon={
            <IoHomeOutline
              size={50}
              style={{ paddingRight: 15, position: "relative" }}
            />
          }
        >
          Home
        </MenuItem>
        <SubMenu title="">
          <MenuItem>Component 1</MenuItem>
          <MenuItem>Component 2</MenuItem>
        </SubMenu>
      </Menu>
    </ProSidebar>
  );
}
