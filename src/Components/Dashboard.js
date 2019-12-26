import React, { Component } from 'react';
import axios from "axios";
import Properties from './Properties.js';
import { Link } from 'react-router-dom';

export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            properties: []
        }
        this.deleteProperty = this.deleteProperty.bind(this);
        this.getProperties = this.getProperties.bind(this);
    }

    componentDidMount() {
        this.getProperties();
    }
    getProperties() {
        axios
        .get('/api/properties')
        .then(property => {
            this.setState( {
                properties: property.data
                
            });
        })
        .catch(err => alert(err));
    }
    deleteProperty(property_id) {
        axios
        .delete(`/api/properties/${property_id}`)
        .then(() => 
            this.getProperties()
        );
    }
    render() {
        const mappedProperties = this.state.properties.map(property => {
            return (
                <Properties key={property.property_id} property={property} deletePropertyFn={this.deleteProperty}/>
            );
        });
        return (
            
            <div>
                <div className="main-container">
                    <main>
                        <div className="dashboard-container">
                            
                                <button className='light-green-button'>
                                    Add new property
                                </button>
                            
                           
                        <br />
                        <br />
                        <div>
                            List properties with "desired rent" greater than: $
                            <input type="number" placeholder="0"></input>
                            <button className='light-green-button'>
                                Filter
                            </button>
                            <button className='dark-green-button'>
                                Reset
                            </button>
                        </div>
                        <hr />
                        <div>
                            Home Listings
                        </div>
                        <div>
                            {mappedProperties}
                        </div>
                        </div>
                    </main>
                </div>
            </div>
            
        )
    }
}