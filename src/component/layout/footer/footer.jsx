import React from "react";
import "./footer.scss";

import phoneIcon from 'assets/icon/footer/icon-phone.png'
import emailIcon from 'assets/icon/footer/icon-email.png'
import locationIcon from 'assets/icon/footer/icon-location.png'
import geolocation from 'assets/icon/footer/icon-geolocation.png'
import facebookIcon from 'assets/icon/footer/icon-facebook.png'
import telegramIcon from 'assets/icon/footer/icon-telegram.png'

import logo from 'assets/logo/fe/logo-rupp.svg'
import title from 'assets/logo/fe/title-rupp.svg'
import styled from "styled-components";

function Footer({ loadingRoute }) {
  return (
    <FooterStyled className={loadingRoute ? "footer" : "footer footer-none-display"}>

      <ul className="footer-content row">

        <ul className="col-md-4 col-sm-12 ps-0">
          <p className={"footer-header"}>STEM OFFICE</p>

          <li className="d-flex align-items-start">
            <img
              className="footer-icon me-2"
              alt='locationIcon'
              src={locationIcon}
            />
            <a rel={"noreferrer"} className="my-0 footer-address" href="https://goo.gl/maps/QkXwMm4K1JksW6JV8" target="_blank">
              Faculty of Engineering<br/>
              Room 103, STEM Building,<br/>
              Royal University of Phnom Penh (Campus 1), Russian Federation Blvd (110), Phnom Penh
            </a>
          </li>
        </ul>
        <ul style={{padding: "1.5em 0"}} className="col-md-4 col-sm-12 d-lg-flex justify-content-md-center px-md-5 px-0 py-lg-0">

          <div>
            <p className={"footer-header"}>CONTACT US</p>

            <li className="d-flex">
              <img
                className="footer-icon me-2"
                alt='emailIcon'
                src={emailIcon}
              />

              <a className="my-0" style={{textDecoration: 'none', color: "#FFF"}} href="mailto: fe.Info@rupp.edu.kh">fe.Info@rupp.edu.kh</a>
            </li>
            <li className="d-flex my-2">
              <img
                className="footer-icon me-2"
                alt='phoneIcon'
                src={phoneIcon}
              />

              <a className="my-0" style={{textDecoration: 'none', color: "#FFF"}} href="tel: 096 328 4995">096 328 4995</a>
            </li>
            <li className="d-flex">

              <img
                className="footer-icon me-2"
                src={geolocation}
                alt={""}
              />

              <a className="my-0" style={{textDecoration: 'none', color: "#FFF"}} href="https://goo.gl/maps/QkXwMm4K1JksW6JV8" target="_blank" rel="noreferrer">Find Location</a>
            </li>
          </div>
        </ul>
        <ul className="follow_us col-md-4 col-sm-12 pe-0 d-flex justify-content-md-end align-items-center px-0">
          <li className="text-end me-1">
            <p className={"footer-header follower-margin"}>
              FOLLOW US

            </p>
          </li>
          <a href="https://www.facebook.com/rupp.fe/">
            <img
              className="footer-icon follow_us mx-1"
              src={facebookIcon}
              alt={""}
            />
          </a>
          <a href="https://t.me/joinchat/AAAAAEZ8nVE7UE2GLvVVeg">
            <img
              className="footer-icon follow_us mx-1"
              src={telegramIcon}
              alt={""}
            />
          </a>
        </ul>
        <li className="rupp-logo">
          <a href="https://rupp.edu.kh">
            <img className={"logo"} src={logo} alt="" />
            <img className={"title"} src={title} alt="" />
          </a>
        </li>
        <hr className={"underline"}/>
        <li className={"copyrightName"}>

          <p>
            Copyright © 2022 Faculty of Engineering
          </p>
        </li>
      </ul>

      {/*<ul className="copyright py-3 row">*/}
      {/*  <ul className="col-md-4" />*/}
      {/*  <ul className="col-md-4 ">*/}
      {/*    <li className="text-center">*/}
      {/*      Copyright © 2022 Faculty of Engineering*/}
      {/*    </li>*/}
      {/*  </ul>*/}

      {/*  <ul className="d-flex justify-content-lg-end justify-content-center align-items-center col-md-4 pe-5 my-2 my-md-0">*/}
      {/*    <li className="mx-2">Terms</li>*/}
      {/*    <li className="mx-2">Privacy</li>*/}
      {/*    <li className="mx-2">Security</li>*/}
      {/*  </ul>*/}
      {/*  */}
      {/*</ul>*/}

    </FooterStyled>
  );
}

const FooterStyled = styled.footer
    `
      font-family: var(--header-font);
      font-weight: 500;
      .footer-header
      {
        color:#CBCBCB;
        padding-left:0;
        font-family: var(--font-manrope);
        font-weight:bold;
        letter-spacing: 0.2em;
      }
      .follower-margin
      {
        margin-bottom: 0;
      }
    `

export default Footer;
