import Hero from "../components/Hero";
import Section from "../components/Section";
import CommunityHighlight from "../components/CommunityHighlight";
import EventsHighlight from "../components/EventsHighlight";
import AboutHighlight from "../components/AboutHighlight";
import ContactHighlight from "../components/ContactHighlight";
import ShopHighlight from "../components/ShopHighlight";

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
      <Section id="events">
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
