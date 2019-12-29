import React from "react";
import { Link } from "react-router-dom";

export default class Wizard2 extends React.Component {
    render() {
        return (
            <div>
                <div>
                    This is Wizard2.
                </div>
                <Link to="/">
                    <div>
                        Previous
                    </div>
                </Link>
                <Link to="/Wizard3">
                    <div>
                        Next
                    </div>
                </Link>
            </div>
        );
    }
}