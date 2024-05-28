import blackBox from './image-backgrounds.png';
import EETitle from './EETitle.png';
import PPTitle from './pedalpilotTitle.png';
import UGTitle from './UGTitle.png';
import head from './underground/head.png'
import lowFi1 from './underground/lowfi1.png'
import lowFi2 from './underground/lowfi2.png'
import profile1 from './underground/profile1.png'
import profile2 from './underground/profile2.png'
import nearMe from './underground/nearme.png'
import learnMore from './underground/gallprofile.png'
import friends from './underground/friends.png'
import menu from './underground/menu.png'
import opening from './underground/opening.png'
import search from './underground/search.png'
import signup from './underground/signup.png'
import survey from './pedalPilot/14.png'
import lagoon from './pedalPilot/17.png'
import database from './pedalPilot/20.png'
import subroutes from './pedalPilot/22.png'
import vinny from './vinny.png'
import rocky from './rocky.png'
import bridge from './bridge.png'
import doublestand from './doublestand.png'
import ladder from './ladder.png'
import platforms from './platforms.png'
import trees from './trees.png'
import logo from './logo.png'
import headshot from './headshot.png'
import EElevel from './EERunThrough.mov'


export const images = {
    blackBox,
    EETitle, 
    PPTitle,
    UGTitle,
    head,
    lowFi1,
    lowFi2,
    profile1,
    profile2,
    nearMe,
    learnMore,
    friends,
    menu,
    opening,
    search,
    signup,
    survey,
    lagoon,
    database,
    subroutes,
    vinny,
    rocky,
    bridge,
    doublestand,
    ladder,
    platforms,
    trees,
    logo,
    headshot,
    EElevel,

};

export const undergroundCaro = {
    opening,
    signup,
    profile1,
    profile2,
    menu,
    nearMe, 
    learnMore,
    friends,
    search,
};

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

export const pedalCaro = importAll(require.context('./pedalPilot', false, /\.(png|jpe?g|svg)$/));


