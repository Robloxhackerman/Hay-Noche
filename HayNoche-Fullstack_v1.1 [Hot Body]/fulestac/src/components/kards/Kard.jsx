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
    padding: '10px'
});

const KardName = styled('div')({
    height: '100%',
    width: '60%',
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
    backgroundColor: 'yellow',
    position: 'center',
    boxSizing: 'border-box',

});

const KardTime = styled('div')({
    height: '23%',
    width: '100%',
    backgroundColor: 'blue'
});

const KardAdress = styled('div')({
    height: '23%',
    width: '100%',
    backgroundColor: 'darkolivegreen'
});


function Kard (props) {

    return (
        <div>
                <FullKard>
                    <TrueKard>
                        <KardInfo>
                            <KardHeather>
                                <KardName>
                                    <h1> MBC </h1>
                                </KardName>
                                <KardPrice></KardPrice>
                            </KardHeather>
                            <KardVody>
                                <KardDay>

                                </KardDay>
                                <KardTime>

                                </KardTime>
                                <KardAdress>

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