import React from "react";
import styles from "./ShowCertifcate.module.css";
import Image from "next/image";

function ShowCertificates({ imgLink, logo, about, verifyLink }) {
    return (
        <div className={styles.container}>
            <div className={styles.imgCtr}>
                <Image src={imgLink} alt={about} />
            </div>
            <div className={styles.about}>
                <Image src={logo} alt={about} />
                <h3>{about}</h3>
                <button>
                    <a href={verifyLink} rel="noreferrer" target="_blank">
                        verify
                    </a>
                </button>
            </div>
        </div>
    );
}

export default ShowCertificates;