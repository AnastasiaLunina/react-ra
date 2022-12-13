import React from 'react';
import PropTypes from 'prop-types';
import IconSwitch from './IconSwitch';
import CardsView from './CardsView';
import ListView from './ListView';

class Store extends React.Component {
    constructor(props) {
        super(props);

        this.products = props.products;
        this.state = {
            icon: 'view_list',
        };
    }

    render() {
        return (
            <>
            <IconSwitch icon={this.state.icon} onSwitch={(icon) => this.setState({icon})} />
            {
                this.state.icon === 'view_list' ? 
                <CardsView cards={this.products} /> : 
                <ListView cards={this.products} />
            }  
            </>
        )    
    }
}

export default Store;

Store.propTypes = {
    products: PropTypes.array.isRequired
}