import React, { useState } from 'react';
import styles from '../styles/components/sideBar.module.css';


const SideBar = ({ applyFilters, resetFilters, data }) => {
    const priceList = [
        { label: "Under₹500", value: "0-500" },
        { label: "₹500 To ₹1000", value: "500-1000" },
        { label: "₹1000 To ₹1500", value: "1000-1500" },
        { label: "₹1500 To ₹2000", value: "1500-2000" },
        { label: "₹2000 To ₹2500", value: "2000-2500" },
        { label: "₹2500 Above", value: "2500-" }
    ];

    const [selectedPriceRange, setSelectedPriceRange] = useState('');
    const [selectedSize, setSelectedSize] = useState('');

    const removeFilter = () => {
        resetFilters();
        setSelectedPriceRange('');
        setSelectedSize('');
    };

    const handleSizeButtonClick = (size) => {
        setSelectedSize(size);
        applyFilters(selectedPriceRange, [size]);
    };

    const handlePriceRangeChange = (value) => {
        setSelectedPriceRange(value);
        applyFilters(value, selectedSize ? [selectedSize] : []);
    };

    return (
        <div className={ styles.sidebarContainer }>
            <div className={ styles.removeBtn } onClick={ removeFilter }>
                <button>Remove Filter</button>
            </div>

            <div className={ styles.size }>
                <p>Size</p>
                <div className={ styles.sizeBtn }>
                    { data
                        .flatMap(product => product.checkedCheckBox || [])
                        .filter((value, index, self) => self.indexOf(value) === index)
                        .map((size, index) => (
                            <button
                                key={ index }
                                className={ selectedSize === size ? `${styles.sizeButton} ${styles.active}` : styles.sizeButton }
                                onClick={ () => handleSizeButtonClick(size) }
                            >
                                { size }
                            </button>
                        )) }
                </div>
            </div>

            <div className={ styles.prices }>
                <p>Prices</p>
                <ul className={ styles.pricesContainer }>
                    { priceList.map((ele, index) => (
                        <li key={ index }>
                            <label htmlFor={ `range${index}` }>
                                <input
                                    type="radio"
                                    id={ `range${index}` }
                                    name="priceRange"
                                    value={ ele.value }
                                    checked={ selectedPriceRange === ele.value }
                                    onChange={ () => handlePriceRangeChange(ele.value) }
                                />
                                { ele.label }
                            </label>
                        </li>
                    )) }
                </ul>
            </div>
        </div>
    );
};

export default SideBar;
