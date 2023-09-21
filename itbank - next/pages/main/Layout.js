import Sidebar from "../../components/Sidebar";


const Layout = ({ children, sidebarActiveLink }) => {
    return (
      <div>
        <Sidebar selectedSection={sidebarActiveLink}/>
        {children}
      </div>
  );
};

export default Layout;