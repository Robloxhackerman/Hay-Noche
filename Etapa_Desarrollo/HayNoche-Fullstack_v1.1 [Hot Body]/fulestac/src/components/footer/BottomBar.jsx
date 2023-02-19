import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {styled} from "@mui/material/styles";

const MiEstilo = styled('div')({
    bottom: '0',
    position: 'fixed',
    backgroundColor: 'lightgreen',
    width: '100%',
    height: '60px',
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center"
});

const ButtonDiv = styled('a')({
    textDecoration: 'none',
    color: 'black'
});

export default function BottomBar() {
    const [value, setValue] = React.useState(0);

    return (
        <MiEstilo>
            <ButtonDiv>
                <h1>
                    <div>
                        login
                    </div>
                </h1>
            </ButtonDiv>

            <ButtonDiv href='/'>
                <div>
                    <h1>
                        home
                    </h1>
                </div>
            </ButtonDiv>

            <ButtonDiv>
                <h1>
                    <div>
                        map
                    </div>
                </h1>
            </ButtonDiv>
        </MiEstilo>
    );
}