import FooterBrand from '@/components/sections/footer/FooterBrand';
import NavbarCentered from '@/components/ui/NavbarCentered';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
  {
    "name": "Bosh sahifa",
    "href": "#hero"
  },
  {
    "name": "Katalog",
    "href": "#products"
  },
  {
    "name": "Konfigurator",
    "href": "#configurator"
  },
  {
    "name": "Biz haqimizda",
    "href": "#about"
  },
  {
    "name": "Aloqa",
    "href": "#contact"
  },
  {
    "name": "Categories",
    "href": "#categories"
  },
  {
    "name": "Why Upg",
    "href": "#why-upg"
  }
];

  return (
    <StyleProvider buttonVariant="arrow" siteBackground="floatingGradient" heroBackground="cornerGlow">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarCentered
      logo="UPG"
      ctaButton={{
        text: "Savat",
        href: "#cart",
      }}
     navItems={navItems} />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <SectionErrorBoundary name="footer">
        <FooterBrand
      brand="UPG | HOME FOR GAMERS"
      columns={[
        {
          items: [
            {
              label: "Katalog",
              href: "#products",
            },
            {
              label: "Konfigurator",
              href: "#configurator",
            },
          ],
        },
        {
          items: [
            {
              label: "Biz haqimizda",
              href: "#about",
            },
            {
              label: "Aloqa",
              href: "#contact",
            },
          ],
        },
        {
          items: [
            {
              label: "Maxfiylik siyosati",
              href: "#",
            },
            {
              label: "To'lovlar",
              href: "#",
            },
          ],
        },
      ]}
    />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}
