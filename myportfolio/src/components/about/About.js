import React from 'react';
import Style from './About.module.scss';
import Terminal from "./Terminal";
import {Box} from "@mui/material";
import {info} from "../../info/Info";


export default function About() {
    const firstName = info.firstName.toLowerCase();

    function aboutMeText() {
        return <>
            <p style={{color: 'gold',  fontSize:'1.5rem'}}><span style={{color: 'green'}}> I am {firstName} {info.lastName.toLowerCase()} </span></p>

            <p>{info.bio}</p>
            <p>{info.profile}</p>
            <p>{info.expertise.solutionArchitect}</p>
            <p>{info.expertise.fullstackDevelopment}</p>
            <p>{info.expertise.cloudTechnology}</p>
            <p>{info.expertise.problemSolving}</p>
        </>;
    }

    function skillsText() {
        return <>
            <p><span style={{color: 'green'}}>Skills/tools</span></p>
            <p style={{color: 'gold'}}> $ Microsoft Azure </p>
            <ul className={Style.skills}>
                {info.skills.cloud.map((proficiency, index) => <li key={index}>{proficiency}</li>)}
            </ul>

            <p style={{color: 'gold',  fontSize:'1.5rem'}}> $ Frontend </p>
            <ul className={Style.skills}>
                {info.skills.frontend.map((skill, index) => <li key={index}>{skill}</li>)}
            </ul>

            <p style={{color: 'gold',  fontSize:'1.5rem'}}>$ Backend </p>
            <ul className={Style.skills}>
                {info.skills.backend.map((skill, index) => <li key={index}>{skill}</li>)}
            </ul>

            <p style={{color: 'gold',  fontSize:'1.5rem'}}> $ Version Control</p>
            <ul className={Style.skills}>
                {info.skills.versionControl.map((skill, index) => <li key={index}>{skill}</li>)}
            </ul>
        </>;
    }

    function miscText() {
        return <>
            <p style={{color:  'green'}}> hobbies/interests</p>
            <ul>
                {info.hobbies.map((hobby, index) => (
                    <li key={index}><Box component={'span'} mr={'1rem'}>{hobby.emoji}</Box>{hobby.label}</li>
                ))}
            </ul>
        </>;
    }

    return (
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'}>
            <Terminal text={aboutMeText()}/>
            <Terminal text={skillsText()}/>
            <Terminal text={miscText()}/>
        </Box>
    )
}