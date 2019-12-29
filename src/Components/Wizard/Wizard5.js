import React from "react";
import { Link } from "react-router-dom";

export default class Wizard5 extends React.Component {
    render() {
        return (
            <div>
                <div>
                    This is Wizard5.
                </div>
                <Link to="/Wizard4">
                    <div>
                        Previous
                    </div>
                </Link>
            </div>
        );
    }
}