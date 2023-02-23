import React from "react";
import { styled } from '@mui/material/styles';
import barCarnesImg from "../../assets/images/portadas/bar_de_carnes.jpeg";

const FullKard = styled('div')({
    backgroundColor: 'yellow',
    height: "230px",
    width: '100%',
    border: '2px solid black',
    boxSizing: 'border-box',
    display: 'flex',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '5px'

});

const TrueKard = styled('div')({
    backgroundColor: 'lightcyan',
    height: "100%",
    width: '100%',
    border: '3px solid black',
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'center'
});

const KardImg = styled('img')({
    backgroundColor: 'darkgreen',
    height: "100%",
    width: '90%',
    boxSizing: 'border-box',

});

const KardInfo = styled('div')({
    backgroundColor: 'mediumseagreen',
    height: "100%",
    width: '110%',
    boxSizing: 'border-box'
});

const KardMoney = styled('div')({
    backgroundColor: 'springgreen',
    height: "75%",
    width: '9%',
    boxSizing: 'border-box',
    marginLeft: '-18px',
    marginRight: '5px',
    display: 'grid',
    gridTemplateRows: '25% 25% 25% 25%',
    maxHeight: '75%',
    justifyContent: 'center',
    alignItems: 'center'
});

const KardHeather = styled('div')({
    height: '30%',
    width: '100%',
    backgroundColor: 'maroon',
    display: "flex",
    boxSizing: 'border-box',
    padding: '7px 10px 5px 10px'
});

const KardVody = styled('div')({
    height: '70%',
    width: '100%',
    backgroundColor: 'maroon',
    display: "flex",
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxSizing: "border-box",
    padding: '10px',
    color: 'black'
});

const KardName = styled('div')({
    height: '100%',
    width: '57%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    display: "flex",
    fontSize: '18px',
    color: 'white'
});

const KardPrice = styled('div')({
    height: '100%',
    width: '40%',
    backgroundColor: 'salmon',
    position: "relative"
});

const KardDay = styled('div')({
    height: '23%',
    width: '100%',
    backgroundColor: 'orange',
    position: 'center',
    boxSizing: 'border-box',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    display: "flex"

});

const KardTime = styled('div')({
    height: '23%',
    width: '100%',
    backgroundColor: 'blue',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    display: "flex"
});

const KardAdress = styled('div')({
    height: '23%',
    width: '100%',
    backgroundColor: 'darkolivegreen',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    display: "flex"
});


function Kard ({name, opens, closes, adress}) {

    return (
        <div>
                <FullKard>
                    <TrueKard>
                        <KardInfo>
                            <KardHeather>
                                <KardName>
                                    <h3>{name}</h3>
                                </KardName>
                                <KardPrice></KardPrice>
                            </KardHeather>
                            <KardVody>
                                <KardDay>
                                    <h3>{name}</h3>
                                </KardDay>
                                <KardTime>
                                    <h4>{opens} -</h4>
                                    <h4> - {closes}</h4>
                                </KardTime>
                                <KardAdress>
                                    <h3>{adress}</h3>
                                </KardAdress>

                            </KardVody>
                        </KardInfo>
                        <KardImg src={barCarnesImg}>

                        </KardImg>
                    </TrueKard>
                    <KardMoney>
                        <h4> X </h4>
                        <h4> X </h4>
                        <h4> X </h4>
                        <h4> X </h4>
                    </KardMoney>
                </FullKard>
        </div>
    );
}

export default Kard;