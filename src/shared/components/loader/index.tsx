import "./style.css";

export function Loader() {
  return(
  <div
    style={{
      width: "100vw",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <span className="loader"></span>
  </div>);
}
