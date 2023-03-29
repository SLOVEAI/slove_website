import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage, AboutPage, BlogPage, FeaturesPage } from "../pages";

export enum EnumRoutes {
  home = "/",
  about = "/about",
  blog = "/blog",
  features = "/features",
}

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/features" element={<FeaturesPage />} />
    </Routes>
  );
};
