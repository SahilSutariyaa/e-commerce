import React from "react";
// eslint-disable-next-line no-unused-vars
import styles from '../../styles/components/commen/title.module.css';

function Title({ title }) {
    return (
        <div className={styles.main}>
            <h3>{ title }</h3>
        </div>
    );
}

export default Title;