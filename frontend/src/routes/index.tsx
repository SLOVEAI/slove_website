import React from "react";
import { Route, Routes } from "react-router-dom";
import { WebsiteLayout } from "../layouts/WebsiteLayout";
import { LoginSignupLayout } from "../layouts/LoginSignupLayout";
import {
  HomePage,
  AboutPage,
  BlogPage,
  FeaturesPage,
  EventsPage,
  ContactPage,
  CookiesPage,
  FaqPage,
  PrivacyPage,
  TermsPage,
  CareerPage,
  LoginPage,
  SignupPage,
  ChooseAreaPage,
  MusicianProfilePage,
  FanProfilePage,
  VenueProfilePage,
  TestAppPage,
  ThanksPage,
  BlogPostPage,
} from "../pages";

export enum EnumRoutes {
  home = "/",
  about = "/about",
  blog = "/blog",
  features = "/features",
  events = "/events",
  contact = "/contact",
  cookies = "/cookies",
  faq = "/faq",
  privacy = "/privacy",
  terms = "/terms",
  career = "/career",
  login = "/login",
  signup = "/signup",
  chooseArea = "/chooseArea",
  musicianProfile = "/musicianProfile",
  fanProfile = "/fanProfile",
  venueProfile = "/venueProfile",
  testApp = "/testApp",
  thanks = "/thanks",
  blogPost = "/blogpost/:id",
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
        <Route path={EnumRoutes.contact} element={<ContactPage />} />
        <Route path={EnumRoutes.cookies} element={<CookiesPage />} />
        <Route path={EnumRoutes.faq} element={<FaqPage />} />
        <Route path={EnumRoutes.privacy} element={<PrivacyPage />} />
        <Route path={EnumRoutes.terms} element={<TermsPage />} />
        <Route path={EnumRoutes.career} element={<CareerPage />} />
        <Route path={EnumRoutes.testApp} element={<TestAppPage />} />
        <Route path={EnumRoutes.blogPost} element={<BlogPostPage />} />
      </Route>
      <Route element={<LoginSignupLayout />}>
        <Route path={EnumRoutes.login} element={<LoginPage />} />
        <Route path={EnumRoutes.signup} element={<SignupPage />} />
        <Route path={EnumRoutes.chooseArea} element={<ChooseAreaPage />} />
        <Route
          path={EnumRoutes.musicianProfile}
          element={<MusicianProfilePage />}
        />
        <Route path={EnumRoutes.fanProfile} element={<FanProfilePage />} />
        <Route path={EnumRoutes.venueProfile} element={<VenueProfilePage />} />
        <Route path={EnumRoutes.thanks} element={<ThanksPage />} />
      </Route>
    </Routes>
  );
};
