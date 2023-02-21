import React, {useEffect, useState} from 'react';
import { Helmet } from 'react-helmet';
import { styled } from '@mui/material/styles';
import TopBar from "../components/header/TopBar";
import BottomBar from "../components/footer/BottomBar";
import Kard from "../components/kards/Kard";
import axios from "axios";

const BiggestKontainer = styled('div')({
    backgroundColor: 'hotpink',
    height: '100%',
    width: '100%',
    position: "relative",
    alignItems: 'center',
    marginTop: '75px',
    marginBottom: '65px',
    justifyContent: 'space-between',
    border: '2px solid black',
    boxSizing: 'border-box',
    gap: '9px',
    flexDirection: 'column'
});


const KardKontainer = styled('div')({
    backgroundColor: 'orange',
    height: '100%',
    width: '100%',
    position: "relative",
    alignItems: 'center',
    justifyContent: 'space-between',
    border: '2px solid black',
    boxSizing: 'border-box',
    gap: '9px',
    flexDirection: 'column'
});

const KardSpacer = styled('div')({
    backgroundColor: 'hotpink',
    height: '9px',
    width: '100%'
});

const KardUpSpacer = styled('div')({
    backgroundColor: 'hotpink',
    height: '9px',
    width: '100%'
});

function Restaurants (props) {
    const [barresProfile, setBarresProfile] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchBarresProfile = () => {
        console.log("respondo");
        axios
            .get('http://10.9.100.88:5000/api/barres') // con localhost no le gusta andar
            .then(resp => {
                setBarresProfile(resp.data); // se carga la data
            });

    };

    useEffect(() => {
        fetchBarresProfile();
        setIsLoading(false); // con esto sabes que terminaron de cargar
    }, []); // this [] is for if any changesa rise, it will update

    function renderLoading() {
        return (
            <div className="container w-full h-full flex items-center justify-center">
                <div className="animate-spin w-min h-min">
                </div>
            </div>
        );
    }

    return (
        <BiggestKontainer> {isLoading
            ? renderLoading()
            : barresProfile.map((k, index) => {
                return (
                    <div
                        key={k.barres_id}
                    >
                        <Helmet>
                            <title>Hay Noche</title>
                        </Helmet>
                        <TopBar> </TopBar>

                        <KardKontainer>
                            <Kard/>
                            <KardSpacer></KardSpacer>

                        </KardKontainer>

                        <BottomBar> </BottomBar>
                    </div>
                );
            })}
        </BiggestKontainer>
    );
}

export default Restaurants;