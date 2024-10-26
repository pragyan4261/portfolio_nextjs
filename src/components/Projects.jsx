import { HoverEffect } from "./ui/card-hover-effect";
import { BackgroundBeams } from "./ui/background-beams";

export default function CardHoverEffectDemo() {
  return (
    (<div className="max-w-5xl mx-auto px-8 mt-64" id="projects">
        <h1 className="text-5xl">Projects</h1>
      <HoverEffect items={projects} />
      
    </div>)
  );
}
export const projects = [
  {
    title: "Task Manager",
    description:
      "An application designed to help users organize their personal tasks effectively. It allows users to create, read, update and delete tasks.",
    link: "https://taask-manager.netlify.app/",
  },
  {
    title: "Adobe Gensolve Hackathon Project",
    description:
      "A image processing project for detecting irregular shapes, regularizing the irregular shapes and also finding symmetry in the shapes.",
    link: "https://github.com/phsics/rohankeu47_Team",
  },
  {
    title: "ECS Website",
    description:
      "A dedicated platform for ECE branch at NIT Silchar. This website serves as a platform for students to access study materials for all semesters and also provides info about various events conducted by ECS.",
    link: "https://ecs-website-beta.vercel.app/",
  },
  {
    title: "Attendance Manager",
    description:
      "A highly authenticated attendance manager system. It uses face authentication to verify students attendance.",
    link: "https://github.com/Debasish-RS3655/Attendance-Manager",
  },
  {
    title: "NFT Webapp",
    description:
      "A frontend clone of a nft website made using React JS.",
    link: "https://nft-webapp.netlify.app/",
  },
  {
    title: "TravelSafe",
    description:
      "This project mainly emphasises on tourist's safety. We use the sample records given by the police personnel to predict the safety level of a place.",
    link: "https://github.com/barnilsarma/TravelSafe",
  },
];
