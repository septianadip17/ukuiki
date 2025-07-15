import Hero from "../components/home/Hero";
import Section from "../components/home/Section";
import CommunityHighlight from "../components/home/CommunityHighlight";
import EventsHighlight from "../components/home/EventsHighlight";
import AboutHighlight from "../components/home/AboutHighlight";
import ContactHighlight from "../components/home/ContactHighlight";
import ShopHighlight from "../components/home/ShopHighlight";

import {
  FiShoppingBag,
  FiUsers,
  FiCalendar,
  FiInfo,
  FiMail,
} from "react-icons/fi";

export default function Landing() {
  return (
    <div id="top">
      <Hero />

      <Section
        id="shop"
        title="Shop Now"
        cta={{ to: "/shop", label: "Explore Shop", icon: <FiShoppingBag /> }}
      >
        <ShopHighlight />
      </Section>

      <Section
        id="community"
        title="Community"
        cta={{ to: "/community", label: "See More", icon: <FiUsers /> }}
      >
        <CommunityHighlight />
      </Section>

      <Section
        id="events"
        title="Events"
        cta={{ to: "/events", label: "View Schedule", icon: <FiCalendar /> }}
      >
        <EventsHighlight />
      </Section>

      <Section
        id="about"
        title="About"
        cta={{ to: "/about", label: "Learn More", icon: <FiInfo /> }}
      >
        <AboutHighlight />
      </Section>

      <Section
        id="contact"
        title="Contact"
        cta={{ to: "/contact", label: "Get in Touch", icon: <FiMail /> }}
      >
        <ContactHighlight />
      </Section>
    </div>
  );
}
