import React from "react";
import { Grid } from "@material-ui/core";
import ProjectItem from "./ProjectItem";

const projectData = [
  {
    avatarSrc: "/Images/Avatars/aiony-haust-3TLl_97HNJo-unsplash.jpg",
    clientName: "Valerija",
    projectName: "SableMercury",
    startDate: "2021-06-10",
    address: "612 Loucks Dr Russell ON K4R 1B7",
    imgSrc: "/Images/Houses/webaliser-_TPTXZd9mOo-unsplash.jpg",
  },
  {
    avatarSrc: "/Images/Avatars/austin-wade-X6Uj51n5CE8-unsplash.jpg",
    clientName: "Marie",
    projectName: "LiardCopper",
    startDate: "2021-07-13",
    address: "240 Foxhaven Dr Sherwood Park AB T8A 6L1",
    imgSrc: "/Images/Houses/sieuwert-otterloo-aren8nutd1Q-unsplash.jpg",
  },
  {
    avatarSrc: "/Images/Avatars/joseph-gonzalez-iFgRcqHznqg-unsplash.jpg",
    clientName: "Faddey",
    projectName: "VermilionGold",
    startDate: "2021-06-20",
    address: "15317 21 Ave Surrey BC V4A 6A8",
    imgSrc: "/Images/Houses/alan-j-hendry-zVf-R-r3szw-unsplash.jpg",
  },
  {
    avatarSrc: "/Images/Avatars/jurica-koletic-7YVZYZeITc8-unsplash.jpg",
    clientName: "David",
    projectName: "PlumbeousSilver",
    startDate: "2021-07-01",
    address: "75 John St W 504 Oshawa ON L1H 1W9",
    imgSrc: "/Images/Houses/birgit-loit-CnXVHyO1GGA-unsplash.jpg",
  },
  {
    avatarSrc: "/Images/Avatars/robert-godwin-cdksyTqEXzo-unsplash.jpg",
    clientName: "Alvin",
    projectName: "NigricantBronze",
    startDate: "2021-11-13",
    address: "7161 Ave De La Deviniere , Anjou, QC, H1K 3S8",
    imgSrc: "/Images/Houses/r-architecture-2gDwlIim3Uw-unsplash.jpg",
  },
  {
    avatarSrc: "/Images/Avatars/stefan-stefancik-QXevDflbl8A-unsplash.jpg",
    clientName: "Lily",
    projectName: "NiveousZinc",
    startDate: "2021-05-09",
    address: "1 Lomond Dr Etobicoke ON M8X 2Z3",
    imgSrc: "/Images/Houses/roger-starnes-sr-WhYsgTb1LMQ-unsplash.jpg",
  },
];

export default function Home() {
  return (
    <Grid container direction="row" spacing={4}>
      {projectData.map((projectObj) => {
        return (
          <Grid item xs={12} sm={6} md={4}>
            <ProjectItem {...projectObj} />
          </Grid>
        );
      })}
    </Grid>
  );
}
