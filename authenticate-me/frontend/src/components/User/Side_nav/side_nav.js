import React from "react";
import './side_nav.css';
import { Link } from "react-router-dom";
import CreateNotebookForm from "../../NotebookFormPage/CreateNotebookForm";

const UserSideNav =() => {

    return (
            <div className="side-nav">
            <div className="nav-buttons">
                <div className="user-profile">
                <div className="get-notebook">
                    <CreateNotebookForm />
                <div className="create-note">
                <div className="menu-buttons">
                    <div className="Notebooks">
                        <Link className="main-button" to="/notebooks"><button className="button">Notebooks</button>
                        </Link>
                    <div className="Notes">
                        <Link className="main-button" to="/notes"><button className="button">Notes</button>
                        </Link>
                    <div className="Logout">
                        <Link className="main-button" to="/"><button className="button">Logout</button>
                        </Link>
                    </div>
                    </div>
                    </div>

                </div>
                </div>
                </div>
                </div>
            </div>
            </div>
 
    )
}

export default UserSideNav;