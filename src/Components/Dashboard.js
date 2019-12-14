import React, { Component } from 'react';
import axios from "axios";

import Header from './Header';
import Properties from './Properties.js';

export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            properties: {}
        }
        this.delete = this.delete.bind(this);
    }
    delete(property_id) {
        axios
        .delete(`/api/properties/${property_id}`)
        .then(() => 
            this.props.getAllFn()
        );
    }
    render() {
        const mappedProperties = this.state.properties.map(property => {
            return (
                <Properties key={property.property_id} property={property} deleteFn={() => {
                    this.delete(property.property_id)}}/>
                
            );
        });
            return (
            <div>
                <header className="App-header">
                    <Header />
                </header>
                <main>
                    <div>
                        {mappedProperties}
                    </div>
                </main>
            </div>
        )
    }
}