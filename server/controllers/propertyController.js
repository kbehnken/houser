module.exports = {
    getProperties: async (req, res, net) => {
        const db = req.app.get('db');
        const userProperty = await db.get_properties([req.session.user.id]);
        return res.status(200).send(userProperty);
    },
    addProperty: async (req, res, next) => {
        const { image_url, name, loan, monthly_mortgage, recommended_rent, desired_rent, street_address, city, state, postal_code, user_id, description } = req.body;
        const { property_id } = req.session.user;
        const db = req.app.get('db');
        const userProperty = await db.add_property([image_url, name, loan, monthly_mortgage, recommended_rent, desired_rent, street_address, city, state, postal_code, user_id, description, property_id]);
        return res.status(200).send(userProperty);
    },
    deleteProperty: (req, res, next) => {
        const { property_id } = req.params;
        const db = req.app.get("db");
        db.delete_property(property_id)
        .then((properties) => {
            res.status(200).send(properties)
        })
        .catch(err => {
            res.status(500).send({errorMessage: "Something went wrong."});  
            console.log(err);
        });
    }
};