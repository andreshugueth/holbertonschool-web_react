import React from 'react';
import "./Notifications.css";
import close_icon from "./close_icon.png";
import { getLatestNotification } from './utils';

const Notifications = () => {

    const closeEvent = () => {
        console.log("Close button has been clicked");
    }

    const createMarkup = () => {
        return { __html: getLatestNotification() };
    }

    return (
        <div className="Notifications">
            <button
                style={{
                    background: "transparent",
                    border: "none",
                    position: "absolute",
                    right: 20,
                }}
                aria-label="close"
                onClick={closeEvent}
            >
                <img src={close_icon} alt="close-icon" />
            </button>
            <p>Here is the list of notifications</p>
            <ul>
                <li data-priority="default">New course available</li>
                <li data-priority="urgent">New resume available</li>
                <li data-priority="urgent" dangerouslySetInnerHTML={createMarkup()}></li>
            </ul>
        </div>
    );
}

export default Notifications;
