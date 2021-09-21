import React, { useState, useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";

import Button from "components/Button";
import Baloon from "./Baloon";

import facebookIcon from 'assets/images/icon-facebook.svg'
import twitterIcon from 'assets/images/icon-twitter.svg'
import pinterestIcon from 'assets/images/icon-pinterest.svg'

let useClickOutside = (handler) => {
  let domNode = useRef();

  useEffect(() => {
    const ballon = document.querySelector(".balloon");
    const ballonContent = document.querySelector(".balloon__content");
    const ballonContentShare = document.querySelector(".balloon__content__share");
    const listBox = document.querySelector(".listBox");

    let maybeHandler = (event) => {


      if (
        !domNode.current.contains(event.target) &&
        event.target !== ballonContentShare &&
        event.target !== listBox &&
        event.target !== ballonContent &&
        event.target !== ballon &&
        !event.target.classList.contains("share-link") &&
        !event.target.classList.contains("icon-link")
      ) {
        handler();
      }
    };
    document.addEventListener("mousedown", maybeHandler);

    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  });

  return domNode;
};
export default function Toggle() {
  const [isOpen, setIsOpen] = useState(false);
  const [isButtonY, setIsButtonY] = useState(null);
  const [isButtonX, setIsButtonX] = useState(null);

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 580px)' })
  const isBigScreen = useMediaQuery({ query: '(min-width: 580px)' })

  const handleToggle = () => {
    const elem = document.querySelector('.btn');
    setIsButtonY(elem.getBoundingClientRect().y)
    setIsButtonX(elem.getBoundingClientRect().x)
    setIsOpen(!isOpen);
  };

  let domNode = useClickOutside(() => {
    setIsOpen(false);

  });


  return (
    <div ref={domNode} className="toggle-social-media">
      <Button className={`btn bg-light ${isOpen ? "active" : ""}`} isPrimary onClick={handleToggle} ariaExpanded={isOpen ? "true" : "false"} ariaControls="notifications-label" ariaLabel="share article"></Button>
      {isTabletOrMobile && (
        <div className={`balloon ${isOpen ? "active" : ""}`} style={{ top: -17, left: -258 }} id="notifications-label">
          <div className="balloon__content">
            <span className="balloon__content__share">Share</span>
            <ul role="listbox">
              <li>
                <a className="share-link" href="#test">
                  <img className="icon-link" src={facebookIcon} alt="" />
                </a>
              </li>
              <li>
                <a className="share-link" href="#test">
                  <img className="icon-link" src={twitterIcon} alt="" />
                </a>
              </li>
              <li>
                <a className="share-link" href="#test">
                  <img className="icon-link" src={pinterestIcon} alt="" />
                </a>
              </li>
            </ul>
            <Button className={`btn btn-click bg-light ${isOpen ? "active" : ""}`} isPrimary onClick={handleToggle} aria-expanded={isOpen ? "true" : "false"} aria-controls="notifications-label" aria-label="share article"></Button>
          </div>
        </div>
      )}
      {isBigScreen && (
        <Baloon>
          <div className={`balloon ${isOpen ? "active" : ""}`} style={{ top: isButtonY - 75, left: isButtonX - 95 }} id="notifications-label">
            <div className="balloon__content">
              <span className="balloon__content__share">Share</span>
              <ul role="listbox">
                <li>
                  <a className="share-link" href="#test">
                    <img className="icon-link" src={facebookIcon} alt="" />
                  </a>
                </li>
                <li>
                  <a className="share-link" href="#test">
                    <img className="icon-link" src={twitterIcon} alt="" />
                  </a>
                </li>
                <li>
                  <a className="share-link" href="#test">
                    <img className="icon-link" src={pinterestIcon} alt="" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Baloon>
      )}
    </div>
  );
}
