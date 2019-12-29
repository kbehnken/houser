import React from "react";

export default function Property(props) {
    const { property, deletePropertyFn } = props;

    return (
        <div className="property-card">
            <div className="prop-img">
                <img src={property.image_url} width="250px" alt={property.name} />
            </div>
            <div className="prop-desc">
                <label>
                    {property.name}
                </label>
                <div>
                    {property.description}
                </div>
            </div>
            <div className="prop-details">
                <div>
                    <label>
                        Loan: 
                    </label>
                    {" "}${property.loan}
                </div>
                <div>
                    <label>
                        Monthly Mortgage: 
                    </label>
                    {" "}${property.monthly_mortgage}
                </div>
                <div>
                    <label>
                        Recommended Rent: 
                    </label>
                    {" "}${property.recommended_rent}
                </div>
                <div>
                    <label>
                        Desired Rent: 
                    </label>
                    {" "}${property.desired_rent}
                </div>
                <div>
                    <label>
                        Street Address: 
                    </label>
                    {" "}{property.street_address}
                </div>
                <div>
                    <label>
                        City: 
                    </label>
                    {" "}{property.city}
                </div>
                <div>
                    <label>
                        State: 
                    </label>
                    {" "}{property.state}
                </div>
                <div>
                    <label>
                        Postal Code: 
                    </label>
                    {" "}{property.postal_code}
                </div>
            </div>
            <div className="delete" key={property.property_id} onClick={() => {
                deletePropertyFn(property.property_id)
            }}>
                X
            </div>
            <div className="clear-float">
                
            </div>
        </div>
    );
}