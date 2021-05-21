import React from "react";
import "../Volt/Volt.css";
import { useSelector, useDispatch } from "react-redux";
import jwt_decode from "jwt-decode";


function Volt(props) {
  const state = useSelector((state) => state.JwtToken);
  const dispatch = useDispatch();

  const addToken = React.useCallback(() => {
    const notExpiredToken =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE2MjA2NDA5MzAsImV4cCI6MTY1MjE3NjkzMCwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJSb2xlIjpbIk1hbmFnZXIiLCJQcm9qZWN0IEFkbWluaXN0cmF0b3IiXX0.WkqMdmSYTmckK6w1lqM_1026PE0935aVdfuPnHb8-mE";
    localStorage.setItem("jwtToken", notExpiredToken);
  }, []);

  const decodeToken = React.useCallback(() => {
    const getItem = localStorage.getItem("jwtToken");
    const decodedJwt = jwt_decode(getItem);
    dispatch({ type: "AddToken", value: decodedJwt });
  }, [dispatch]);

  React.useMemo(() => {
    addToken();
    decodeToken();
  }, [addToken, decodeToken]);

  const privateRoute = () => {
    const date = Date.now() / 1000;
    if (date < state.value.exp) {
      props.history.push("/Login");
    } else {
      props.history.push("/books");
    }
  };

  return (
    <div className="voltContainer">

      <button className="checkToken" onClick={privateRoute}>
        Check
      </button>
    </div>
  );
}

// class Volt extends React.PureComponent {
//   render(){
//     return (
//       <h1>Volt</h1>
//     )
//   }
// }

export default React.memo(Volt);
