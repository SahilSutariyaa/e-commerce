import React, { useEffect, useState } from 'react'
import styles from "../../styles/components/commen/downToUp.module.css"
import { FaArrowUp } from "react-icons/fa";

function DownToUp() {

    const [scroll, setScroll] = useState(window.scrollY)


    function handleTop() {
        window.scroll(0, 0)
    }


    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY)
        }

        window.addEventListener("scroll", handleScroll)
    }, [scroll])


    // console.log(scroll)
    return (
        <div >
            { scroll > 400 && <button className={ styles.container } onClick={ handleTop }><FaArrowUp /></button> }
        </div>
    )
}

export default DownToUp

