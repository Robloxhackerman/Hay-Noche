import Axios from 'axios';
import { useEffect, useState } from 'react';



function Getar() {
    const [getData, setData] = useState("");

    useEffect(() => {
        Axios.get("http://localhost:5000/api/barres")
            .then((res) => {
                setData(res.data.content)
            });
    }, []);
    return {
        
    }
}

export default Getar;