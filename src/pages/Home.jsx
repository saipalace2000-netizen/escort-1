import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { motion } from "framer-motion";
import { CONTACT } from "../config/contact";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const scrollFadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

/* ========================= */
/* NEW: TRUST SERVICE DATA   */
/* ========================= */
const trustServices = [
  {
    title: "Home Service",
    desc:
      "Private home-based companionship arranged with complete discretion. Ideal for clients who prefer comfort, familiarity, and a relaxed environment.",
  },
  {
    title: "Hotel Service",
    desc:
      "Premium hotel-based companionship for business stays, travel plans, and five-star experiences with professional etiquette.",
  },
  {
    title: "Hand-to-Hand Payment",
    desc:
      "Transparent and respectful hand-to-hand payment option discussed privately to maintain trust, clarity, and confidentiality.",
  },
  {
    title: "Joonon (On-Call) Service",
    desc:
      "On-call companion availability for spontaneous plans, private events, and last-minute social arrangements, subject to availability.",
  },
];

export default function Home() {
  return (
    <>
      {/* ========================= */}
      {/* FAQ SCHEMA (SEO) */}
      {/* ========================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Are all profiles on Elite Event Service verified?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Every profile listed on Elite Event Service goes through a verification process to ensure authenticity, professionalism, and eligibility."
      }
    },
    {
      "@type": "Question",
      "name": "Is client privacy maintained?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Client privacy is treated with the highest priority. All personal information remains confidential."
      }
    }
  ]
}
        `,
        }}
      />

      

      {/* ========================= */}
      {/* NEW: TRUST SERVICES */}
      {/* ========================= */}
      <section className="py-28 px-6 bg-black/30">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-gold text-3xl md:text-4xl font-heading mb-14">
            Trusted & Flexible Service Options
          </h2>

          <div className="grid md:grid-cols-2 gap-10 text-left">
            {trustServices.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-card p-10 rounded-2xl border border-gold/20"
              >
                <h3 className="text-gold text-xl font-semibold mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-sm">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================= */}
      {/* NEW: CLIENT PRIVACY */}
      {/* ========================= */}
      <section className="py-28 px-6 bg-bg">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-gold text-3xl md:text-4xl font-heading mb-10">
            Client Privacy & Confidentiality
          </h2>

          <div className="space-y-6 text-gray-300 text-sm max-w-4xl mx-auto">
            <p>
              Elite Event Service follows a strict privacy-first approach.
              All interactions remain confidential from inquiry to completion.
            </p>
            <p>
              Payment discussions, service preferences, and communication
              details are handled discreetly and never disclosed to third parties.
            </p>
            <p>
              The platform is intended strictly for adults aged 18+ and
              operates within lawful, ethical, and consensual boundaries.
            </p>
          </div>
        </div>
      </section>

      


    

      {/* ========================= */}
      {/* HERO SECTION */}
      {/* ========================= */}
      <section className="pt-24 pb-20 md:pt-32 md:pb-24 flex flex-col items-center text-center px-4 md:px-6 bg-bg">



        {/* Logo */}
        <motion.img
          src={logo}
          alt="Elite Event Service"
          className="h-20 md:h-28 mb-6 md:mb-8 opacity-95"

          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8 }}
        />


        {/* Brand Name */}
        <motion.h1
          className="text-gold text-3xl md:text-6xl font-heading tracking-wide leading-snug md:leading-tight mb-6"

          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Premium Companionship for
          <br className="hidden md:block" />
          <span className="text-gold/90">Private & Exclusive Occasions</span>
        </motion.h1>

        <motion.p
          className="max-w-2xl text-base md:text-lg text-gray-200 mb-10 leading-relaxed"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Discreet, verified, and professionally curated experiences designed
          for individuals who value privacy, refinement, and quality interaction.
        </motion.p>


        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-8 w-full max-w-md mx-auto"

          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <Link to="/profiles" className="px-10 py-3 bg-gold text-bg rounded-lg text-lg font-semibold hover:opacity-90 transition">
            View Verified Profiles
          </Link>

          <Link to="/contact" className="px-10 py-3 border border-gold rounded-lg text-gold text-lg font-semibold hover:bg-gold hover:text-bg transition">
            Make a Private Inquiry
          </Link>
        </motion.div>

        <motion.p
          className="text-xs text-gray-400 max-w-xl mx-auto"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          ✔ Verified profiles only · ✔ Discreet communication · ✔ Adults 18+ only
        </motion.p>




        {/* TRUST INDICATORS */}
        <div className="mb-10 text-sm opacity-80 space-y-2">
          <p>✔ 100% Discreet & Confidential</p>
          <p>✔ Verified Profiles Only</p>
          <p>✔ Secure & Professional Interactions</p>
          <p>✔ Client Privacy Always Respected</p>
        </div>

        {/* CTA */}
        <Link
          to="/profiles"
          className="px-12 py-3 bg-gold text-bg rounded-lg text-lg font-semibold hover:opacity-90 transition"
        >
          View Profiles
        </Link>

        {/* Legal Note */}
        <p className="mt-10 text-xs opacity-50 max-w-lg">
          18+ Only · All interactions are consensual, respectful,
          and conducted with complete discretion.
        </p>
      </section>

      {/* ========================= */}
      {/* CORE SERVICE POINTS */}
      {/* ========================= */}
      <motion.section
        className="py-24 px-6 bg-black/30"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center">


          <h2 className="text-gold text-3xl md:text-4xl font-heading mb-14 tracking-wide">
            Why Choose Elite Event Service
          </h2>

          <div className="space-y-8 text-left md:text-center">

            <div>
              <h3 className="text-gold font-semibold">
                Full Enjoyment & Premium Entertainment
              </h3>
              <p className="text-sm opacity-75 mt-1">
                Thoughtfully curated companionship experiences designed
                to deliver comfort, enjoyment, and refined entertainment.
              </p>
            </div>

            <div>
              <h3 className="text-gold font-semibold">
                Complete Client Satisfaction
              </h3>
              <p className="text-sm opacity-75 mt-1">
                Personalized interactions focused on understanding
                client preferences and delivering quality experiences.
              </p>
            </div>

            <div>
              <h3 className="text-gold font-semibold">
                Bachelor Parties & Private Celebrations
              </h3>
              <p className="text-sm opacity-75 mt-1">
                Ideal for bachelor parties, private celebrations,
                and exclusive social gatherings.
              </p>
            </div>

            <div>
              <h3 className="text-gold font-semibold">
                Genuine, Verified & Secure Service
              </h3>
              <p className="text-sm opacity-75 mt-1">
                All profiles are verified and curated to ensure
                authenticity, safety, and professionalism.
              </p>
            </div>

            <div>
              <h3 className="text-gold font-semibold">
                Discretion & Confidentiality Guaranteed
              </h3>
              <p className="text-sm opacity-75 mt-1">
                Client identity and personal information are protected
                with strict privacy standards at all times.
              </p>
            </div>

            <div>
              <h3 className="text-gold font-semibold">
                Indoor · Outdoor · Private Venue Options
              </h3>
              <p className="text-sm opacity-75 mt-1">
                Flexible arrangements available based on comfort,
                convenience, and event requirements.
              </p>
            </div>

          </div>
        </div>
      </motion.section>


      {/* ========================= */}
      {/* LONG FORM DESCRIPTION */}
      {/* ========================= */}
      <motion.section
        variants={scrollFadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >


        <div className="max-w-5xl mx-auto">

          <h2 className="text-gold text-3xl md:text-4xl font-heading mb-10 tracking-wide text-center">
            A Premium Companion & Event Experience
          </h2>

          <div className="space-y-6 text-gray-300 text-[15px] md:text-base leading-relaxed">

            <p>
              Elite Event Service is built around the idea of providing
              high-quality companionship experiences that are respectful,
              professional, and discreet. Unlike generic platforms, our
              approach focuses on personalization, allowing clients to
              enjoy carefully curated interactions in a comfortable
              and refined environment.
            </p>

            <p>
              Our companions are selected based on communication skills,
              confidence, social etiquette, and overall presentation.
              This ensures that every engagement reflects elegance,
              professionalism, and mutual respect. Whether attending
              a private gathering, a formal dinner, or a special event,
              clients can expect a seamless and pleasant experience.
            </p>

            <p>
              Many individuals choose Elite Event Service for social
              occasions where a confident and polished presence adds
              value to the overall experience. Bachelor parties, private
              celebrations, and invitation-only events are among the
              most common engagements where our service is appreciated.
            </p>

            <p>
              Safety and authenticity are essential aspects of our
              platform. Every profile undergoes a verification process,
              and all bookings follow a clear and transparent approach.
              This allows clients to feel confident and secure while
              engaging with our service.
            </p>

            <p>
              We understand the importance of privacy in premium services.
              For this reason, confidentiality is maintained at every
              stage — from inquiry to completion. Our systems and
              communication methods are designed to protect client
              identity and personal information.
            </p>

            <p>
              Elite Event Service continues to evolve by maintaining
              high standards, listening to client feedback, and refining
              the overall experience. Our commitment is to offer a
              reliable, professional, and enjoyable service that aligns
              with modern expectations of quality and discretion.
            </p>

          </div>
        </div>
      </motion.section>

      {/* ========================= */}
      {/* SEO SECTION 1 */}
      {/* ========================= */}
      <section className="py-24 px-6 bg-black/30">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-gold text-3xl font-heading mb-6 tracking-wide text-center">
            Premium Companion Services in Pune
          </h2>

          <p className="text-gray-300 text-[15px] md:text-base leading-relaxed mb-4">
            Elite Event Service offers premium companion services in Pune for
            individuals seeking refined social experiences. Our platform is
            designed for those who value discretion, professionalism, and
            carefully curated companionship for private and social occasions.
          </p>

          <p className="text-gray-300 text-[15px] md:text-base leading-relaxed">
            Whether the requirement is for a private gathering, a social
            engagement, or an exclusive event, our companions are selected
            to provide a polished presence and comfortable interaction in
            a secure and respectful environment.
          </p>

        </div>
      </section>
      {/* ========================= */}
      {/* SEO SECTION 2 */}
      {/* ========================= */}
      <section className="py-24 px-6 bg-bg">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-gold text-3xl font-heading mb-6 tracking-wide text-center">
            Verified & Discreet Companion Experience
          </h2>

          <p className="text-gray-300 text-[15px] md:text-base leading-relaxed mb-4">
            All profiles listed with Elite Event Service are verified to
            maintain authenticity and safety. We follow a structured
            approach to ensure every interaction meets professional
            standards and respects client privacy.
          </p>

          <p className="text-gray-300 text-[15px] md:text-base leading-relaxed">
            Discretion is maintained at every stage — from inquiry to
            completion. Communication remains confidential, allowing
            clients to enjoy peace of mind while engaging with our
            companion services.
          </p>

        </div>
      </section>
      {/* ========================= */}
      {/* SEO SECTION 3 */}
      {/* ========================= */}
      <section className="py-24 px-6 bg-black/30">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-gold text-3xl font-heading mb-6 tracking-wide text-center">
            Companion Services for Events & Celebrations
          </h2>

          <p className="text-gray-300 text-[15px] md:text-base leading-relaxed mb-4">
            Elite Event Service is frequently chosen for bachelor parties,
            private celebrations, and invitation-only social events in Pune.
            Our companions add confidence, charm, and a refined presence
            that enhances the overall atmosphere.
          </p>

          <p className="text-gray-300 text-[15px] md:text-base leading-relaxed">
            Flexible arrangements are available for indoor gatherings,
            outdoor events, and private venues. Each engagement is planned
            with attention to comfort, discretion, and client expectations.
          </p>

        </div>
      </section>

      {/* ========================= */}
      {/* SEO SECTION 4 */}
      {/* ========================= */}
      <section className="py-24 px-6 bg-bg">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-gold text-3xl font-heading mb-6 tracking-wide text-center">
            Professional Social Companionship in Pune
          </h2>

          <p className="text-gray-300 text-[15px] md:text-base leading-relaxed mb-4">
            Our services focus on social companionship rather than generic
            interactions. Each companion is selected for communication
            skills, etiquette, and the ability to adapt across different
            social settings.
          </p>

          <p className="text-gray-300 text-[15px] md:text-base leading-relaxed">
            This professional approach allows clients to feel comfortable
            and confident while enjoying meaningful social interaction in
            a refined and respectful environment.
          </p>

        </div>
      </section>
      {/* ========================= */}
      {/* SEO SECTION 5 */}
      {/* ========================= */}
      <section className="py-24 px-6 bg-black/30">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-gold text-3xl font-heading mb-6 tracking-wide text-center">
            Trusted Adult Companion Platform
          </h2>

          <p className="text-gray-300 text-[15px] md:text-base leading-relaxed mb-4">
            Elite Event Service is intended exclusively for adults aged 18+
            seeking consensual, respectful companionship. We maintain clear
            guidelines to ensure all interactions remain lawful, ethical,
            and mutually agreed upon.
          </p>

          <p className="text-gray-300 text-[15px] md:text-base leading-relaxed">
            By prioritizing trust, transparency, and responsibility, our
            platform offers a reliable solution for individuals who value
            privacy, safety, and high-quality social experiences.
          </p>

        </div>
      </section>





      {/* ========================= */}
      {/* EXTENDED SERVICE OVERVIEW */}
      {/* ========================= */}
      <section className="py-28 px-6 bg-black/30">
        <div className="max-w-5xl mx-auto text-left">

          <h2 className="text-gold text-3xl md:text-4xl font-heading mb-10 tracking-wide text-center">
            Professional & Discreet Companion Services
          </h2>

          <div className="space-y-6 text-gray-300 text-[15px] md:text-base leading-relaxed">

            <p>
              Elite Event Service goes beyond basic companionship by
              offering carefully curated experiences designed to meet
              individual preferences. Our focus is not limited to social
              presence alone, but also includes communication, cultural
              awareness, and adaptability across various settings.
            </p>

            <p>
              Clients often seek our services for private engagements,
              social gatherings, exclusive events, and celebratory
              occasions where professionalism and discretion are
              essential. Each interaction is structured to ensure a
              comfortable and stress-free experience.
            </p>

            <p>
              Our companions are trained to understand social dynamics
              and maintain appropriate conduct in both formal and
              informal environments. This allows clients to enjoy
              meaningful interactions while feeling confident and at
              ease throughout the engagement.
            </p>

            <p>
              What sets Elite Event Service apart is our emphasis on
              reliability, transparency, and client satisfaction. From
              the initial inquiry to the final interaction, every step
              is handled with attention to detail and respect for
              personal boundaries.
            </p>

          </div>
        </div>
      </section>

      {/* ========================= */}
      {/* SAFETY & AUTHENTICITY */}
      {/* ========================= */}
      <section className="py-28 px-6 bg-bg">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-gold text-3xl md:text-4xl font-heading mb-10 tracking-wide text-center">
            Safety, Privacy & Authenticity
          </h2>

          <div className="space-y-6 text-gray-300 text-[15px] md:text-base leading-relaxed">

            <p>
              Safety and authenticity form the foundation of Elite Event
              Service. Every profile listed on our platform undergoes a
              careful verification process to ensure accuracy,
              professionalism, and reliability.
            </p>

            <p>
              Client privacy is treated with the highest priority. All
              personal information shared during inquiries or bookings
              remains confidential and is never disclosed to third
              parties. Our communication channels are designed to
              support secure and discreet interactions.
            </p>

            <p>
              We maintain a strict code of conduct for both clients and
              companions. Mutual respect, professionalism, and clear
              communication are expected at all times, creating a safe
              and comfortable environment for everyone involved.
            </p>

            <p>
              Transparent discussions regarding availability,
              expectations, and arrangements help avoid misunderstandings.
              This structured approach ensures that every engagement
              aligns with agreed terms and delivers a positive experience.
            </p>

          </div>
        </div>
      </section>

      {/* ========================= */}
      {/* EVENTS & SOCIAL OCCASIONS */}
      {/* ========================= */}
      <section className="py-28 px-6 bg-black/30">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-gold text-3xl md:text-4xl font-heading mb-10 tracking-wide text-center">
            Events, Celebrations & Social Engagements
          </h2>

          <div className="space-y-6 text-gray-300 text-[15px] md:text-base leading-relaxed">

            <p>
              Elite Event Service is frequently chosen for bachelor
              parties, private celebrations, and exclusive social
              gatherings. These occasions benefit from the presence of
              confident, well-presented companions who enhance the
              overall atmosphere.
            </p>

            <p>
              Whether the setting is an indoor gathering, an outdoor
              event, or a private venue, arrangements are made with
              flexibility and professionalism. Our goal is to ensure
              that each event proceeds smoothly and comfortably.
            </p>

            <p>
              Clients hosting celebrations often appreciate our ability
              to adapt to different social environments while maintaining
              discretion and appropriate conduct. This balance allows
              everyone to enjoy the occasion without concerns.
            </p>

            <p>
              By focusing on quality over quantity, Elite Event Service
              delivers experiences that feel exclusive, refined, and
              memorable. Each engagement is treated as a unique
              experience rather than a generic service.
            </p>

          </div>
        </div>
      </section>

      {/* ========================= */}
      {/* CLIENT EXPERIENCE */}
      {/* ========================= */}
      <section className="py-28 px-6 bg-bg">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-gold text-3xl md:text-4xl font-heading mb-10 tracking-wide text-center">
            Client-Focused Experience
          </h2>

          <div className="space-y-6 text-gray-300 text-[15px] md:text-base leading-relaxed">

            <p>
              Every aspect of Elite Event Service is designed with the
              client experience in mind. From browsing profiles to
              finalizing arrangements, simplicity and clarity are
              prioritized to reduce unnecessary complexity.
            </p>

            <p>
              Clients are encouraged to communicate preferences openly,
              allowing us to suggest suitable companions and tailor
              experiences accordingly. This personalized approach
              contributes to higher satisfaction and comfort.
            </p>

            <p>
              Our team remains available to assist with inquiries and
              provide guidance throughout the booking process. This
              support helps clients feel informed, confident, and
              reassured at every stage.
            </p>

            <p>
              By combining professionalism, discretion, and attention
              to detail, Elite Event Service continues to build trust
              with individuals seeking premium companionship experiences.
            </p>

          </div>
        </div>
      </section>

      {/* ===== END OF PART 2 ===== */}
      {/* ========================= */}
      {/* TRUST & FAQ SECTION */}
      {/* ========================= */}
      <section className="py-28 px-6 bg-black/30">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-gold text-3xl md:text-4xl font-heading mb-14 tracking-wide text-center">
            Trust, Safety & Common Questions
          </h2>

          <div className="space-y-10 text-gray-300 text-[15px] md:text-base leading-relaxed">

            <div>
              <h3 className="text-gold font-semibold mb-2">
                Are all profiles verified?
              </h3>
              <p className="opacity-75">
                Yes. Every profile listed on Elite Event Service goes
                through a verification process to ensure authenticity,
                professionalism, and eligibility. This helps maintain
                a safe and reliable experience for clients.
              </p>
            </div>

            <div>
              <h3 className="text-gold font-semibold mb-2">
                How is client privacy protected?
              </h3>
              <p className="opacity-75">
                Client privacy is handled with the highest level of care.
                All personal information shared during inquiries or
                bookings remains confidential and is never shared with
                third parties.
              </p>
            </div>

            <div>
              <h3 className="text-gold font-semibold mb-2">
                What type of events is the service suitable for?
              </h3>
              <p className="opacity-75">
                Our services are suitable for private gatherings,
                social events, bachelor celebrations, formal dinners,
                and invitation-only occasions where discretion and
                professionalism are important.
              </p>
            </div>

            <div>
              <h3 className="text-gold font-semibold mb-2">
                Is the booking process secure?
              </h3>
              <p className="opacity-75">
                Yes. All bookings follow a structured and transparent
                process. Clear communication ensures that expectations
                are understood before confirmation.
              </p>
            </div>

            <div>
              <h3 className="text-gold font-semibold mb-2">
                What standards of conduct are maintained?
              </h3>
              <p className="opacity-75">
                Mutual respect, professionalism, and appropriate
                behavior are expected from all parties. This helps
                create a comfortable and positive environment.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ========================= */}
      {/* SERVICE CATEGORIES */}
      {/* ========================= */}
      <section className="py-28 px-6 bg-bg">
        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-gold text-3xl md:text-4xl font-heading mb-14 tracking-wide">
            Our Service Categories
          </h2>

          <div className="grid gap-10 md:grid-cols-3 text-left text-[15px] md:text-base">

            <div className="bg-card p-8 rounded-xl">
              <h3 className="text-gold font-semibold mb-3">
                Private Social Companionship
              </h3>
              <p className="opacity-75">
                Designed for individuals seeking refined social presence
                for private gatherings, dinners, or casual engagements
                in a comfortable environment.
              </p>
            </div>

            <div className="bg-card p-8 rounded-xl">
              <h3 className="text-gold font-semibold mb-3">
                Event & Celebration Services
              </h3>
              <p className="opacity-75">
                Suitable for bachelor parties, celebrations, and
                invitation-only events where professionalism and
                discretion enhance the occasion.
              </p>
            </div>

            <div className="bg-card p-8 rounded-xl">
              <h3 className="text-gold font-semibold mb-3">
                Premium Lifestyle Experiences
              </h3>
              <p className="opacity-75">
                Tailored experiences that align with modern lifestyles,
                focusing on quality interaction, comfort, and mutual
                respect.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ========================= */}
      {/* MID-PAGE CTA */}
      {/* ========================= */}
      <section className="py-24 px-6 bg-black/30 text-center">
        <div className="max-w-3xl mx-auto">

          <h2 className="text-gold text-3xl font-heading mb-6 tracking-wide">
            Ready to Explore Premium Companionship?
          </h2>

          <p className="text-gray-300 text-[15px] md:text-base mb-10 leading-relaxed">
            Browse verified profiles and discover a refined approach
            to social companionship designed around discretion,
            professionalism, and comfort.
          </p>

          <Link
            to="/profiles"
            className="inline-block px-12 py-3 bg-gold text-bg rounded-lg text-lg font-semibold hover:opacity-90 transition"
          >
            Explore Profiles
          </Link>

        </div>
      </section>

      {/* ===== END OF PART 3 ===== */}
      {/* ========================= */}
      {/* FINAL REASSURANCE SECTION */}
      {/* ========================= */}
      <section className="py-28 px-6 bg-bg">
        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-gold text-3xl md:text-4xl font-heading mb-10 tracking-wide">
            A Service Built on Trust & Responsibility
          </h2>

          <div className="space-y-6 text-gray-300 text-[15px] md:text-base leading-relaxed max-w-4xl mx-auto">

            <p>
              Elite Event Service operates with a strong commitment to
              responsibility, professionalism, and ethical standards.
              Our platform is intended solely for adults who seek
              respectful social companionship in a secure and private
              setting.
            </p>

            <p>
              We do not promote misleading claims or unrealistic promises.
              Transparency, honesty, and clear communication are integral
              to how our service operates. Clients are encouraged to
              engage thoughtfully and responsibly at all times.
            </p>

            <p>
              Every engagement facilitated through Elite Event Service
              is expected to comply with applicable laws and mutual
              consent guidelines. We maintain zero tolerance for
              inappropriate behavior, coercion, or misuse of our
              platform.
            </p>

            <p>
              By choosing our service, clients acknowledge the importance
              of discretion, maturity, and mutual respect. These values
              help preserve a safe environment for both clients and
              companions while maintaining the integrity of our brand.
            </p>

          </div>
        </div>
      </section>

      {/* ========================= */}
      {/* FINAL CALL TO ACTION */}
      {/* ========================= */}
      <section className="py-28 px-6 bg-black/30 text-center">
        <div className="max-w-3xl mx-auto">

          <h2 className="text-gold text-3xl md:text-4xl font-heading mb-6 tracking-wide">
            Discover a Refined & Discreet Experience
          </h2>

          <p className="text-gray-300 text-[15px] md:text-base mb-10 leading-relaxed">
            Explore verified profiles and experience a thoughtfully
            curated approach to premium social companionship. Designed
            for individuals who value discretion, professionalism,
            and quality interaction.
          </p>

          <Link
            to="/profiles"
            className="inline-block px-14 py-4 bg-gold text-bg rounded-lg text-lg font-semibold hover:opacity-90 transition"
          >
            View Verified Profiles
          </Link>

          <p className="mt-10 text-xs opacity-50 max-w-lg mx-auto">
            18+ Only · All interactions are consensual, lawful, and
            conducted with professionalism and mutual respect.
          </p>

        </div>
      </section>

      {/* ========================= */}
      {/* END OF HOME PAGE */}
      {/* ========================= */}

      {/* ========================= */}
      {/* PROFILE OVERVIEW TABLE */}
      {/* ========================= */}
      <section className="py-28 px-6 bg-bg">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-gold text-3xl md:text-4xl font-heading mb-10 tracking-wide text-center">
            Companion Overview (Sample)
          </h2>

          <p className="text-center text-gray-400 text-sm mb-12 max-w-3xl mx-auto">
            Below is a sample overview to help clients understand the type of
            profiles available. Actual details are shared privately to
            maintain discretion and privacy.
          </p>

          <div className="overflow-x-auto rounded-xl border border-gold/10">
            <table className="min-w-full text-sm text-gray-300">
              <thead className="bg-black/60">
                <tr>
                  <th className="px-6 py-4 text-left text-gold font-semibold">
                    Name
                  </th>
                  <th className="px-6 py-4 text-left text-gold font-semibold">
                    Age
                  </th>
                  <th className="px-6 py-4 text-left text-gold font-semibold">
                    Profile Type
                  </th>
                  <th className="px-6 py-4 text-left text-gold font-semibold">
                    Languages
                  </th>
                  <th className="px-6 py-4 text-left text-gold font-semibold">
                    Availability
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gold/10">
                <tr className="hover:bg-black/30 transition">
                  <td className="px-6 py-4">Alina</td>
                  <td className="px-6 py-4">25</td>
                  <td className="px-6 py-4">VIP · International</td>
                  <td className="px-6 py-4">English, Russian</td>
                  <td className="px-6 py-4">Full-time</td>
                </tr>

                <tr className="hover:bg-black/30 transition">
                  <td className="px-6 py-4">Tanya</td>
                  <td className="px-6 py-4">27</td>
                  <td className="px-6 py-4">Model · Five Star</td>
                  <td className="px-6 py-4">English, Hindi</td>
                  <td className="px-6 py-4">Part-time</td>
                </tr>

                <tr className="hover:bg-black/30 transition">
                  <td className="px-6 py-4">Sophia</td>
                  <td className="px-6 py-4">24</td>
                  <td className="px-6 py-4">International · Independent</td>
                  <td className="px-6 py-4">English, Russian</td>
                  <td className="px-6 py-4">Full-time</td>
                </tr>

                <tr className="hover:bg-black/30 transition">
                  <td className="px-6 py-4">Riya</td>
                  <td className="px-6 py-4">26</td>
                  <td className="px-6 py-4">VIP · Model</td>
                  <td className="px-6 py-4">English, Hindi</td>
                  <td className="px-6 py-4">Weekends</td>
                </tr>

                <tr className="hover:bg-black/30 transition">
                  <td className="px-6 py-4">Isabella</td>
                  <td className="px-6 py-4">28</td>
                  <td className="px-6 py-4">Five Star · International</td>
                  <td className="px-6 py-4">English, Russian</td>
                  <td className="px-6 py-4">Full-time</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </section>
      {/* ========================= */}
      {/* UPDATED PRICING TABLE */}
      {/* ========================= */}
      <section className="py-28 px-6 bg-black/30">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-gold text-3xl md:text-4xl font-heading mb-10 tracking-wide text-center">
            Pricing Overview (Indicative)
          </h2>

          <p className="text-center text-gray-400 text-sm mb-12 max-w-3xl mx-auto">
            The pricing below is indicative and provided for reference only.
            Final arrangements may vary depending on profile selection,
            availability, duration, and event requirements. All details are
            confirmed privately to ensure clarity and discretion.
          </p>

          <div className="overflow-x-auto rounded-xl border border-gold/10">
            <table className="min-w-full text-sm text-gray-300">
              <thead className="bg-black/60">
                <tr>
                  <th className="px-6 py-4 text-left text-gold font-semibold">
                    Service Category
                  </th>
                  <th className="px-6 py-4 text-left text-gold font-semibold">
                    3 Hours · 2 Sessions
                  </th>
                  <th className="px-6 py-4 text-left text-gold font-semibold">
                    4 Hours · 3 Sessions
                  </th>
                  <th className="px-6 py-4 text-left text-gold font-semibold">
                    Full-Night
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gold/10">

                <tr className="hover:bg-black/30 transition">
                  <td className="px-6 py-4">Medium Indian Models</td>
                  <td className="px-6 py-4">₹15,000 – ₹20,000</td>
                  <td className="px-6 py-4">₹25,000 – ₹30,000</td>
                  <td className="px-6 py-4">₹30,000</td>
                </tr>

                <tr className="hover:bg-black/30 transition">
                  <td className="px-6 py-4">
                    VIP Indian Models &amp; College Companions
                  </td>
                  <td className="px-6 py-4">₹25,000 – ₹30,000</td>
                  <td className="px-6 py-4">₹35,000 – ₹40,000</td>
                  <td className="px-6 py-4">₹40,000</td>
                </tr>

                <tr className="hover:bg-black/30 transition">
                  <td className="px-6 py-4">
                    International Models (Russian)
                  </td>
                  <td className="px-6 py-4">₹25,000 – ₹30,000</td>
                  <td className="px-6 py-4">₹35,000 – ₹40,000</td>
                  <td className="px-6 py-4">₹40,000</td>
                </tr>

                <tr className="hover:bg-black/30 transition">
                  <td className="px-6 py-4">Independent Companion</td>
                  <td className="px-6 py-4">₹13,000</td>
                  <td className="px-6 py-4">₹22,000</td>
                  <td className="px-6 py-4">₹32,000</td>
                </tr>

                <tr className="hover:bg-black/30 transition">
                  <td className="px-6 py-4">Five Star Experience</td>
                  <td className="px-6 py-4">₹20,000</td>
                  <td className="px-6 py-4">₹32,000</td>
                  <td className="px-6 py-4">₹45,000</td>
                </tr>

              </tbody>
            </table>
          </div>

          <p className="text-xs text-gray-400 mt-8 text-center max-w-3xl mx-auto">
            Prices are indicative and subject to change without notice.
            Availability, session structure, and experience type are discussed
            privately to maintain discretion and transparency.
          </p>

        </div>
      </section>
      {/* ========================= */}
      {/* TRUST BADGES */}
      {/* ========================= */}
      <section className="py-10 px-6 bg-black/50">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-xs md:text-sm text-gray-300">

          <div className="flex flex-col items-center gap-2">
            <span className="text-gold text-xl">✔</span>
            <p>Verified Profiles</p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <span className="text-gold text-xl">🔒</span>
            <p>100% Private & Secure</p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <span className="text-gold text-xl">🕒</span>
            <p>24/7 Discreet Support</p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <span className="text-gold text-xl">19+</span>
            <p>Adults Only Platform</p>
          </div>

        </div>
      </section>
      {/* ========================= */}
      {/* CREDIBILITY COUNTERS */}
      {/* ========================= */}
      <section className="py-16 px-6 bg-bg">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

          <div>
            <p className="text-gold text-3xl font-heading">1,000+</p>
            <p className="text-sm text-gray-300 mt-1">
              Verified Client Interactions
            </p>
          </div>

          <div>
            <p className="text-gold text-3xl font-heading">100%</p>
            <p className="text-sm text-gray-300 mt-1">
              Privacy Commitment
            </p>
          </div>

          <div>
            <p className="text-gold text-3xl font-heading">10+</p>
            <p className="text-sm text-gray-300 mt-1">
              Years of Experience
            </p>
          </div>

          <div>
            <p className="text-gold text-3xl font-heading">24/7</p>
            <p className="text-sm text-gray-300 mt-1">
              Private Booking Assistance
            </p>
          </div>

        </div>
      </section>
      {/* ========================= */}
      {/* CLIENT EXPERIENCES */}
      {/* ========================= */}
      <section className="py-24 px-6 bg-black/30">
        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-gold text-3xl md:text-4xl font-heading mb-12 tracking-wide">
            Client Experiences
          </h2>

          <div className="grid gap-8 md:grid-cols-3 text-left text-sm md:text-base">

            <div className="bg-card p-8 rounded-xl">
              <p className="text-gray-300 leading-relaxed">
                “The entire experience was handled with professionalism and
                discretion. Communication was clear, respectful, and exactly
                as described on the platform.”
              </p>
              <p className="mt-4 text-xs text-gray-400">
                — Private Client, Pune
              </p>
            </div>

            <div className="bg-card p-8 rounded-xl">
              <p className="text-gray-300 leading-relaxed">
                “What stood out most was the attention to privacy and comfort.
                Everything felt organized and transparent from the first
                inquiry to the final arrangement.”
              </p>
              <p className="mt-4 text-xs text-gray-400">
                — Verified Client Experience
              </p>
            </div>

            <div className="bg-card p-8 rounded-xl">
              <p className="text-gray-300 leading-relaxed">
                “A refined and respectful service. The platform clearly
                prioritizes professionalism and genuine interaction over
                unrealistic promises.”
              </p>
              <p className="mt-4 text-xs text-gray-400">
                — Event Booking Client
              </p>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}


