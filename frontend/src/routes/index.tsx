import React from "react";
import { Route, Routes } from "react-router-dom";
import { WebsiteLayout } from '../layouts/WebsiteLayout'
import { HomePage, AboutPage, BlogPage, FeaturesPage, EventsPage } from "../pages";

export enum EnumRoutes {
  home = "/",
  about = "/about",
  blog = "/blog",
  features = "/features",
  events = "/events",
}

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<WebsiteLayout />}>
        <Route path={EnumRoutes.home} element={<HomePage />} />
        <Route path={EnumRoutes.about} element={<AboutPage />} />
        <Route path={EnumRoutes.blog} element={<BlogPage />} />
        <Route path={EnumRoutes.features} element={<FeaturesPage />} />
        <Route path={EnumRoutes.events} element={<EventsPage />} />
      </Route>
    </Routes>
  );
};
