import abyangamImg from '../assets/services/Abyangam.jpg.jpeg';
import thalamImg from '../assets/services/Thalam.jpg.jpeg';
import faceBellyImg from '../assets/services/Face-and-Belly-Pack.jpg.jpeg';
import navariImg from '../assets/services/Navara-theppu.jpg.jpeg';
import vedhuImg from '../assets/services/Vedhu-kuli.jpg.jpeg';
import sitzbathImg from '../assets/services/1000345088-01.jpeg';
import antistretchImg from '../assets/services/1000345091-01.jpeg';
import facialImg from '../assets/services/1000345098-01.jpeg';
import fertilityImg from '../assets/services/1000345150-01.jpeg';
import antenatalImg from '../assets/services/1000345153-01.jpeg';
import fibroidImg from '../assets/services/IMG-20260422-WA0016.jpg (1).jpeg';
import cystImg from '../assets/services/IMG-20260422-WA0018.jpg.jpeg'
import uttaravastiImg from '../assets/services/1000345207-02.jpeg';
import stressImg from '../assets/services/1000345283-01.jpeg';
import tummyImg from '../assets/services/1000345094-01.jpeg';
import pcosImg from '../assets/services/IMG-20260422-WA0022.jpg.jpeg';
import postnatalImg from '../assets/services/1000345156-01.jpeg';
import endoImg from '../assets/services/1000345165-01.jpeg';
import periodImg from '../assets/services/1000345173-01.jpeg';
import hygieneImg from '../assets/services/IMG-20260422-WA0020.jpg.jpeg';
import uterineImg from '../assets/services/IMG-20260422-WA0021.jpg.jpeg';
import pcosDetailImg from '../assets/services/pcos_detail.png';
import pcosPainImg from '../assets/services/IMG-20260422-WA0022.jpg.jpeg';
import wellnessExerciseImg from '../assets/services/indian-woman-doing-kundalini-yoga-gathering-inner-energy-healing-great-holistic-health.jpg.jpeg';
import abdominalBandageImg from '../assets/services/Abdominal-Bandage.jpg.jpeg';
import podiKizhiImg from '../assets/services/Podi-kizhi.jpg.jpeg';
import yogaImg from '../assets/services/yoga.jpg.jpeg';
import keshadoopanamImg from '../assets/services/Keshadoopanam.jpg.jpeg';
import padhabyangham from "../assets/services/1000345082-01.jpeg"
import steambath from "../assets/services/1000345101-01.jpeg"
import menopauseImg from "../assets/services/IMG-20260422-WA0023.jpg.jpeg"

export type CategoryType = 'GENERAL PACKAGES' | 'SPECIAL PACKAGES' | 'OUR SPECIALITIES' | 'EXCLUSIVE PACKAGE ON';

export interface CategoryMeta {
  title: string;
  slug: string;
  vision: string;
  description: string;
}

export interface ServiceSection {
  title: string;
  content: string;
  image: string;
}

export interface ServiceData {
  id: string;
  title: string;
  category: string;
  vision: string;
  description: string;
  image: string;
  sections: ServiceSection[];
}

export const CATEGORY_META: Record<string, CategoryMeta> = {
  'general': {
    title: 'GENERAL PACKAGES',
    slug: 'general',
    vision: 'Nurturing the transition of motherhood through traditional Ayurvedic wisdom and total body rejuvenation.',
    description: 'Our general packages provide a complete foundation for postnatal recovery, focusing on structural healing and physical revitalization.'
  },
  'special': {
    title: 'SPECIAL PACKAGES',
    slug: 'special',
    vision: 'Targeted treatments designed to address specific postpartum needs and restore physical confidence naturally.',
    description: 'Specialized interventions that focus on individual recovery goals, from skin care to abdominal toning.'
  },
  'specialities': {
    title: 'OUR SPECIALITIES',
    slug: 'specialities',
    vision: 'Clinically-proven Ayurvedic solutions for a wide range of gynecological health and fertility needs.',
    description: 'Expert-led treatments for women\'s health priorities, including fertility management and hormonal balance.'
  },
  'exclusive': {
    title: 'EXCLUSIVE PACKAGE ON',
    slug: 'exclusive',
    vision: 'Premier specialized care focusing on comprehensive women\'s wellness and deep therapeutic healing.',
    description: 'Our most intensive and specialized treatment protocols for those seeking deep, systemic wellness restoration.'
  }
};

export const SERVICES_DATA: Record<string, ServiceData> = {
  // --- GENERAL PACKAGES ---
  "abyangam": {
    id: "abyangam",
    title: "Abyangam (Including Head and Face)",
    category: "GENERAL PACKAGES",
    vision: "To provide a holistic Ayurvedic massage experience that rejuvenates the body and relaxes the mind.",
    description: "A traditional full-body massage using herbally infused oils that improves blood circulation, boosts immunity, and enhances skin health.",
    image: abyangamImg,
    sections: [
      {
        title: "Therapeutic Head Massage",
        content: "Relieves stress and improves hair health through deep-tissue stimulation using medicated oils.",
        image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Full Body Rejuvenation",
        content: "Staggered pressure techniques to release toxins and improve joint flexibility.",
        image: "https://images.unsplash.com/photo-1544161515-436ce6bd2183?auto=format&fit=crop&w=800&q=80"
      }
    ]
  },
  "thalam": {
    id: "thalam",
    title: "Thalam",
    category: "GENERAL PACKAGES",
    vision: "Targeted soothing of the crown to balance the nervous system and enhance mental clarity.",
    description: "Application of specialized herbal paste or oil on the crown of the head to treat stress, insomnia, and migraines.",
    image: thalamImg,
    sections: [
      {
        title: "Nervous System Calming",
        content: "The cooling effect of the paste helps in reducing heat and balancing pitta dosha.",
        image: "https://images.unsplash.com/photo-1536704689224-ca878893d25d?auto=format&fit=crop&w=800&q=80"
      }
    ]
  },
  "face-and-belly-pack": {
    id: "face-and-belly-pack",
    title: "Face and Belly Pack",
    category: "GENERAL PACKAGES",
    vision: "Restoring natural radiance and abdominal tone through organic herbal infusions.",
    description: "A combination treatment focusing on facial glow and restoring abdominal elasticity post-delivery.",
    image: faceBellyImg,
    sections: [
      {
        title: "Skin Nourishment",
        content: "Uses rare herbs to deeply cleanse and hydrate the face and belly area.",
        image: "https://images.unsplash.com/photo-1590103341341-844d383d03b0?auto=format&fit=crop&w=800&q=80"
      }
    ]
  },
  "abdominal-bandage": {
    id: "abdominal-bandage",
    title: "Abdominal Bandage",
    category: "GENERAL PACKAGES",
    vision: "Structural restoration and support for postpartum abdominal recovery.",
    description: "Traditional cloth wrapping combined with herbal oils to help the uterus return to its original size.",
    image: abdominalBandageImg,
    sections: [
      {
        title: "Core Support",
        content: "Provides physical compression that mimics the natural support of the abdominal wall.",
        image: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?auto=format&fit=crop&w=800&q=80"
      }
    ]
  },
  "podi-kizhi": {
    id: "podi-kizhi",
    title: "Podi kizhi",
    category: "GENERAL PACKAGES",
    vision: "Detoxification through thermal therapy using medicinal herbal powders.",
    description: "A fermenting treatment where herbal powder bags are used to apply heat and pressure to the body.",
    image: podiKizhiImg,
    sections: [
      {
        title: "Muscle Relief",
        content: "Effective for relieving muscle stiffness, joint pains, and inflammation.",
        image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80"
      }
    ]
  },
  "navara-theppu": {
    id: "navara-theppu",
    title: "Navara theppu",
    category: "GENERAL PACKAGES",
    vision: "Muscle strengthening and skin enrichment through nutrient-rich rice therapy.",
    description: "Application of cooked Navara rice and milk over the body to improve strength and complexion.",
    image: navariImg,
    sections: [
      {
        title: "Nutrient Absorption",
        content: "The skin absorbs essential nutrients directly from the medicated rice preparation.",
        image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80"
      }
    ]
  },
  "vedhu-kuli": {
    id: "vedhu-kuli",
    title: "Vedhu kuli",
    category: "GENERAL PACKAGES",
    vision: "Postpartum purification through traditional steam and herbal water baths.",
    description: "A ritualistic bath using medicated water and steam to cleanse the body after childbirth.",
    image: vedhuImg,
    sections: [
      {
        title: "Total Cleansing",
        content: "Removes toxins and helps in the complete physical recovery of the new mother.",
        image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=800&q=80"
      }
    ]
  },
  "keshadoopanam": {
    id: "keshadoopanam",
    title: "Keshadoopanam",
    category: "GENERAL PACKAGES",
    vision: "Hair and scalp health through medicinal smoke therapy.",
    description: "A unique hair care treatment using medicinal smoke to dry and treat hair after an oil bath.",
    image: keshadoopanamImg,
    sections: [
      {
        title: "Hair Strength",
        content: "Prevents hair fall and fungal infections of the scalp while providing a natural scent.",
        image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=800&q=80"
      }
    ]
  },
  "yoga": {
    id: "yoga",
    title: "Yoga",
    category: "GENERAL PACKAGES",
    vision: "Harmony of body, mind, and spirit for long-term health and vitality.",
    description: "Customized yoga sessions focusing on postpartum recovery, flexibility, and mental peace.",
    image: yogaImg,
    sections: [
      {
        title: "Postnatal Asanas",
        content: "Safe and effective movements to regain core strength and pelvic health.",
        image: "https://images.unsplash.com/photo-1588282322631-ce11e86a01c4?auto=format&fit=crop&w=800&q=80"
      }
    ]
  },
  "padhabyangam": {
    id: "padhabyangam",
    title: "Padhabyangam",
    category: "SPECIAL PACKAGES",
    vision: "Revitalization of the entire body through specialized foot reflexology.",
    description: "Traditional Ayurvedic foot massage that stimulates vital nerves and induces deep relaxation.",
    image: padhabyangham,
    sections: [
      {
        title: "Vital Link",
        content: "Connects foot points to internal organs for balanced metabolic activity.",
        image: "https://images.unsplash.com/photo-1519415387722-a1c3bbef716c?auto=format&fit=crop&w=800&q=80"
      }
    ]
  },
  "sitzbath": {
    id: "sitzbath",
    title: "Sitzbath",
    category: "SPECIAL PACKAGES",
    vision: "Soothing comfort and rapid healing for the perineal region.",
    description: "A warm, shallow bath to cleanse the perineum and provide relief from postpartum discomfort.",
    image: sitzbathImg,
    sections: [
      {
        title: "Healing Warmth",
        content: "Using antiseptic herbal infusions to prevent infection and speed up recovery.",
        image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80"
      }
    ]
  },
  "antistrech-mark-treatment": {
    id: "antistrech-mark-treatment",
    title: "Antistrech mark Treatment",
    category: "SPECIAL PACKAGES",
    vision: "Restoring skin texture and confidence through natural collagen boosting.",
    description: "Specialized oil applications and herbal packs to fade pregnancy stretch marks and tighten skin.",
    image: antistretchImg,
    sections: [
      {
        title: "Cell Regeneration",
        content: "Deep moisturizing treatments that stimulate the skin's natural repair mechanisms.",
        image: "https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&w=800&q=80"
      }
    ]
  },
  "tummy-correction-treatment": {
    id: "tummy-correction-treatment",
    title: "Tummy correction Treatment",
    category: "SPECIAL PACKAGES",
    vision: "Safe and effective abdominal contouring after the postpartum phase.",
    description: "Focuses on toning the abdominal muscles and reducing excess fat accumulation after 6 months of delivery.",
    image: tummyImg,
    sections: [
      {
        title: "Muscle Toning",
        content: "Uses specific herbal oils (Udwarthanam) to burn localized fat and define core muscles.",
        image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80"
      }
    ]
  },
  "ayurveda-facial": {
    id: "ayurveda-facial",
    title: "Ayurveda Facial",
    category: "SPECIAL PACKAGES",
    vision: "Timeless beauty through botanical purity and ancient skin secrets.",
    description: "A luxury facial using 100% natural ingredients like sandalwood, turmeric, and rose to rejuvenate skin.",
    image: facialImg,
    sections: [
      {
        title: "Glow & Radiance",
        content: "Removes pigmentation and dark spots while providing a deep, healthy glow.",
        image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc2069?auto=format&fit=crop&w=800&q=80"
      }
    ]
  },
  "steam-bath": {
    id: "steam-bath",
    title: "Steam Bath",
    category: "SPECIAL PACKAGES",
    vision: "Deep detoxification and muscle relaxation through aromatic steam.",
    description: "Full body steam using herbal decoctions to open pores and flush out impurities.",
    image: steambath,
    sections: [
      {
        title: "Dosha Balance",
        content: "Particularly effective for balancing Kapha and Vata doshas through moist heat.",
        image: "https://images.unsplash.com/photo-1519415387722-a1c3bbef716c?auto=format&fit=crop&w=800&q=80"
      }
    ]
  },
  "fertility-management": {
    id: "fertility-management",
    title: "Fertility Management",
    category: "OUR SPECIALITIES",
    vision: "Nurturing the path to conception through natural hormonal balance.",
    description: "Ancient Ayurvedic protocols to enhance reproductive health and prepare the body for motherhood.",
    image: fertilityImg,
    sections: [
      {
        title: "Pre-conceptive Care",
        content: "Detoxification (Shodhana) to ensure optimal health of both egg and sperm.",
        image: "https://images.unsplash.com/photo-1559757175-7b3112267f33?auto=format&fit=crop&w=800&q=80"
      }
    ]
  },
  "antenatal-care": {
    id: "antenatal-care",
    title: "Antenatal Care",
    category: "OUR SPECIALITIES",
    vision: "Ensuring a peaceful and healthy journey for both mother and child.",
    description: "Month-by-month Ayurvedic guidance on diet, lifestyle, and herbal support during pregnancy.",
    image: antenatalImg,
    sections: [
      {
        title: "Garhini Paricharya",
        content: "The traditional approach to morning sickness, back pain, and emotional well-being.",
        image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80"
      }
    ]
  },
  "post-natal-care": {
    id: "post-natal-care",
    title: "Post natal care",
    category: "OUR SPECIALITIES",
    vision: "Restoring the mother's strength and ensuring baby's optimal development.",
    description: "Comprehensive care for the 'fourth trimester' including massages, diet, and emotional support.",
    image: postnatalImg,
    sections: [
      {
        title: "Mother's Recovery",
        content: "Traditional oils and herbs to regain tissue strength and support lactation.",
        image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&w=800&q=80"
      }
    ]
  },
  "uterine-fibroid": {
    id: "uterine-fibroid",
    title: "Uterine Fibroid",
    category: "OUR SPECIALITIES",
    vision: "Non-invasive management of uterine growths through herbal synergy.",
    description: "Ayurvedic approach to reducing fibroid size and managing symptoms like heavy bleeding.",
    image: fibroidImg,
    sections: [
      {
        title: "Lekhana Therapy",
        content: "Scraping-like action of specific herbs that help in shrinking stagnant masses.",
        image: "https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&w=800&q=80"
      }
    ]
  },
  "ovarian-cyst": {
    id: "ovarian-cyst",
    title: "Ovarian Cyst",
    category: "OUR SPECIALITIES",
    vision: "Balancing pelvic health and resolving cysts without surgery.",
    description: "Focuses on balancing Agni (digestive fire) and clearing obstructions in the reproductive channels.",
    image: cystImg,
    sections: [
      {
        title: "Channel Clearing",
        content: "Using herbs that penetrate deep to clear blocked channels (Srotas) in the ovaries.",
        image: "https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&w=800&q=80"
      }
    ]
  },
  "endometriosis": {
    id: "endometriosis",
    title: "Endometriosis",
    category: "OUR SPECIALITIES",
    vision: "Relieving chronic pelvic pain and balancing endometrial growth.",
    description: "Ayurvedic management of Vata imbalance to reduce pain and inflammation associated with endometriosis.",
    image: endoImg,
    sections: [
      {
        title: "Pain Management",
        content: "Specialized bastis (enemas) that directly target the pelvic region to soothe Vata.",
        image: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?auto=format&fit=crop&w=800&q=80"
      }
    ]
  },
  "irregular-menstruation": {
    id: "irregular-menstruation",
    title: "Irregular Menstruation",
    category: "OUR SPECIALITIES",
    vision: "Restoring the natural rhythm of the woman's cycle.",
    description: "Treating the underlying hormonal disturbances to establish a regular, pain-free cycle.",
    image: periodImg,
    sections: [
      {
        title: "Cycle Regularization",
        content: "Herbs that nourish the uterus and regulate the endocrine system.",
        image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80"
      }
    ]
  },
  "leucorrhoea": {
    id: "leucorrhoea",
    title: "Leucorrhoea",
    category: "OUR SPECIALITIES",
    vision: "Restoring optimal vaginal health and hygiene naturally.",
    description: "Managing abnormal vaginal discharge through herbal washes and internal medications.",
    image: hygieneImg,
    sections: [
      {
        title: "Yoni Prakshalana",
        content: "Cleansing the area with decoctions that balance Kapha and have antimicrobial properties.",
        image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80"
      }
    ]
  },
  "endometrial-hyperplasia": {
    id: "endometrial-hyperplasia",
    title: "Endometrial Hyperplasia",
    category: "OUR SPECIALITIES",
    vision: "Managing uterine lining thickness through natural Pitta balance.",
    description: "Ayurvedic approach to prevent and manage the overgrowth of the endometrial lining.",
    image: uterineImg,
    sections: [
      {
        title: "Tissue Regulation",
        content: "Using cool and astringent herbs to prevent excessive proliferative growth.",
        image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=800&q=80"
      }
    ]
  },
  "pcos-management": {
    id: "pcos-management",
    title: "PCOS Management",
    category: "OUR SPECIALITIES",
    vision: "Holistic reversal of metabolic and hormonal imbalances naturally.",
    description: "Targeting the root cause of PCOS through lifestyle changes and specialized Ayurvedic treatments.",
    image: pcosPainImg,
    sections: [
      {
        title: "Metabolic Reset",
        content: "Herbal supplements and therapies that normalize insulin sensitivity and menstrual cycles.",
        image: pcosImg
      },
      {
        title: "Hormonal Balance",
        content: "Natural protocols focused on regulating ovulation and reducing androgen levels through clinical Ayurveda.",
        image: pcosDetailImg
      },
      {
        title: "Pathology Awareness",
        content: "Understanding the underlying metabolic and ovarian changes to targeted relief from discomfort.",
        image: pcosPainImg
      }
    ]
  },
  "menopausal-syndrome": {
    id: "menopausal-syndrome",
    title: "Menopausal Syndrome",
    category: "OUR SPECIALITIES",
    vision: "Transitioning into the golden years with grace, health, and vitality.",
    description: "Managing hot flashes, mood swings, and bone health during the transition to menopause.",
    image: menopauseImg,
    sections: [
      {
        title: "Hormonal Support",
        content: "Natural phytoestrogens and nerve tonics to ease the transition phase.",
        image: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80"
      }
    ]
  },
  "women-wellness": {
    id: "women-wellness",
    title: "Women Wellness",
    category: "EXCLUSIVE PACKAGE ON",
    vision: "Empowering women with total body and mind health at every stage of life.",
    description: "A comprehensive health check and Ayurvedic rejuvenation package designed for the modern woman.",
    image: wellnessExerciseImg,
    sections: [
      {
        title: "Total Rejuvenation",
        content: "Combines Abyangam, beauty treatments, and nutritional guidance.",
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Physical Vitality",
        content: "Focuses on safe postpartum exercise and yoga to regain core strength and energy.",
        image: wellnessExerciseImg
      }
    ]
  },
  "menopausal-care": {
    id: "menopausal-care",
    title: "Menopausal Care",
    category: "EXCLUSIVE PACKAGE ON",
    vision: "Specific therapeutic support for the post-reproductive phase.",
    description: "Intensive treatments to strengthen bones and maintain emotional balance post-menopause.",
    image: menopauseImg,


    sections: [
      {
        title: "Osteo Care",
        content: "Focuses on bone density and joint mobility using calcium-rich herbal preparations.",
        image: menopauseImg
      }
    ]
  },
  "uttaravasti": {
    id: "uttaravasti",
    title: "Uttaravasti",
    category: "EXCLUSIVE PACKAGE ON",
    vision: "Direct intrauterine therapy for complex reproductive disorders.",
    description: "The most effective Ayurvedic treatment for infertility and chronic uterine issues.",
    image: uttaravastiImg,
    sections: [
      {
        title: "Deep Treatment",
        content: "Administration of medicinal oils directly into the uterus under sterile conditions.",
        image: "https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&w=800&q=80"
      }
    ]
  },
  "stress-management": {
    id: "stress-management",
    title: "Stress Management",
    category: "EXCLUSIVE PACKAGE ON",
    vision: "Ultimate mental peace in a fast-paced world.",
    description: "A combination of Shirodhara, Thalam, and Yoga to deeply relax the nervous system.",
    image: stressImg,
    sections: [
      {
        title: "Mental Detox",
        content: "Clearing mental clutter and anxiety through rhythmic oil pouring on the forehead.",
        image: "https://images.unsplash.com/photo-1536704689224-ca878893d25d?auto=format&fit=crop&w=800&q=80"
      }
    ]
  },
  "tummy-correction": {
    id: "tummy-correction",
    title: "Tummy Correction",
    category: "EXCLUSIVE PACKAGE ON",
    vision: "Sculpting the core and restoring visceral health.",
    description: "Intensive abdominal therapy to reduce visceral fat and strengthen the core.",
    image: tummyImg,
    sections: [
      {
        title: "Digestive Fire",
        content: "Improving Agni to ensure localized fat is metabolized effectively.",
        image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80"
      }
    ]
  }
};
