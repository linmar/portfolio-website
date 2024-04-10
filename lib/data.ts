import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import perlCodeImg from "@/public/perl-code.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Murex Developer",
    location: "Berlin, Germany",
    description:
      "Initially I was hired to build the technical infrastructure for the EWU/Y2K test-center which mirrored all financial markets applications for this German bank. Later, I was part of the team to select Murex MxG2000 v2.10 and was part of the core team to implement it. I have developed a universal interface system for all kinds of financial data to integrate with Murex (internal and external providers, trade and static data).",
    icon: React.createElement(CgWorkAlt),
    date: "1998 - 2004",
  },
  {
    title: "Murex Environment Manager",
    location: "London, United Kingdom",
    description:
      "In London I was responsible for the environment management of 32 Murex environments. In order to do this, I have developed an environment management system (MxENV) which allowed me to do this single-handed.",
    icon: React.createElement(CgWorkAlt),
    date: "2004 - 2005",
  },
  {
    title: "Murex MxML and Market Data Developer",
    location: "Paris, France and New York, USA",
    description:
      "When joining Murex (vendor) in Paris I was taking care of one of the first Murex Mx.3 implementations for a large Dutch bank. As the only permanent on-site resource I was the link between the on-location team of the integrator, the client and the vendor. After completion I worked on several other projects, mainly as an MxML and Market Data Developer.",
    icon: React.createElement(CgWorkAlt),
    date: "2005 - 2008",
  },
  {
    title: "Murex Developer",
    location: "Zürich, Switzerland",
    description:
      "This was with the same team, which implemented Murex Mx.3 for the Dutch bank. I was hired to build some of the MxML interfaces and ended up designing, implementing and rewriting all of them.",
    icon: React.createElement(CgWorkAlt),
    date: "2008 - 2010",
  },
  {
    title: "Murex Technical Lead",
    location: "Amsterdam, Netherlands",
    description:
      "Intially I was implementing new MxML-interfaces but then was asked to be the technical lead for the move of the Mx.3 application from the datacenter in Singapore to Amsterdam. Part of this was a lot of refactoring, including a full rewrite of the EOD processes. After successfully completing this I became technical lead for the team and moved from Development to Support.",
    icon: React.createElement(CgWorkAlt),
    date: "2010 - 2015",
  },
  {
    title: "Global Murex Support Lead",
    location: "Stockholm, Sweden",
    description:
      "Managing the Murex FX technical and functional support, which included development and configuration management. Leading a team of 24 professionals, employing Agile/Scrum methodologies to ensure streamlined processes and effective collaboration. Establishing Murex support structures to enhance system performance and reliability",
    icon: React.createElement(CgWorkAlt),
    date: "2015 - 2016",
  },
  {
    title: "Murex Environment Manager",
    location: "Köln, Deutschland",
    description:
      "For personal reasons I returned to Germany to work on this small project. I was responsible for managing the test environments, production support and advising on MxML interfaces.",
    icon: React.createElement(CgWorkAlt),
    date: "2016 - 2017",
  },
  {
    title: "Murex Technical Lead",
    location: "Amsterdam, Netherlands",
    description:
      "Returning to my Dutch client of 2005 I supported the in-sourcing of the Murex support (from an offshore team in India back to Amsterdam). I have implemented AppDynamics for Murex and later joined the team to implement Application Management for various applications in the bank.",
    icon: React.createElement(CgWorkAlt),
    date: "2018 - 2019",
  },
  {
    title: "Technical Lead Murex Practise",
    location: "Stockholm, Sweden",
    description:
      "We visited all Murex clients in the Nordic region and talked about common challanges and how to solve them.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2020",
  },
  {
    title: "Markets, Wealth and Corporate Lead",
    location: "Bangkok, Thailand",
    description:
      "At this bank I took on the responsibility of leading four diverse DevOps Squads, each focusing on a different aspect of the bank's technological landscape. These teams included: Financial Markets - Murex MX.3, Market Risk IT, ETL/BI - DataStage and Cyber Crime / AML / Online Fraud / AWS Cloud Migration.",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2023",
  },
  {
    title: "Senior Murex Consultant",
    location: "Singapore",
    description:
      "In my role at this bank, I am involved in a range of cloud initiatives aimed at enhancing our bank's technology infrastructure. My journey began with a project focused on improving the high-performance computing (MPC/HPC) setup. A significant part of my role involves participating in the team responsible for transitioning parts of the Murex production system to AWS cloud. This important migration leverages a fully automated DevOps approach, utilizing tools such as CloudFormation, Jenkins, and Jira. Additionally, I'm contributing to the evolution of our setup through database virtualization technologies and enhancing security measures.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "TradeDB",
    description:
      "TradeDB is a high-performance, high-availability interface system to feed trade and static data from exchanges into Murex MxG2000 and Mx.3.",
    tags: ["Perl", "Sybase", "Murfi", "MxML", "Solaris", "Unix", "MxG2000", "Mx.3"],
    imageUrl: perlCodeImg, //corpcommentImg,
  },
  {
    title: "MxENV",
    description:
      "System to easily manage and monitor Murex Mx.3 systems.",
    tags: ["Perl", "RHEL", "XmlRequestScript", "Automation", "Jenkins", "MxG2000", "Mx.3", "CI/CD"],
    imageUrl: perlCodeImg, //rmtdevImg,
  },
] as const;

export const skillsData = [
  "Murex",
  "Mx.3",
  "Leadership",
  "Agile Scrum",
  "DevOps",
  "CI/CD",
  "Automation",
  "Monitoring",
  "Jenkins",
  "Environment Management",
  "EOD",
  "Control-M",
  "Autosys",
  "Tivoli Workload Scheduler",
  "MxML Exchange",
  "MPC",
  "HPC",
  "Grid Computing",
  "SQL",
  "GoLang",
  "Perl",
  "Typescript",
  "Next.js",
  "Python",
  "React",
  "TailwindCSS",
  "ITIL",
] as const;
