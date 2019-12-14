import React from 'react';

export default function Properties(props) {
    const { property } = props;
    return (
        <div className="property-card">
            <div>
                <img src={property.image_url} width="150px" alt={property.name} />
            </div>
            <div>
                <div>{property.name}</div>
                <div>${property.description}</div>
                <div key={property.property_id} onClick={props.deleteFn}>
                    X
                </div>
            </div>
        </div>
    );
}