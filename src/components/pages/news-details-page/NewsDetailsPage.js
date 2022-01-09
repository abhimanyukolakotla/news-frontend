import { useLocation } from "react-router-dom";
export default function NewsDetailsPage() {
    let location = useLocation();
    console.log(location);
    return (<div>
        <iframe src={location.search.slice(1, location.search)} width="100%" height="100%" />
    </div>);
}
