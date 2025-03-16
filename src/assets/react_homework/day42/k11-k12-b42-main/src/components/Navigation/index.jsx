import { Link } from "react-router-dom";

function Navigation() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Exercise 1</Link>
                </li>
                <li>
                    <Link to="/exercise-2">Exercise 2</Link>
                </li>
                <li>
                    <Link to="/exercise-3">Exercise 3</Link>
                </li>
                <li>
                    <Link to="/exercise-4">Exercise 4</Link>
                </li>
                <li>
                    <Link to="/exercise-5">Exercise 5</Link>
                </li>
                <li>
                    <Link to="/exercise-6">Exercise 6</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;
