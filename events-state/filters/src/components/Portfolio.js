import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Toolbar from './Toolbar';
import ProjectList from './ProjectList.js';

class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.filters = ["All", "Websites", "Flayers", "Business Cards"];
        this.state = {
            selected: "All"
        }
    }

    render() {
        return (
            <div>
                <Toolbar 
                        filters={this.filters}
                        selected={this.state.selected}
                        onSelectFilter={(filter) => this.setState({
                                        selected: filter
                    })}/>
                <ProjectList 
                        projects={
                            this.state.selected === 'All' ? 
                            this.props.data :
                            this.props.data.filter(filter => filter.category === this.state.selected)
                        }/>
            </div>
        );
    }
}

export default Portfolio;

Portfolio.propTypes = {
    filters: PropTypes.array
}