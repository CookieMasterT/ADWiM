const Header = ({ title }) => {
  const Header_style = { backgroundColor: "mediumblue", color: "#fff" };
  return (
    <header style={Header_style}>
      <h1>{title ? title : "Grocery List"}</h1>
    </header>
  );
};

export default Header;
