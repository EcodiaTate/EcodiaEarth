"use client";

import React from 'react';
import { TheHorizon } from "../sections/TheHorizon";
import { TheSoil } from "../sections/TheSoil";
import { TheKinetic } from "../sections/TheKinetic";
import { TheThread } from "./TheThread";

import { TheStudio } from "../sections/TheStudio";
import { TheSource } from "../sections/TheSource";
import { TheRoots } from "../sections/TheRoots";

export const BiosphereStage = () => {
  return (
    <div className="relative w-full">
      {/* 01. MACRO */}
      <TheThread /> {/* Fixed overlay */}
      <TheHorizon />

      {/* 02. COMMUNITY */}
      <TheSoil />
      

      {/* 03. STRATEGY */}
      <TheKinetic />

      {/* 04. PHYSICAL */}
      <TheStudio />

      {/* 05. TECH */}
      <TheSource />

      {/* 06. FOUNDATION */}
      <TheRoots />
    </div>
  );
};