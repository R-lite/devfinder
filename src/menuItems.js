import React from "react";
import {
    FaGithub,
    FaLinkedinIn,
    FaBehance,
    FaSistrix
} from 'react-icons/fa';
import {
    IoIosChatboxes,
    IoIosPaper
} from 'react-icons/io';

const menuItems = [
    {
        path: "",
        name: "Search",
        icon: <FaSistrix />
    },

    {
        path: "/resume",
        name: "Resume",
        icon: <IoIosPaper />
    },

    {
        path: "github",
        name: "Github",
        icon: <FaGithub />
    },

    {
        path: "/linkedin",
        name: "LinkedIn",
        icon: <FaLinkedinIn />
    },

    {
        path: "/behance",
        name: "Behance",
        icon: <FaBehance />
    },

    {
        path: "/contact",
        name: "Contact",
        icon: <IoIosChatboxes />
    }
]

export default menuItems;