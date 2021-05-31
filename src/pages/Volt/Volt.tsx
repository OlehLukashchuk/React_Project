import React, { memo, useCallback, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import jwt_decode from "jwt-decode";

import { RootState } from "../../index";
import "./Volt.scss";
import { ADD_TOKEN } from "../../constants/store";

interface VoltProps {
  history: {
    push: (path: string) => void;
  };
}

export const Volt = memo(({ history }: VoltProps) => {
  const state = useSelector(({ JwtToken }: RootState) => JwtToken);
  const dispatch = useDispatch();

  const addToken = useCallback(() => {
    const notExpiredToken =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE2MjA2NDA5MzAsImV4cCI6MTY1MjE3NjkzMCwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJSb2xlIjpbIk1hbmFnZXIiLCJQcm9qZWN0IEFkbWluaXN0cmF0b3IiXX0.WkqMdmSYTmckK6w1lqM_1026PE0935aVdfuPnHb8-mE";
    localStorage.setItem("jwtToken", notExpiredToken);
  }, []);

  const decodeToken = useCallback(() => {
    const getItem: string = localStorage.getItem("jwtToken") as string;

    const decodedJwt = jwt_decode(getItem);
    dispatch({ type: ADD_TOKEN, value: decodedJwt });
  }, [dispatch]);

  useMemo(() => {
    addToken();
    decodeToken();
  }, [addToken, decodeToken]);

  const privateRoute = useCallback(() => {
    const date = Date.now() / 1000;
    if (date < state.value.exp) {
      history.push("/Login");
    } else {
      history.push("/books");
    }
  }, [history, state.value.exp]);

  return (
    <div className="voltContainer">
      <button className="checkToken" onClick={privateRoute}>
        Check
      </button>
    </div>
  );
});
