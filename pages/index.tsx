/* eslint-disable @next/next/link-passhref */
import Link from "next/link";
import * as React from "react";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import LearningSection from "../components/LearningSection";

export default function Home() {
  return (
    <Layout>
     <Hero />
     <LearningSection />
    </Layout>
  );
}
