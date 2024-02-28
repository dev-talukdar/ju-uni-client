import { Layout, Menu } from "antd";
import { sidebarItemsGenerator } from "../../../utils/sidebarItemsGenerator";
import { adminPaths } from "../../../routes/AdminRoutes";
import { facultyPaths } from "../../../routes/FacultyRoutes";
import { studentPaths } from "../../../routes/StudentRoutes";
import { useAppSelector } from "../../../redux/hooks/hooks";
import { selectCurrentUser } from "../../../redux/features/auth/authSlice";
const { Sider } = Layout;

const userRole = {
  ADMIN: "admin",
  FACULTY: "faculty",
  STUDENT: "student",
};

const Sidebar = () => {
  const user = useAppSelector(selectCurrentUser);
  let sidebarItems;

  switch (user!.role) {
    case userRole.ADMIN:
      sidebarItems = sidebarItemsGenerator(adminPaths, userRole.ADMIN);
      break;

    case userRole.FACULTY:
      sidebarItems = sidebarItemsGenerator(facultyPaths, userRole.FACULTY);
      break;

    case userRole.STUDENT:
      sidebarItems = sidebarItemsGenerator(studentPaths, userRole.STUDENT);
      break;

    default:
      break;
  }

  return (
    <Sider breakpoint="lg" collapsedWidth="0">
      <div
        style={{
          display: "Flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p
          style={{
            color: "white",
            fontSize: "17px",
            fontWeight: "bold",
            marginTop: "10px",
            marginBottom: "10px",
          }}
        >
          {" "}
          JU University
        </p>
      </div>

      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sidebarItems}
      />
    </Sider>
  );
};

export default Sidebar;
