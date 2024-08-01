import React, { useState } from 'react'
import styles from "../styles/pages/payment.module.css"

const Payment = () => {
    const [allData, setAllData] = useState("")
    const [number, setNumber] = useState("")
    const [date, setDate] = useState("")
    const [cvv, setCvc] = useState("")
    const [ok, setOk] = useState(true)

    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        number: '',
        address: '',
        email: '',
        message: ''
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data submitted:', formData);
        // Add any form submission logic here (e.g., sending data to a server)
    };

    const clickTochange = (event) => {
        setAllData(event.target.value)
    }
    const clickTonumber = (event) => {
        setNumber(event.target.value)
    }
    const clickTodate = (event) => {
        setDate(event.target.value)
    }
    const clickTocvc = (event) => {
        setCvc(event.target.value)
    }

    return (
        <>
            <div className={ styles.mainData }>
                <div className={ styles.formContainer }>

                    <h2>Form</h2>
                    <form onSubmit={ handleSubmit }>
                        <div>
                            <label>
                                Name:
                                <input
                                    type="text"
                                    name="name"
                                    value={ formData.name }
                                    onChange={ handleChange }
                                />
                            </label>
                        </div>
                        <div>
                            <label>
                                Surname:
                                <input
                                    type="text"
                                    name="surname"
                                    value={ formData.surname }
                                    onChange={ handleChange }
                                />
                            </label>
                        </div>
                        <div>
                            <label>
                                Number:
                                <input
                                    type="text"
                                    name="number"
                                    value={ formData.number }
                                    onChange={ handleChange }
                                />
                            </label>
                        </div>
                        <div>
                            <label>
                                Address:
                                <input
                                    type="text"
                                    name="address"
                                    value={ formData.address }
                                    onChange={ handleChange }
                                />
                            </label>
                        </div>
                        <div>
                            <label>
                                Email:
                                <input
                                    type="email"
                                    name="email"
                                    value={ formData.email }
                                    onChange={ handleChange }
                                />
                            </label>
                        </div>
                        <div>
                            <label>
                                Message:
                                <textarea
                                    name="message"
                                    value={ formData.message }
                                    onChange={ handleChange }
                                />
                            </label>
                        </div>

                        <div>
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                </div>


                <div className={ styles.cardContainer }>
                    {
                        <div>
                            {
                                ok ?
                                    <div className={ styles.card }>
                                        <div className={ styles.phto }>
                                            {/* <img lazy src={ chip } alt="" /> */ }

                                            <h3>Bank of Baroda</h3>
                                        </div>
                                        <div className={ styles.rccs__number }>{ number === '' ? "•••• •••• •••• ••••" : number }</div>
                                        <div className={ styles.name }>
                                            <div>{ allData === '' ? "Enter your Name" : allData }</div>
                                            <div>
                                                <div>valid thru</div>
                                                <div >{ date === '' ? "••/••" : date }</div>
                                            </div>
                                        </div>
                                    </div>
                                    :
                                    <div className={ styles.back }>
                                        <div className={ styles.inback }></div>
                                        <div className={ styles.outback }>
                                            <h4>{ cvv.length === 3 ? cvv : "cvv " }</h4>
                                        </div>
                                    </div>
                            }
                        </div>
                    }
                    <div className={ styles.main }>
                        <form action="">
                            <div className={ styles.valid }>
                                <label htmlFor="">
                                    Name on card:
                                    <input
                                        value={ allData }
                                        onChange={ clickTochange }
                                        required
                                        type="text"
                                        placeholder='Enter your Name' />

                                </label>

                            </div>
                            <div className={ styles.valid }>

                                <label htmlFor="">
                                    Card Number:
                                    <input
                                        value={ number }
                                        onChange={ clickTonumber }
                                        required
                                        type="text"
                                        placeholder='EnterCard Number' />

                                </label>
                            </div>
                            <div className={ styles.valid }>

                                <label htmlFor="">
                                    Expiration Date:
                                    <input
                                        value={ date }
                                        onChange={ clickTodate }
                                        required
                                        type="month"
                                        placeholder='Valid Thru' />

                                </label>
                            </div>
                            <div className={ styles.valid }>
                                <label htmlFor="name" >
                                    CVC:
                                    <input
                                        onChange={ clickTocvc }
                                        // onBlur={ () => setBack(true) }
                                        onFocus={ () => setOk(!ok) }
                                        value={ cvv }
                                        required
                                        type="text"
                                        placeholder='CVC' />
                                </label>
                                <div className={ styles.validBtn }>
                                    <input type="submit" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Payment
