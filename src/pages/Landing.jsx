import Hero from "../components/home/Hero";
import Section from "../components/home/Section";
import CommunityHighlight from "../components/home/CommunityHighlight";
import EventsHighlight from "../components/home/EventsHighlight";
import AboutHighlight from "../components/home/AboutHighlight";
import ContactHighlight from "../components/home/ContactHighlight";
import ShopHighlight from "../components/home/ShopHighlight";

export default function Landing() {
  return (
    <div id="top">
      <Hero />

      {/* Shop */}
      <Section
        id="shop"
        title="Ukulele Ready Stock"
        cta={{ label: "Lihat Semua Produk", to: "/shop" }}
      >
        <ShopHighlight />
      </Section>

      {/* Community Highlights */}
      <Section id="community" title="Community Highlights">
        <CommunityHighlight />
      </Section>

      {/* Events */}
      <Section id="events" title="Event Terdekat">
        <EventsHighlight />
      </Section>

      {/* About */}
      <Section id="about">
        <AboutHighlight />
      </Section>

      {/* Contact */}
      <Section id="contact">
        <ContactHighlight />
      </Section>
    </div>
  );
}
