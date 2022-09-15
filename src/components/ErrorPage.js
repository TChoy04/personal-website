import "./ErrorPage.css"
import {BrowserRouter as Router, Link} from "react-router-dom";

const ErrorPage = () =>{
return <div class="error">
    <h1>Error 404:
        Page not Found
    </h1>
    

    <a href=".." class="error-link"> Homepage </a>

</div>
}
export default ErrorPage;
