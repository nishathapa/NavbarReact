import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as GoIcons from "react-icons/go";
import * as FiIcons from "react-icons/fi";
import * as DiIcons from "react-icons/di"


export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <GoIcons.GoLogoGithub />,
        cName: 'side-text'
    },
    {
        title: 'Home',
        path: '/',
        icon: <DiIcons.DiGitCommit />,
        cName: 'side-text'
    },
    {
        title: 'Reports',
        path: '/reports',
        icon: <FaIcons.FaGit/>,
        cName: 'side-text'
    },
    {
        title: 'Products',
        path: '/products',
        icon: <FaIcons.FaGitAlt />,
        cName: 'side-text'
    },
    {
        title: 'Team',
        path: '/team',
        icon: <FiIcons.FiGithub />,
        cName: 'side-text'
    },
    {
        title: 'Messages',
        path: '/messages',
        icon: <FaIcons.FaGithub />,
        cName: 'side-text'
    }
    

]