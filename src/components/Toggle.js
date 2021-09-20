import Button from "components/Button";
import React, { useState, useEffect, useRef } from "react";
import Baloon from "./Baloon";

let useClickOutside = (handler) => {
  let domNode = useRef();

  useEffect(() => {
    const ballon = document.querySelector(".balloon");

    let maybeHandler = (event) => {
      console.log(event.target)


      if (!domNode.current.contains(event.target) && event.target !== ballon && !event.target.classList.contains("share-link")) {
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
      <Button className="btn bg-light" isPrimary onClick={handleToggle} aria-expanded={isOpen ? "true" : "false"} aria-controls="notifications-label"></Button>
      <Baloon>
        <div className={`balloon ${isOpen ? "active" : ""}`} style={{ top: isButtonY - 190, left: isButtonX - 95 }} id="notifications-label" >
          <ul role="listbox">
            <li>
              <a className="share-link" href="#test">
                List 1
              </a>
            </li>
            <li>
              <a className="share-link" href="#test">
                List 2
              </a>
            </li>
            <li>
              <a className="share-link" href="#test">
                List 3
              </a>
            </li>
          </ul>
        </div>
      </Baloon>
    </div>
  );
}
