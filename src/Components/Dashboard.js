import React, { Component } from 'react';
import axios from "axios";
import Property from './Property';
import { HashRouter as Router } from 'react-router-dom';
import routes from '../routes';

export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            properties: [],
            addingProperty: false
        }
        this.toggleAddingProperty = this.toggleAddingProperty.bind(this);
        this.getProperties = this.getProperties.bind(this);
        this.deleteProperty = this.deleteProperty.bind(this);
    }

    componentDidMount() {
        this.getProperties();
    }
    toggleAddingProperty() {
        const addingProperty = !this.state.addingProperty;
        this.setState( {
            addingProperty: addingProperty
        });
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
        const { addingProperty } = this.state;
        const mappedProperties = this.state.properties.map(property => {
            return (
                <Property key={property.property_id} property={property} deletePropertyFn={this.deleteProperty}/>
            );
        });
        return (
            <Router>
            <div>
                <div className="main-container">
                    <main>
                        {addingProperty ?
                            (
                                <div className="dashboard-container">
                                    {routes}
                                </div>
                            ):
                            (
                                <div className="dashboard-container">
                                    <button className='light-green-button' onClick={this.toggleAddingProperty}>
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
                            ) 
                        }
                    </main>
                </div>
            </div>
            </Router>
        )
    }
}