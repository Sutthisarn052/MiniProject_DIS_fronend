import Header from "./components/header";

const Layout = ({ children, ...props }) => {
  return (
    <div className="flex flex-col w-screen min-h-screen">
      <Header token={props.token} />
      <div className="py-10">{children}</div>
    </div>
  );
};

export default Layout;
