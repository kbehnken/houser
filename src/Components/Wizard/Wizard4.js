import React from "react";
import { Link } from "react-router-dom";

export default class Wizard4 extends React.Component {
    render() {
        return (
            <div>
                <div>
                    This is Wizard4.
                </div>
                <Link to="/Wizard3">
                    <div>
                        Previous
                    </div>
                </Link>
                <Link to="/Wizard5">
                    <div>
                        Next
                    </div>
                </Link>
            </div>
        );
    }
}