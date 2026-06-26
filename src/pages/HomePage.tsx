import ContactCta from '@/components/sections/contact/ContactCta';
import FaqSimple from '@/components/sections/faq/FaqSimple';
import FeaturesDetailedSteps from '@/components/sections/features/FeaturesDetailedSteps';
import FeaturesRevealCardsBento from '@/components/sections/features/FeaturesRevealCardsBento';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import MetricsMediaCards from '@/components/sections/metrics/MetricsMediaCards';
import PricingMediaCards from '@/components/sections/pricing/PricingMediaCards';
import TestimonialColumnMarqueeCards from '@/components/sections/testimonial/TestimonialColumnMarqueeCards';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroSplit
      tag="HOME FOR GAMERS"
      title="UPG — O'yinchilar uyi"
      description="O‘zbekistondagi eng ishonchli gaming kompyuterlar, noutbuklar va komponentlar do‘koni | 2009 yildan beri."
      primaryButton={{
        text: "Katalogni ko‘rish",
        href: "#products",
      }}
      secondaryButton={{
        text: "O‘z PC ni yaratish",
        href: "#configurator",
      }}
      imageSrc="http://img.b2bpic.net/free-photo/rgb-lights-illuminated-fans-gaming-computer-close-up_482257-98446.jpg"
    />
    </SectionErrorBoundary>
  </div>

  <div id="categories" data-section="categories">
    <SectionErrorBoundary name="categories">
          <FeaturesRevealCardsBento
      tag="Tezkor"
      title="Kategoriyalar"
      description="Eng mashhur mahsulotlarimizni toping."
      items={[
        {
          title: "Gaming PC",
          description: "Eng kuchli yig'malar",
          href: "#products",
          imageSrc: "http://img.b2bpic.net/free-photo/miniature-workers-working-chip-motherboard_1252-836.jpg",
        },
        {
          title: "Noutbuklar",
          description: "Portativ kuch",
          href: "#products",
          imageSrc: "http://img.b2bpic.net/free-photo/miniature-workers-working-chip-motherboard_1252-831.jpg",
        },
        {
          title: "Monitorlar",
          description: "Aniq tasvir",
          href: "#products",
          imageSrc: "http://img.b2bpic.net/free-photo/programming-background-concept_23-2150170140.jpg",
        },
        {
          title: "Komponentlar",
          description: "Yangilang",
          href: "#products",
          imageSrc: "http://img.b2bpic.net/free-photo/gradient-illuminated-neon-gaming-desk-setup-with-keyboard_23-2149529410.jpg",
        },
        {
          title: "Periferiya",
          description: "Sifatli aksessuarlar",
          href: "#products",
          imageSrc: "http://img.b2bpic.net/free-photo/gradient-illuminated-neon-gaming-desk-setup-with-keyboard_23-2149529407.jpg",
        },
        {
          title: "Konsollar",
          description: "O'yin olami",
          href: "#products",
          imageSrc: "http://img.b2bpic.net/free-photo/gaming-keyboard-setup-high-angle_52683-88572.jpg",
        },
        {
          title: "Maxsus",
          description: "Eksklyuziv takliflar",
          href: "#products",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-hard-drive-with-purple-details_23-2149413406.jpg",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="products" data-section="products">
    <SectionErrorBoundary name="products">
          <FeaturesDetailedSteps
      tag="Mashhur"
      title="Yangi kelganlar"
      description="Eng yangi va eng zo‘r texnikalar."
      steps={[
        {
          tag: "Monitor",
          title: "2E Gaming R2723BV",
          subtitle: "27 inch 165Hz",
          description: "Yuqori aniqlikdagi egri monitor.",
          imageSrc: "http://img.b2bpic.net/free-photo/view-computer-monitor-display_23-2150757311.jpg",
        },
        {
          tag: "Laptop",
          title: "ASUS Zenbook 14 OLED",
          subtitle: "Premium OLED",
          description: "Ish va o'yin uchun eng yaxshisi.",
          imageSrc: "http://img.b2bpic.net/free-photo/modern-laptop-with-blank-white-screen-isolated-black-background-close-up_169016-64439.jpg",
        },
        {
          tag: "Keyboard",
          title: "Dark Project ALU87",
          subtitle: "Midnight Series",
          description: "Mexanik sifat va chidamlilik.",
          imageSrc: "http://img.b2bpic.net/free-photo/gamer-chair-with-multicolored-neon-lights_52683-99742.jpg",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="why-upg" data-section="why-upg">
    <SectionErrorBoundary name="why-upg">
          <MetricsMediaCards
      tag="Nima uchun UPG?"
      title="Bizning afzalliklarimiz"
      description="2009 yildan beri ishonchli hamkor."
      metrics={[
        {
          value: "24 oy",
          title: "Rasmiy kafolat",
          description: "Sifat kafolati va ishonch.",
          imageSrc: "https://storage.googleapis.com/webild/default/no-image.jpg?id=qbxfuj",
        },
        {
          value: "1-3 kun",
          title: "Tez yetkazish",
          description: "Butun O‘zbekiston bo‘ylab.",
          imageSrc: "http://img.b2bpic.net/free-vector/delivery-logo-template-with-truck_23-2147880954.jpg",
        },
        {
          value: "24/7",
          title: "Yordam",
          description: "Professional mutaxassislar.",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-with-headphones-working-call-center-office_23-2149256156.jpg",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="configurator" data-section="configurator">
    <SectionErrorBoundary name="configurator">
          <PricingMediaCards
      tag="Konfigurator"
      title="PC Konfiguratori"
      description="O‘zingizning ideal gaming PC ni yarating."
      plans={[
        {
          tag: "Budget",
          price: "4 500 000 so‘m",
          period: "dan",
          features: [
            "Core i3",
            "GTX 1650",
            "8GB RAM",
          ],
          primaryButton: {
            text: "Yaratish",
            href: "#",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-hard-drive-cable_23-2149413410.jpg",
        },
        {
          tag: "Pro",
          price: "12 000 000 so‘m",
          period: "dan",
          features: [
            "Core i7",
            "RTX 4060",
            "32GB RAM",
          ],
          primaryButton: {
            text: "Yaratish",
            href: "#",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-shot-man-using-tablet-data-center-ensuring-rigs-are-functioning_482257-89991.jpg",
        },
        {
          tag: "High-End",
          price: "18 000 000 so‘m",
          period: "dan",
          features: [
            "Core i9",
            "RTX 4090",
            "64GB RAM",
          ],
          primaryButton: {
            text: "Yaratish",
            href: "#",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/gaming-setup-arrangement-high-angle_23-2149680232.jpg",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="testimonials" data-section="testimonials">
    <SectionErrorBoundary name="testimonials">
          <TestimonialColumnMarqueeCards
      tag="Sharhlar"
      title="Mijozlarimiz nima deydi?"
      description="Bizga ishonganlar fikri."
      testimonials={[
        {
          name: "Azizbek",
          role: "Pro Gamer",
          quote: "UPG - eng yaxshi do'kon!",
          imageSrc: "http://img.b2bpic.net/free-photo/bearded-man-playing-video-games-room-with-colorful-neons-man-talking-with-his-friends-while-playing-video-games_482257-22153.jpg",
        },
        {
          name: "Dilshod",
          role: "Dasturchi",
          quote: "Texnikalar sifatli va tez.",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-keyboard-used-by-software-engineer-programming-home_482257-88598.jpg",
        },
        {
          name: "Jamila",
          role: "Grafik dizayner",
          quote: "Noutbuk ajoyib, rahmat!",
          imageSrc: "http://img.b2bpic.net/free-photo/black-teen-smiling-girl-headset-playing-video-games-video-game-club-with-blue-red-illumination_1268-24596.jpg",
        },
        {
          name: "Rustam",
          role: "Streamer",
          quote: "PC yig'ma sifatli chiqdi.",
          imageSrc: "http://img.b2bpic.net/free-photo/female-influencer-creating-online-content_482257-121994.jpg",
        },
        {
          name: "Sardor",
          role: "IT talaba",
          quote: "Narxlar hamyonbop.",
          imageSrc: "http://img.b2bpic.net/free-photo/gaming-setup-with-rgb-keyboard_23-2149829133.jpg",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="faq" data-section="faq">
    <SectionErrorBoundary name="faq">
          <FaqSimple
      tag="Yordam"
      title="Ko'p beriladigan savollar"
      description="Sizga qanday yordam bera olamiz?"
      items={[
        {
          question: "Yetkazib berish qancha vaqt oladi?",
          answer: "Toshkentda 1-2 kun, viloyatlarda 3-7 kun.",
        },
        {
          question: "Bo'lib to'lash imkoni bormi?",
          answer: "Ha, barcha bo'lib to'lash tizimlari mavjud.",
        },
        {
          question: "Kafolat qancha muddatga?",
          answer: "Mahsulotlarga 24 oygacha rasmiy kafolat beramiz.",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCta
      tag="Aloqa"
      text="Savollaringiz bormi? Mutaxassislarimizga murojaat qiling."
      primaryButton={{
        text: "Telegramdan yozish",
        href: "https://t.me/upg_uz",
      }}
      secondaryButton={{
        text: "Bizga qo'ng'iroq",
        href: "tel:+998991234567",
      }}
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
