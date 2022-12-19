import React from "react";
import {
    FaGithub,
    FaLinkedinIn,
    FaBehance
} from 'react-icons/fa';
import {
    IoIosChatboxes,
    IoIosPaper,
    IoIosPerson
} from 'react-icons/io'

const menuItems = [
    {
        path: "/",
        name: "Overview",
        icon: <IoIosPerson />
    },

    {
        path: "/resume",
        name: "Resume",
        icon: <IoIosPaper />
    },

    {
        path: "/github/overview",
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