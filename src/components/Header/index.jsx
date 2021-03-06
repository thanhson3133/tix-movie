import React, { useEffect, useState } from "react";
import webLogo from "../../assets/img/web-logo.png";
import marc from "../../assets/img/faces/marc.jpg";
import location from "../../assets/img/location-header.png";
import { NavLink, useHistory } from "react-router-dom";
import disableScroll from "disable-scroll";
// import * as Scroll from "react-scroll";
import { Link } from "react-scroll";
import { useDispatch, useSelector } from "react-redux";
import createAction from "redux/Actions";
import { IS_LOGIN } from "redux/Constants/UserConstants";
import { FETCH_DETAIL_USER } from "redux/Constants/UserConstants";

export default function Header() {
  const history = useHistory();
  const [scroll, setScroll] = useState(true);
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.credential.isLogin);
  const dataLogin = useSelector((state) => state.credential.dataLogin);

  const handleScroll = () => {
    setScroll(!scroll);
    if (scroll) {
      disableScroll.on();
    } else {
      disableScroll.off();
    }
  };

  useEffect(() => {
    dispatch(createAction(FETCH_DETAIL_USER, { isDetail: false }));
  }, []);

  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-light tixNav">
        <a className="navbar-brand" onClick={() => history.push("/")}>
          <img src={webLogo} alt="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTixContent"
          aria-controls="navbarTixContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={handleScroll}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarTixContent">
          <ul className="navbar-nav">
            <li className="nav-item first">
              <Link
                className="nav-link"
                to="tixCarousel"
                spy={true}
                smooth={true}
                offset={0}
                duration={1000}
                delay={0}
              >
                L???ch Chi???u
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="tixCinema"
                spy={true}
                smooth={true}
                offset={0}
                duration={1000}
                delay={0}
              >
                C???m r???p
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="tixNews"
                spy={true}
                smooth={true}
                offset={-65}
                duration={1000}
                delay={0}
              >
                Tin T???c
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="tixApp"
                spy={true}
                smooth={true}
                offset={-65}
                duration={1000}
                delay={0}
              >
                ???ng d???ng
              </Link>
            </li>
            <li className="nav-item user">
              {isLogin ? (
                <>
                  <a className="nav-link">
                    <img src={marc} alt="user" /> {dataLogin.hoTen}
                  </a>
                  <div className="logout">
                    <NavLink to="/information" style={{ color: "white" }}>
                      Profile
                    </NavLink>
                    {dataLogin.maLoaiNguoiDung === "QuanTri" ? (
                      <NavLink to="/admin/user" style={{ color: "white" }}>
                        System Admin
                      </NavLink>
                    ) : (
                      <br />
                    )}
                    <a
                      style={{ color: "white" }}
                      onClick={() => {
                        localStorage.removeItem("currentUser");
                        localStorage.removeItem("accessToken");
                        history.push("/")
                        dispatch(createAction(IS_LOGIN, false));
                      }}
                    >
                      ????ng Xu???t
                    </a>
                  </div>
                </>
              ) : (
                <NavLink to="/login" className="nav-link" href="#random">
                  <img src={marc} alt="user" /> ????ng Nh???p
                </NavLink>
              )}
              {/* <NavLink to="/admin">Qu???n tr??? h??? th???ng</NavLink> */}
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#random"
                id="navbarTixDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img className="location" src={location} alt="location" />
                H??? Ch?? Minh
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarTixDropdown"
              >
                <a className="dropdown-item" href="#random">
                  H??? Ch?? Minh
                </a>
                <a className="dropdown-item" href="#random">
                  H?? N???i
                </a>
                <a className="dropdown-item" href="#random">
                  ???? N???ng
                </a>
                <a className="dropdown-item" href="#random">
                  H???i Ph??ng
                </a>
                <a className="dropdown-item" href="#random">
                  Bi??n H??a
                </a>
                <a className="dropdown-item" href="#random">
                  Nha Trang
                </a>
                <a className="dropdown-item" href="#random">
                  B??nh D????ng
                </a>
                <a className="dropdown-item" href="#random">
                  Phan Thi???t
                </a>
                <a className="dropdown-item" href="#random">
                  H??? Long
                </a>
                <a className="dropdown-item" href="#random">
                  C???n Th??
                </a>
                <a className="dropdown-item" href="#random">
                  V??ng T??u
                </a>
                <a className="dropdown-item" href="#random">
                  Nha Trang
                </a>
                <a className="dropdown-item" href="#random">
                  Quy Nh??n
                </a>
                <a className="dropdown-item" href="#random">
                  Hu???
                </a>
                <a className="dropdown-item" href="#random">
                  Long Xuy??n
                </a>
                <a className="dropdown-item" href="#random">
                  Th??i Nguy??n
                </a>
                <a className="dropdown-item" href="#random">
                  Bu??n Ma Thu???t
                </a>
                <a className="dropdown-item" href="#random">
                  B???c Giang
                </a>
                <a className="dropdown-item" href="#random">
                  B???n Tre
                </a>
                <a className="dropdown-item" href="#random">
                  Vi???t Tr??
                </a>
                <a className="dropdown-item" href="#random">
                  Ninh B??nh
                </a>
                <a className="dropdown-item" href="#random">
                  Th??i B??nh
                </a>
                <a className="dropdown-item" href="#random">
                  Vinh
                </a>
                <a className="dropdown-item" href="#random">
                  B???o L???c
                </a>
                <a className="dropdown-item" href="#random">
                  ???? L???t
                </a>
                <a className="dropdown-item" href="#random">
                  Tr?? Vinh
                </a>
                <a className="dropdown-item" href="#random">
                  Y??n B??i
                </a>
                <a className="dropdown-item" href="#random">
                  Ki??n Giang
                </a>
                <a className="dropdown-item" href="#random">
                  V??nh Long
                </a>
                <a className="dropdown-item" href="#random">
                  C?? Mau
                </a>
                <a className="dropdown-item" href="#random">
                  H???u Giang
                </a>
                <a className="dropdown-item" href="#random">
                  T??y Ninh
                </a>
                <a className="dropdown-item" href="#random">
                  Tuy??n Quang
                </a>
                <a className="dropdown-item" href="#random">
                  Thanh H??a
                </a>
                <a className="dropdown-item" href="#random">
                  Nam ?????nh
                </a>
                <a className="dropdown-item" href="#random">
                  H???i D????ng
                </a>
                <a className="dropdown-item" href="#random">
                  Gia Lai
                </a>
                <a className="dropdown-item" href="#random">
                  H?? T??nh
                </a>
                <a className="dropdown-item" href="#random">
                  Ph?? Y??n
                </a>
                <a className="dropdown-item" href="#random">
                  B???c Li??u
                </a>
                <a className="dropdown-item" href="#random">
                  Long An
                </a>
                <a className="dropdown-item" href="#random">
                  ?????ng Th???i
                </a>
                <a className="dropdown-item" href="#random">
                  H?? Nam
                </a>
                <a className="dropdown-item" href="#random">
                  B???c Ninh
                </a>
                <a className="dropdown-item" href="#random">
                  Qu???ng Tr???
                </a>
                <a className="dropdown-item" href="#random">
                  Kon Tum
                </a>
                <a className="dropdown-item" href="#random">
                  S??c Tr??ng
                </a>
                <a className="dropdown-item" href="#random">
                  S??n La
                </a>
                <a className="dropdown-item" href="#random">
                  L???ng S??n
                </a>
                <a className="dropdown-item" href="#random">
                  Qu???ng Ng??i
                </a>
                <a className="dropdown-item" href="#random">
                  M??? Tho
                </a>
                <a className="dropdown-item" href="#random">
                  ?????ng Th??p
                </a>
                <a className="dropdown-item" href="#random">
                  H??ng Y??n
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
