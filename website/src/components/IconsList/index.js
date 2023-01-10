import React, { useState } from "react";
import { Icon } from "frontik/react/Icon";
import { NativeButton } from "frontik/react/NativeButton";
import styles from "./IconsList.module.css";
import cx from "classnames";

export default () => {
  const [showIconsList, setShowIconsList] = useState(false);

  const showListHandler = () => {
    setShowIconsList(!showIconsList);
  };

  const frontikIconsList = [
    "frontik-home3",
    "frontik-pencil",
    "frontik-image",
    "frontik-images",
    "frontik-camera",
    "frontik-file-picture",
    "frontik-folder-open",
    "frontik-price-tag",
    "frontik-qrcode",
    "frontik-cart",
    "frontik-credit-card",
    "frontik-pushpin",
    "frontik-location2",
    "frontik-clock2",
    "frontik-user",
    "frontik-users",
    "frontik-user-plus",
    "frontik-user-minus",
    "frontik-user-check",
    "frontik-user-tie",
    "frontik-spinner3",
    "frontik-spinner6",
    "frontik-lock",
    "frontik-unlocked",
    "frontik-wrench",
    "frontik-cog",
    "frontik-cogs",
    "frontik-earth",
    "frontik-eye",
    "frontik-eye-plus",
    "frontik-eye-minus",
    "frontik-eye-blocked",
    "frontik-bookmark",
    "frontik-heart",
    "frontik-plus",
    "frontik-minus",
    "frontik-info1",
    "frontik-volume-medium",
    "frontik-volume-mute",
    "frontik-volume-mute2",
    "frontik-volume-increase",
    "frontik-volume-decrease",
    "frontik-loop2",
    "frontik-arrow-up-left2",
    "frontik-arrow-up2",
    "frontik-arrow-up-right2",
    "frontik-arrow-right2",
    "frontik-arrow-down-right2",
    "frontik-arrow-down2",
    "frontik-arrow-down-left2",
    "frontik-arrow-left2",
    "frontik-embed",
    "frontik-google",
    "frontik-facebook",
    "frontik-instagram",
    "frontik-twitter",
    "frontik-youtube",
    "frontik-behance",
    "frontik-linkedin2",
    "frontik-pinterest",
  ];

  return (
      <>
        <NativeButton
          className="toggler"
          variant="contained"
          color="success"
          onClick={showListHandler}
        >
          Show Frontik Icons List
        </NativeButton>
      <br />
      {showIconsList ? (
        <ul className={styles.DemoIcons}>
          {frontikIconsList.map((icon) => (
            <li>
              <Icon size="md" title={icon} name={cx("frontik", icon)} />
              <span className={styles.Name}> {icon}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );
};
