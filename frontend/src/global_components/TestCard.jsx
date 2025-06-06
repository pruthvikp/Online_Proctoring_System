import React, { useState } from "react";
import styles from "./testcard.module.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function TestCard({ test, classname, attempted }) {
    const navigate = useNavigate();
    const theme = useSelector((state) => state.themeReducer.mode);
    const [popup, setPopup] = useState(false);

    const hoverEvent = (e) => {
        e.preventDefault();
    };

    const openTest = () => {
        if (!attempted) {
            navigate(`/instructions?id=${test._id}`);
        }
        else {
            setPopup(true)
        }
    };

    return (
        <>
            <div data-theme={`${theme === "light" ? "" : "dark"}`} className={`${styles.card} ${classname} ${attempted ? styles.attempted : ""}`} onClick={openTest} onMouseEnter={hoverEvent}>
                <span>{test.testName} - {test.subject}</span>
                {
                    attempted ?
                        <span>Already Attempted</span>
                        : null
                }
            </div>
            {
                popup ?
                    <div className={styles.popup}>
                        <section>
                            <h2>You have already attempted this test</h2>
                            <div>
                                <button onClick={() => navigate('/report')}>Check Reports</button>
                                <button onClick={() => { setPopup(false) }} className={styles.close}>Close</button>
                            </div>
                        </section>
                    </div> : null
            }
        </>
    );
}