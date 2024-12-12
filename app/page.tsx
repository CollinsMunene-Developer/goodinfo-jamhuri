import AboutJamhuri from '@/components/AboutJamhuri';
import { AppSidebar } from '@/components/app-sidebar';
import CalltoUnity from '@/components/CalltoUnity';
import Cultural from '@/components/Cultural';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { SidebarProvider } from '@/components/ui/sidebar';
import React from 'react';

const RootPage = () => {
  return (
    <div className="h-screen min-h-screen w-full bg-gradient-to-r from-green-600 via-yellow-500 to-red-600 gap-10">
      <Header />
      <AboutJamhuri />
      <Cultural />
      <CalltoUnity />
      <Footer />
    </div>
  );
};

export default RootPage;
