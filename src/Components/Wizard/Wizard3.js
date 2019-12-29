import React from "react";
import { Link } from "react-router-dom";

export default class Wizard3 extends React.Component {
    render() {
        return (
            <div>
                <div>
                    This is Wizard3.
                </div>
                <Link to="/Wizard2">
                    <div>
                        Previous
                    </div>
                </Link>
                <Link to="/Wizard4">
                    <div>
                        Next
                    </div>
                </Link>
            </div>
        );
    }
}