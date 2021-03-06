import React, { useEffect } from "react";
import "./index.css";
import marc from "../../../assets/img/faces/marc.jpg";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import {
  Button,
  CircularProgress,
  Typography,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { Box, Collapse } from "@material-ui/core";
import dayjs from "dayjs";
import { TimeFormat, DateFormat } from "redux/Constants/TimeConstants";
import { fetchDetailUserPage } from "redux/Actions/UserActions";
import { SET_EDITED } from "redux/Constants/UserConstants";
import { EDIT_USER } from "redux/Constants/UserConstants";
import createAction from "redux/Actions";
import PopupUser from "components/Popup/CUUser";
import { Redirect } from "react-router";

export default function Information() {
  const detailUser = useSelector((state) => state.userReducers.detailUser);
  const isLogin = useSelector((state) => state.credential.isLogin);
  const dataLogin = useSelector((state) => state.credential.dataLogin);
  const isDetail = useSelector((state) => state.userReducers.isDetail);
  const dispatch = useDispatch();
  const useRowStyles = makeStyles({
    root: {
      "& > *": {
        borderBottom: "unset",
      },
    },
  });

  const handleEdit = () => {
    dispatch(
      createAction(EDIT_USER, {
        selectedUser: {
          taiKhoan: detailUser.taiKhoan,
          matKhau: detailUser.matKhau,
          email: detailUser.email,
          hoTen: detailUser.hoTen,
          maLoaiNguoiDung: dataLogin.maLoaiNguoiDung,
          soDt: detailUser.soDT,
          maNhom: "GP01",
        },
        isPopUp: true,
        typePopUp: "C???p Nh???t Th??ng Tin C?? Nh??n",
      })
    );
    dispatch(createAction(SET_EDITED, false));
  };

  useEffect(() => {
    if (isDetail === false && dataLogin.taiKhoan) {
      dispatch(fetchDetailUserPage(dataLogin.taiKhoan));
    }
  }, [isDetail, dataLogin.taiKhoan, dispatch]);

  function Row(props) {
    const { item } = props;
    const [open, setOpen] = React.useState(false);
    const classes = useRowStyles();
    const ngayDat = item.ngayDat;

    return (
      <React.Fragment>
        <TableRow className={classes.root}>
          <TableCell>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell component="th" scope="row">
            {item.maVe}
          </TableCell>
          <TableCell align="right">{item.tenPhim}</TableCell>
          <TableCell align="right">{item.thoiLuongPhim}</TableCell>
          <TableCell align="right">{item.giaVe}</TableCell>
          <TableCell align="right">
            {dayjs(ngayDat).format(`${DateFormat} ${TimeFormat}`)}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box margin={1}>
                <Typography variant="h6" gutterBottom component="div">
                  Th??ng Tin Gh???
                </Typography>
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      <TableCell>H??? Th???ng R???p</TableCell>
                      <TableCell>C???m</TableCell>
                      <TableCell align="right">T??n R???p</TableCell>
                      <TableCell align="right">S??? Gh???</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {item.danhSachGhe?.map((dsGhe, index) => (
                      <TableRow key={index}>
                        <TableCell component="th" scope="row">
                          {dsGhe.tenHeThongRap}
                        </TableCell>
                        <TableCell>{dsGhe.tenCumRap}</TableCell>
                        <TableCell align="right">{dsGhe.tenRap}</TableCell>
                        <TableCell align="right">{dsGhe.tenGhe}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    );
  }

  if (isLogin === true) {
    return (
      <section className="profile tix-container">
        <div className="profile-wrap">
          {/* Profile info */}
          <div style={{ textAlign: "center" }}>
            <Typography style={{ fontWeight: 400 }} variant="h2" gutterBottom>
              Th??ng Tin C?? Nh??n
            </Typography>
          </div>

          {isDetail === true ? (
            <div className="row">
              <div className="profile-img col-sm-3">
                <img src={marc} className="img img-profile" alt="user" />
              </div>
              <div className="profile-info col-sm-9">
                <form>
                  {/* H??? t??n */}
                  <div className="form-group">
                    <label htmlFor="">H??? t??n : </label>
                    <span>{detailUser.hoTen}</span>
                  </div>
                  {/* end */}
                  {/* T??n t??i kho???n */}
                  <div className="form-group">
                    <label htmlFor="">Email : </label>
                    <span>{detailUser.email}</span>
                  </div>
                  {/* end */}
                  {/* T??n t??i kho???n */}
                  <div className="form-group">
                    <label htmlFor="">S??? ??i???n Tho???i : </label>
                    <span>{detailUser.soDT}</span>
                  </div>
                  {/* end */}
                  {/* T??n t??i kho???n */}
                  {/* end */}
                  <Button
                    onClick={handleEdit}
                    variant="outlined"
                    color="default"
                  >
                    C???p nh???t
                  </Button>
                </form>
              </div>
            </div>
          ) : (
            <div style={{ textAlign: "center" }}>
              <CircularProgress color="default" />
            </div>
          )}

          <div className="profile-history">
            <h2>L???CH S??? ?????T V??</h2>
            {isDetail === true ? (
              <div style={{ height: 500, overflow: "auto" }}>
                <TableContainer component={Paper}>
                  <Table aria-label="collapsible table">
                    <TableHead>
                      <TableRow>
                        <TableCell />
                        <TableCell>M?? V??</TableCell>
                        <TableCell align="right">T??n Phim</TableCell>
                        <TableCell align="right">Th???i L?????ng</TableCell>
                        <TableCell align="right">Gi?? V??</TableCell>
                        <TableCell align="right">Ng??y ?????t V??</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {detailUser.thongTinDatVe?.map((item, index) => (
                        <Row key={index} item={item} />
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            ) : (
              <div style={{ textAlign: "center" }}>
                <CircularProgress color="default" />
              </div>
            )}
          </div>
          {/* end profile history */}
        </div>
        <PopupUser />
      </section>
    );
  } else {
    return <Redirect to="/login" />;
  }
}
