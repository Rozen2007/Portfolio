import React, { Component } from "react";
import iconEmail from "Icons/icon-email.png";
import iconLinkedIn from "Icons/icon-linkedin.png";
import iconGithub from "Icons/icon-github.png";
import iconResume from 'Icons/icon-resume.png';
import iconEmailWhite from "Icons/icon-email-white.png";
import iconLinkedInWhite from "Icons/icon-linkedin-white.png";
import iconGithubWhite from "Icons/icon-github-white.png";
import iconResumeWhite from 'Icons/icon-resume-white.png';
import Div from "Common/components/div";
import styles from "./contact_component.module.scss";

const ContactComponent = ({ className, isWhite, hideResume }) => {
  return (
    <Div
      row
      justify
      align
      className={`${styles.social_container} ${className}`}
    >
      <a className={styles.icon_link} target="_blank" href="https://github.com/Rozen2007">
        <img
          src={isWhite ? iconGithubWhite : iconGithub}
          className={styles.icon}/>
      </a>
      {/* <a className={styles.icon_link} target="_blank" href="https://www.linkedin.com/in/notyet/">
        <img
          src={isWhite ? iconLinkedInWhite : iconLinkedIn}
          className={styles.icon}
        />
      </a> */}
      <a className={styles.icon_link} target="_blank" href="mailto:rozendeedi.1205@pcsnerul.in">
        <img
          src={isWhite ? iconEmailWhite : iconEmail}
          className={styles.icon}
        />
      </a>
      {/* {
        !hideResume && (
          <a className={styles.icon_link} target="_blank" href="https://drive.google.com">
          <img
            src={isWhite ? iconResumeWhite : iconResume}
            className={styles.icon}
          />
        </a>  
        )
      } */}
    </Div>
  );
};

export default ContactComponent;
