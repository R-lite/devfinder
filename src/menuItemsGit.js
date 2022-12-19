import React from "react";
import { TfiBook } from 'react-icons/tfi';
import { SiGitbook } from 'react-icons/si'

const menuItemsGit = [
    {
        path: '/github/overview',
        name: 'Overview',
        icon: <TfiBook />
    },

    {
        path: '/github/repository',
        name: 'Repository',
        icon: <SiGitbook />
    }
]

export default menuItemsGit;