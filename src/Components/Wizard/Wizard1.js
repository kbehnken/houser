import React from "react";
import { Link } from "react-router-dom";

export default class Wizard1 extends React.Component {
    render() {
        return (
            <div>
                <div>
                    This is Wizard1.
                </div>
                <Link to="/Wizard2">
                    <div>
                        Next
                    </div>
                </Link>
            </div>
        );
    }
}