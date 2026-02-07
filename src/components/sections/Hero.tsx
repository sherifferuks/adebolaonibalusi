"use client";

import React from 'react';
import NeuralNetworkHero from '@/components/ui/neural-network-hero';

export const HeroSection: React.FC = () => {
    return (
        <NeuralNetworkHero
            title="Unwavering Legal Authority"
            description="A full-service legal institution providing sophisticated multi-disciplinary counsel and strategic litigation for global enterprises across diverse industries."
            badgeText="Strategic Legal Advisory & Litigation"
            badgeLabel="AO & Co."
            ctaButtons={[
                { text: "Consult with AO & Co", href: "/contact", primary: true },
                { text: "Our Expertise", href: "#features" }
            ]}
            microDetails={["Lagos & London Offices", "Global Enterprise Counsel", "Practice Excellence"]}
        />
    );
};

// Keeping the export name consistent if used elsewhere
export const Hero = HeroSection;
