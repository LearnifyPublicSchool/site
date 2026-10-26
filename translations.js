/**
 * Learnify Public School - Bilingual Translation Dictionary (English & Hindi)
 * Location: Ganj Basoda, Madhya Pradesh
 * Motto: Learn with Fun (खेल-खेल में सीखें)
 */

(function () {
  'use strict';

  const translations = {
    en: {
      // Document Metadata
      page_title: "Learnify Public School Ganj Basoda | Play Group to 8th",
      page_meta_desc: "Learnify Public School Ganj Basoda: Play Group to 8th. Experience our Learn with Fun philosophy, safe school transport & smart labs. Enroll now for 2026-2027!",
      skip_to_main: "Skip to main content",

      // Top Utility Bar
      top_motto_label: "Motto: ",
      top_motto_val: "Learn with Fun",
      top_timing: "Mon–Fri: 9:00 AM – 2:00 PM | Sat: 10:00 AM – 1:00 PM",
      top_location: "Ganj Basoda (M.P.)",

      // Navigation Bar
      nav_home: "Home",
      nav_about: "About",
      nav_offerings: "Academics",
      nav_infrastructure: "Facilities",
      nav_gallery: "Gallery",
      nav_reviews: "Reviews",
      nav_admissions: "Admissions",
      nav_location: "Contact",
      nav_cta: "Admission Inquiry",
      nav_lang_label: "Language / भाषा:",

      // Hero Section
      hero_tag: "Admissions Open for Session 2026-27",
      hero_heading_html: "Empowering Young Minds in Ganj Basoda with our <span class=\"highlight-text\">\"Learn with Fun\"</span> Philosophy (Play Group to Class 8th)",
      hero_desc_html: "Welcome to <strong>Learnify Public School Ganj Basoda</strong>, where our signature <strong>\"Learn with Fun\"</strong> philosophy transforms education into an exhilarating journey of discovery. Within our secure, CCTV-monitored campus on Tyonda Road, your child thrives through smart classrooms, interactive learning labs, and dependable safe school transport across Ganj Basoda. Here, disciplined academic habits and uninhibited intellectual curiosity grow together—ensuring every learner builds foundational confidence, problem-solving agility, and genuine moral strength.",
      hero_chip_1: "Play Group to Class 8th",
      hero_chip_2: "Activity-Based Learning",
      hero_chip_3: "Dedicated Safe Transport",
      hero_enroll_btn: "Enroll Your Child",
      hero_call_btn: "Call Helpline",
      hero_metric_1_num: "Play–8th",
      hero_metric_1_label: "Grade Spectrum",
      hero_metric_2_num: "100%",
      hero_metric_2_label: "Activity Oriented",
      hero_metric_3_num: "Safe Bus",
      hero_metric_3_label: "Dedicated Transit",
      hero_caption: "🌟 Dedicated Faculty & Caring Educators • Ganj Basoda",
      hero_badge_foundational_title: "Foundational Wing",
      hero_badge_foundational_sub: "Play Group to UKG",
      hero_badge_rating_title: "5.0 ★ Rating",
      hero_badge_rating_sub: "16 Google Reviews",

      // About Section
      about_tag: "About Our Institution",
      about_title: "The Foundational Wing: Igniting Early Cognitive Brain Development Without Academic Anxiety",
      about_subtitle: "As the top preschool and play school in Ganj Basoda, Learnify Public School eliminates the stress of rote learning. From Play Group, Nursery, LKG, and UKG to Class 8th, we cultivate foundational curiosity, bilingual phonics, and lifelong conceptual agility.",
      about_spotlight_pill: "Foundational Stage Pedagogy",
      about_spotlight_h3: "Specialized Foundational Wing for Early Learners (Play Group to UKG)",
      about_spotlight_p1: "At <strong>Learnify Public School Ganj Basoda</strong>, our specialized Foundational Wing is custom-engineered to stimulate early neural pathways during the brain's most critical developmental window (ages 2 to 6).",
      about_spotlight_p2: "<strong>Why Activity-Oriented Structures Prevent Early Academic Anxiety:</strong> Conventional classrooms often force toddler minds into mechanical memorization, inducing silent academic dread before a child even grasps core concepts. By replacing rigid desk drills with scientifically calibrated sensory kits, kinetic play tables, and phonics immersion, learning becomes an exciting game of exploration. Children touch, build, question, and discover—retaining concepts permanently without fear or marks pressure.",
      about_spotlight_b1: "<strong>Cognitive Brain Development:</strong> Multi-sensory Montessori tools and brain-mapping puzzles stimulating neuroplasticity",
      about_spotlight_b2: "<strong>Linguistic Phonics & Articulation:</strong> Systematic synthetic phonics fostering fluent bilingual expression (English & Hindi)",
      about_spotlight_b3: "<strong>Zero-Fear Child Psychology:</strong> Warm, motherly mentorship with dedicated child-to-teacher attention",
      about_director_quote: "Our central doctrine is the <strong>\"Learn with Fun\"</strong> concept. When a child enjoys what they learn, their cognitive capacity multiplies naturally without academic anxiety.",
      about_director_name: "Mrs. Preeti Saint Bhavsar",
      about_director_title: "Founding Director • Learnify Public School, Ganj Basoda",

      // 4 Core Pillars
      pillar_1_title: "Cognitive Brain Development",
      pillar_1_desc: "Puzzles, mental math games, critical reasoning tasks, and curiosity-driven inquiry exercises systematically stimulate neuroplasticity in formative developmental years.",
      pillar_2_title: "Activity-Based Learning",
      pillar_2_desc: "Textbooks are supported by physical models, role-playing, scientific experiments, and dramatized storytelling to replace rote learning with lasting comprehension.",
      pillar_3_title: "Child Awareness & Safety",
      pillar_3_desc: "We educate children on personal safety, social boundaries, emotional hygiene, and mutual respect while maintaining 24/7 CCTV vigilance across all school corners.",
      pillar_4_title: "Value-Based Holistic Ethics",
      pillar_4_desc: "Academic competence is balanced with moral integrity, empathy, environmental stewardship, civic discipline, and respectful social manners.",

      // Safety Spotlight
      safety_pill: "Institutional Trust & Safety",
      safety_h3: "Women-Led Leadership, 100% Student Safety, and Timeless Moral Values",
      safety_p: "Choosing the <strong>best school in Ganj Basoda</strong> is an act of deep parental trust. Under the personal stewardship of <strong>Founding Director Mrs. Preeti Saint Bhavsar</strong>, Learnify Public School unites the empathetic warmth of a mother with high academic rigor.",
      safety_b1: "<strong>24/7 CCTV Monitoring:</strong> Continuous HD video vigilance across all classrooms, corridors, indoor labs, and play areas with strict access controls.",
      safety_b2: "<strong>Safe School Transport in Ganj Basoda:</strong> Verified female attendants (<em>didis</em>) on all vehicles overseeing boarding, seating, and doorstep handovers across Tyonda Road, Ghungroo Garden, and city routes.",
      safety_b3: "<strong>Holistic Moral Values & Sanskar:</strong> Daily value assemblies, respect for elders, peer empathy, and social responsibility woven into daily life.",
      safety_quote: "\"Every child entering our gates is nurtured with the same protective vigilance, unconditional encouragement, and ethical integrity that we demand for our own children.\"",
      safety_director_title: "Founding Director • Women-Led Leadership",

      // Offerings Section
      offerings_tag: "Core Offerings & Structure",
      offerings_title: "A Coherent Educational Journey for Every Child",
      offerings_subtitle: "From the first steps in early preschool to analytical mastery in Class 8th, our school provides an unbroken continuum of care, discovery, and modern infrastructure.",
      card1_age: "Ages 2 – 5 Years",
      card1_title: "Foundational Years",
      card1_sub: "Play Group, Nursery, LKG & UKG",
      card1_mini: "Activity & Sensory-Based Curriculum",
      card1_text: "Designed specifically for toddlers and young learners, focusing on emotional security, sensory perception, and cognitive awakening without academic pressure.",
      card1_b1: "Phonics & early bilingual vocabulary",
      card1_b2: "Montessori sensory kits & motor games",
      card1_b3: "Puppetry, role play & interactive circle time",
      card1_b4: "Gentle social habits & toilet-training support",
      card1_link: "Inquire for Foundational Wing →",

      card2_age: "Classes 1st – 8th",
      card2_title: "Middle Years",
      card2_sub: "Primary & Upper-Primary Grades",
      card2_mini: "Comprehensive Curriculum & STEM",
      card2_text: "Transitioning learners from fundamental literacy to strong analytical competency, scientific temperament, digital literacy, and expressive leadership.",
      card2_b1: "Robust Science, Math & English foundation",
      card2_b2: "Computer studies & introductory digital skills",
      card2_b3: "Art, craft, debates & public speaking practice",
      card2_b4: "Continuous assessment & personalized mentoring",
      card2_link: "Inquire for Middle Wing →",

      card3_age: "Safety & Infrastructure",
      card3_title: "Campus Facilities",
      card3_sub: "Safe Transport & Modern Classrooms",
      card3_mini: "Parent-Approved Safety Standards",
      card3_text: "Every square foot of our campus is structured to ensure child safety, comfort, intellectual inspiration, and peace of mind for every parent in Ganj Basoda.",
      card3_b1: "Dedicated safe transport with verified attendants",
      card3_b2: "Bright, ventilated & smart digital classrooms",
      card3_b3: "Comprehensive CCTV coverage and safe entry control",
      card3_b4: "Pure RO drinking water & hygienic restrooms",
      card3_link: "Explore Campus Details →",

      // Infrastructure Section
      infra_tag: "Campus Infrastructure",
      infra_title: "Designed for Joy, Safety, and Deep Focus",
      infra_subtitle: "Take a closer look at the facilities engineered to support your child’s daily growth in Ganj Basoda.",
      infra_item1_title: "Modern Smart Classrooms",
      infra_item1_desc: "Equipped with audio-visual learning aids, ergonomic furniture tailored for kids, and abundant natural ventilation for energetic learning.",
      infra_item2_title: "Dedicated Safe Transport",
      infra_item2_desc: "Comfortable school vehicles covering key neighborhoods in Ganj Basoda and nearby localities, operated by police-verified drivers and trained female attendants.",
      infra_item3_title: "Curated Activity & Reading Nooks",
      infra_item3_desc: "Rich collection of age-appropriate picture books, scientific experiment kits, blocks, and brain puzzles to ignite the lifelong habit of reading.",
      infra_item4_title: "CCTV Monitored Secure Campus",
      infra_item4_desc: "Round-the-clock surveillance in common zones, controlled entry and exit, and constant teacher supervision guaranteeing child safety throughout school hours.",
      infra_item5_title: "Activity & Creative Arts Lab",
      infra_item5_desc: "Dedicated creative spaces where students practice painting, clay modeling, public speaking, yoga, and cooperative group games.",
      infra_item6_title: "Regular Parent-Teacher Interaction",
      infra_item6_desc: "Transparent communication with bi-weekly updates on your child's cognitive milestones, social adaptation, and academic achievements.",

      // Gallery Section
      gallery_tag: "Campus Life & Activities",
      gallery_title: "Interactive Campus & Activity Gallery",
      gallery_subtitle: "Experience our vibrant campus environment in Ganj Basoda. Click any photo to inspect full details in high resolution.",
      gallery_tab_all: "All Photos (15)",
      gallery_tab_classroom: "Classrooms & Learning",
      gallery_tab_activity: "Events & Celebrations",
      gallery_tab_campus: "Campus Life",
      gallery_tab_faculty: "Faculty & Mentors",

      // Gallery Items
      gallery_item1_title: "Interactive Classrooms",
      gallery_item1_desc: "Modern learning methods & personal child attention",
      gallery_item1_pill: "Classroom",
      gallery_item2_title: "Creative Project Work",
      gallery_item2_desc: "Sensory models & cognitive brain development",
      gallery_item2_pill: "Classroom",
      gallery_item3_title: "Foundational Circle Time",
      gallery_item3_desc: "Joyful collaborative activities & phonics games",
      gallery_item3_pill: "Classroom",
      gallery_item4_title: "Confidence & Expression",
      gallery_item4_desc: "Nurturing public speaking & presentation skills",
      gallery_item4_pill: "Classroom",
      gallery_item5_title: "Independence Day Ceremony",
      gallery_item5_desc: "Patriotic flag hoisting & cultural pride",
      gallery_item5_pill: "Celebration",
      gallery_item6_title: "15 August Festivities",
      gallery_item6_desc: "Inculcating moral heritage and social harmony",
      gallery_item6_pill: "Celebration",
      gallery_item7_title: "Gandhi Jayanti Observance",
      gallery_item7_desc: "Values of truth, peace, and environmental duty",
      gallery_item7_pill: "Celebration",
      gallery_item8_title: "School Milestones",
      gallery_item8_desc: "Recognizing student accomplishments and joy",
      gallery_item8_pill: "Celebration",
      gallery_item9_title: "Morning Assembly",
      gallery_item9_desc: "Starting every school morning with positivity & discipline",
      gallery_item9_pill: "Campus Life",
      gallery_item10_title: "Play & Motor Activities",
      gallery_item10_desc: "Developing healthy physical strength and coordination",
      gallery_item10_pill: "Campus Life",
      gallery_item11_title: "Supervised Recreation",
      gallery_item11_desc: "Gentle supervision in an emotionally welcoming setting",
      gallery_item11_pill: "Campus Life",
      gallery_item12_title: "Outdoor Exploration",
      gallery_item12_desc: "Encouraging curiosity through nature & teamwork",
      gallery_item12_pill: "Campus Life",
      gallery_item13_title: "Secure School Grounds",
      gallery_item13_desc: "Clean, spacious, and safe premises on Tyonda Road",
      gallery_item13_pill: "Campus Life",
      gallery_item14_title: "Dedicated Teaching Faculty",
      gallery_item14_desc: "Passionate educators certified in modern child pedagogy",
      gallery_item14_pill: "Faculty",
      gallery_item15_title: "Mentorship & Guidance",
      gallery_item15_desc: "Steered by Director Mrs. Preeti Saint Bhavsar",
      gallery_item15_pill: "Faculty",

      // Reviews Section
      reviews_tag: "Parent Testimonials",
      reviews_title: "Trusted by Families Across Ganj Basoda",
      reviews_subtitle: "Authentic feedback from parents whose children experience joy, safety, and academic clarity every day at Learnify Public School.",
      reviews_stat_source: "Perfect 5.0 Google Rating",
      reviews_stat_count: "Based on 16 Verified Google Reviews",
      reviews_stat_badge: "Verified Google Business Profile",
      reviews_women_led: "Women-Led Educational Institution",
      reviews_women_dir: "Directed by <strong>Mrs. Preeti Saint Bhavsar</strong> • Student-First Leadership",
      reviews_write_btn: "Write a Google Review",
      review_1_name: "Parent Reviewer",
      review_1_role: "Local Parent • Ganj Basoda",
      review_1_quote: "\"Teachers take good care of the children.....like the child's second home ❤️. Outstanding affection, motherly supervision, and true peace of mind.\"",
      review_1_focus: "Focus: Emotional Safety & Child Care",
      review_2_name: "Satisfied Parent",
      review_2_role: "Parent • Ganj Basoda",
      review_2_quote: "\"Best faculty, safe environment and moral education with latest technology. Highly recommend Learnify Public School for solid foundational development.\"",
      review_2_focus: "Focus: Academic Faculty & Modern Tech",
      review_3_name: "Rajesh Patel",
      review_3_role: "Parent • Ganj Basoda",
      review_3_quote: "\"The 'Learn with Fun' method is so refreshing! My child is genuinely happy every morning. Cognitive games, moral values, and creative play have transformed his interest in studies.\"",
      review_3_focus: "Focus: Learn with Fun Philosophy",
      review_4_name: "Amit Verma",
      review_4_role: "Parent • Ganj Basoda",
      review_4_quote: "\"Dedicated safe transit with verified female attendants is a blessing for working parents. Excellent campus vigilance, CCTV, and regular transparent teacher communication.\"",
      review_4_focus: "Focus: Safe Transport & CCTV Vigilance",
      reviews_all_link: "Read all 16 Verified Reviews on Google Maps",

      // Admissions Section
      admissions_tag: "Start Your Journey",
      admissions_title: "Admissions & Operational Timings",
      admissions_subtitle: "Secure your child’s seat for the upcoming academic session. Connect with our admissions counselor or visit our campus office during operational hours.",
      admissions_form_title: "Admission Inquiry Form",
      admissions_form_desc: "Fill in the details below. Our admissions coordinator will contact you within 24 operational hours.",
      form_parent_label: "Parent / Guardian Full Name",
      form_parent_placeholder: "e.g. Rajesh Sharma",
      form_phone_label: "Contact Mobile Number",
      form_phone_placeholder: "e.g. 9406037165",
      form_phone_help: "10-digit mobile number for SMS and call follow-up",
      form_age_label: "Child's Age (Years)",
      form_age_placeholder: "e.g. 4",
      form_grade_label: "Grade Applying For",
      form_grade_default: "Select Grade",
      form_msg_label: "Questions or Transport Requirements (Optional)",
      form_msg_placeholder: "Tell us if you require bus transport, previous school background, or preferred timing to visit.",
      form_submit_btn: "Submit Inquiry via WhatsApp",
      form_privacy_note: "🔒 We value your privacy. Your information is kept strictly confidential.",

      // Schedule Box
      schedule_title: "Campus & Office Timings",
      schedule_subtitle: "Academic Sessions & Parent Counselor Hours",
      schedule_row1_day: "Monday – Friday",
      schedule_row1_time: "9:00 AM – 2:00 PM",
      schedule_row1_status: "Regular School & Office",
      schedule_row2_day: "Saturday",
      schedule_row2_time: "10:00 AM – 1:00 PM",
      schedule_row2_status: "Office & Parent Queries",
      schedule_row3_day: "Sunday",
      schedule_row3_time: "Closed",
      schedule_row3_status: "Weekly Holiday",

      // Helpdesk Box
      helpdesk_title: "Direct Admissions Helpline",
      helpdesk_text: "Prefer speaking with our principal or counselor directly? Call us anytime during working hours.",
      helpdesk_phone1_label: "Primary Admission Line",
      helpdesk_phone2_label: "Alternate Administration Line",
      helpdesk_whatsapp_btn: "Chat with Us on WhatsApp",

      // Location Section
      location_tag: "Campus Location",
      location_title: "Conveniently Located in Ganj Basoda",
      location_subtitle: "Easily accessible via Tyonda Road, opposite Hotel Yogeshwari.",
      location_addr_label: "School Address",
      location_addr_val: "Learnify Public School, Tyonda Rd, opp. Hotel Yogeshwari, Ganj Basoda, Madhya Pradesh 464221",
      location_landmark_label: "Prominent Landmark",
      location_landmark_val: "Directly Opposite Hotel Yogeshwari",
      location_maps_btn: "Open in Google Maps",

      // FAQ Section
      faq_tag: "Parent Queries",
      faq_title: "Frequently Asked Questions",
      faq_q1: "Which residential areas in Ganj Basoda are covered by your safe school transport facility?",
      faq_a1_html: "<p><strong>Learnify Public School</strong> operates an extensive, child-safe school transport network covering all major neighborhoods across Ganj Basoda (M.P.). Our dedicated fleet connects families along <strong>Tyonda Road, Ghungroo Garden, Station Road, Rajiv Nagar, Bareth Road, Udaipur Road, Mill Road</strong>, and surrounding residential colonies.</p><p>To guarantee complete peace of mind, every vehicle is driven by vetted drivers and accompanied by dedicated <strong>female attendants (<em>didis</em>)</strong> who supervise boarding, seating, and doorstep handovers. For specific pick-up points and timing inquiries, call our transport desk at <strong>+91 94060 37165</strong>.</p>",
      faq_q2: "What is the admission process for the 2026–2027 academic session, and what are the age criteria?",
      faq_a2_html: "<p><strong>Ganj Basoda school admissions</strong> for the <strong>2026–2027 academic session</strong> are officially open from <strong>Play Group to Class 8th</strong>. We follow a welcoming, child-friendly interaction model with zero intimidating tests:</p><ul><li><strong>Play Group:</strong> Minimum 2 to 2.5 years of age.</li><li><strong>Nursery:</strong> Minimum 3 years of age.</li><li><strong>LKG &amp; UKG:</strong> 4 to 5 years of age.</li><li><strong>Classes 1st to 8th:</strong> Age-appropriate admissions based on foundational readiness.</li></ul><p>Parents can collect admission forms from our campus on <strong>Tyonda Road (Opposite Hotel Yogeshwari)</strong> during visiting hours (Mon–Fri 9 AM–2 PM, Sat 10 AM–1 PM) or initiate an inquiry via WhatsApp/call at <strong>+91 91740 00988</strong>.</p>",
      faq_q3: "How does the \"Learn with Fun\" activity-based curriculum differ from traditional schools in Ganj Basoda MP?",
      faq_a3_html: "<p>Unlike conventional schools in Ganj Basoda that rely on rote book drills and early homework pressure, Learnify pioneers an <strong>activity-based, cognitive brain development curriculum</strong>.</p><p>In our <strong>Foundational Wing (Play Group, Nursery, LKG, UKG)</strong>, concepts are introduced through tactile Montessori learning kits, phonics-based linguistic games, and sensory discovery stations. As students progress into <strong>Classes 1st through 8th</strong>, this evolves into practical STEM experiments, interactive smart-board lessons, bilingual fluency, and holistic moral ethics (<em>Sanskar</em>) under the leadership of <strong>Director Mrs. Preeti Saint Bhavsar</strong>.</p>",
      faq_q4: "What are the campus working hours for parent visits and admissions?",
      faq_a4_html: "<p>Our admissions and administrative office at Tyonda Road, opposite Hotel Yogeshwari, is open <strong>Monday to Friday from 9:00 AM to 2:00 PM</strong>, and on <strong>Saturday from 10:00 AM to 1:00 PM</strong>. We remain closed on Sundays and national holidays.</p>",

      // Footer
      footer_about: "Nurturing young minds through our signature \"Learn with Fun\" philosophy. Empowering students with cognitive clarity, creative freedom, and moral values from Play Group to Class 8th.",
      footer_motto: "Motto: <strong>Learn with Fun</strong>",
      footer_nav_heading: "Quick Navigation",
      footer_grades_heading: "Grade Spectrum",
      footer_contact_heading: "Campus Information",
      footer_link_home: "Home",
      footer_link_about: "About Our Philosophy",
      footer_link_offerings: "Academic Programs",
      footer_link_infra: "Campus Facilities",
      footer_link_gallery: "Campus Gallery",
      footer_link_reviews: "Parent Reviews",
      footer_link_admissions: "Admission Inquiry",
      footer_link_location: "Campus Location",
      footer_grade_play: "Play Group (Ages 2-3)",
      footer_grade_nur: "Nursery & Kindergarten",
      footer_grade_primary: "Primary Wing (Classes 1–5)",
      footer_grade_middle: "Middle Wing (Classes 6–8)",
      footer_grade_transport: "Safe Bus Transport",
      footer_grade_labs: "Brain Development Labs",
      footer_timing_desc: "Mon–Fri: 9:00 AM – 2:00 PM<br>Sat: 10:00 AM – 1:00 PM (Sun: Closed)",
      footer_copyright: "All rights reserved. Ganj Basoda, Madhya Pradesh.",
      footer_credit: "Designed with Activity-Based Learning Excellence • Ganj Basoda, Madhya Pradesh",

      // Floating Mobile Bar
      mobile_call: "Call Campus",
      mobile_whatsapp: "WhatsApp",
      mobile_inquire: "Inquire Now",

      // Modals
      modal_success_title: "Inquiry Sent via WhatsApp!",
      modal_success_msg_prefix: "Thank you, ",
      modal_success_msg_mid: "! Your admission inquiry for ",
      modal_success_msg_suffix: " has been formatted for WhatsApp.",
      modal_success_info: "If WhatsApp didn't launch automatically, tap the button below to message our admissions team directly at <strong>+91 94060 37165</strong>.",
      modal_whatsapp_btn: "Open in WhatsApp",
      modal_close_btn: "Done / Close",
      lightbox_counter_pattern: "{current} of {total}",

      // Form Validation & Interaction
      val_name_error: "Please provide a valid full parent name (min 3 characters).",
      val_phone_required: "Contact number is required.",
      val_phone_invalid: "Please enter a valid 10-digit phone number without spaces or symbols.",
      val_age_error: "Enter child age between 2 and 15 years.",
      val_grade_error: "Please select the grade you are applying for.",
      val_submitting: "Connecting to WhatsApp...",

      // Grade Options
      grade_optgroups: {
        foundational: "Foundational Wing (Play Group – UKG)",
        primary: "Primary Wing",
        middle: "Middle Wing"
      },
      grade_options: {
        "Play Group": "Play Group (Ages 2-3)",
        "Nursery": "Nursery (Ages 3-4)",
        "LKG": "LKG (Ages 4-5)",
        "UKG": "UKG (Ages 5-6)",
        "Class 1st": "Class 1st",
        "Class 2nd": "Class 2nd",
        "Class 3rd": "Class 3rd",
        "Class 4th": "Class 4th",
        "Class 5th": "Class 5th",
        "Class 6th": "Class 6th",
        "Class 7th": "Class 7th",
        "Class 8th": "Class 8th"
      }
    },

    hi: {
      // Document Metadata
      page_title: "लर्निफाई पब्लिक स्कूल गंज बासोदा | प्ले ग्रुप से कक्षा 8वीं तक",
      page_meta_desc: "लर्निफाई पब्लिक स्कूल गंज बासोदा: प्ले ग्रुप से 8वीं तक। खेल-खेल में सीखें, सुरक्षित स्कूल बस एवं स्मार्ट क्लासरूम। सत्र 2026-2027 के लिए प्रवेश प्रारंभ!",
      skip_to_main: "मुख्य सामग्री पर जाएं",

      // Top Utility Bar
      top_motto_label: "ध्येय: ",
      top_motto_val: "खेल-खेल में सीखें (Learn with Fun)",
      top_timing: "सोम–शुक्र: सुबह 9:00 – दोपहर 2:00 | शनि: सुबह 10:00 – दोपहर 1:00",
      top_location: "गंज बासोदा (म.प्र.)",

      // Navigation Bar
      nav_home: "होम",
      nav_about: "परिचय",
      nav_offerings: "शिक्षा",
      nav_infrastructure: "सुविधाएं",
      nav_gallery: "गैलरी",
      nav_reviews: "समीक्षाएं",
      nav_admissions: "प्रवेश",
      nav_location: "संपर्क",
      nav_cta: "प्रवेश पूछताछ",
      nav_lang_label: "भाषा / Language:",

      // Hero Section
      hero_tag: "सत्र 2026-27 के लिए प्रवेश प्रारंभ",
      hero_heading_html: "गंज बासोदा में हमारे <span class=\"highlight-text\">\"खेल-खेल में सीखें\"</span> दर्शन के साथ बाल-मन का सर्वांगीण विकास (प्ले ग्रुप से कक्षा 8वीं तक)",
      hero_desc_html: "<strong>लर्निफाई पब्लिक स्कूल गंज बासोदा</strong> में आपका स्वागत है, जहाँ हमारा <strong>\"खेल-खेल में सीखें\"</strong> का सिद्धांत शिक्षा को एक आनंदमय खोज में बदल देता है। त्योंदा रोड पर हमारे सुरक्षित, सीसीटीवी-निगरानी युक्त परिसर में आपका बच्चा स्मार्ट कक्षाओं, इंटरएक्टिव लैब्स और संपूर्ण गंज बासोदा में विश्वसनीय व सुरक्षित स्कूल वाहन सेवा के साथ आगे बढ़ता है। यहाँ बिना किसी तनाव के अनुशासन, ज्ञान और नैतिक संस्कारों की सुदृढ़ नींव रखी जाती है।",
      hero_chip_1: "प्ले ग्रुप से कक्षा 8वीं तक",
      hero_chip_2: "गतिविधि-आधारित शिक्षा",
      hero_chip_3: "समर्पित सुरक्षित स्कूल बस",
      hero_enroll_btn: "बच्चे का प्रवेश कराएं",
      hero_call_btn: "हेल्पलाइन पर कॉल करें",
      hero_metric_1_num: "प्ले–8वीं",
      hero_metric_1_label: "कक्षा वर्ग",
      hero_metric_2_num: "100%",
      hero_metric_2_label: "गतिविधि आधारित",
      hero_metric_3_num: "सुरक्षित बस",
      hero_metric_3_label: "समर्पित वाहन सेवा",
      hero_caption: "🌟 समर्पित शिक्षक एवं स्नेहपूर्ण मार्गदर्शक • गंज बासोदा",
      hero_badge_foundational_title: "आधारभूत शाखा",
      hero_badge_foundational_sub: "प्ले ग्रुप से यूकेजी",
      hero_badge_rating_title: "5.0 ★ रेटिंग",
      hero_badge_rating_sub: "16 गूगल समीक्षाएं",

      // About Section
      about_tag: "हमारी संस्था के बारे में",
      about_title: "आधारभूत शाखा: बिना किसी शैक्षणिक तनाव के प्रारंभिक मस्तिष्क और बौद्धिक विकास",
      about_subtitle: "गंज बासोदा के अग्रणी प्री-स्कूल और प्ले स्कूल के रूप में, लर्निफाई पब्लिक स्कूल रटने के दबाव को दूर करता है। प्ले ग्रुप, नर्सरी, एलकेजी व यूकेजी से लेकर कक्षा 8वीं तक, हम बच्चों में सहज जिज्ञासा, द्विभाषी फोनिक्स और तार्किक क्षमता विकसित करते हैं।",
      about_spotlight_pill: "प्राथमिक चरण शिक्षण पद्धति",
      about_spotlight_h3: "नन्हे बच्चों के लिए विशेष आधारभूत शाखा (प्ले ग्रुप से यूकेजी)",
      about_spotlight_p1: "<strong>लर्निफाई पब्लिक स्कूल गंज बासोदा</strong> में हमारी विशेष आधारभूत शाखा मस्तिष्क के सबसे महत्वपूर्ण विकासात्मक दौर (2 से 6 वर्ष की आयु) में बौद्धिक विकास को प्रेरित करने के लिए तैयार की गई है।",
      about_spotlight_p2: "<strong>गतिविधि-आधारित शिक्षण बच्चों में पढ़ाई का डर क्यों नहीं होने देता:</strong> पारंपरिक कक्षाओं में छोटे बच्चों पर रटने का बोझ डाल दिया जाता है, जिससे पढ़ाई का डर पैदा होता है। लर्निफाई में हम कठोर पढ़ाई की जगह मोंटेसरी सेंसरी किट्स, काइनेटिक खेल और फोनिक्स का उपयोग करते हैं, जिससे सीखना एक मजेदार खेल बन जाता है। बच्चे स्वयं छूकर, बनाकर और सवाल पूछकर सीखते हैं—जिससे वे बिना परीक्षा के तनाव के अवधारणाओं को हमेशा याद रखते हैं।",
      about_spotlight_b1: "<strong>संज्ञानात्मक मस्तिष्क विकास:</strong> बहु-संवेदी मोंटेसरी उपकरण एवं पहेलियां जो बच्चों की सोचने और समझने की क्षमता को तेज करती हैं।",
      about_spotlight_b2: "<strong>भाषा फोनिक्स एवं उच्चारण:</strong> व्यवस्थित फोनिक्स पद्धति जिससे बच्चे हिंदी और अंग्रेजी दोनों भाषाओं में स्पष्ट उच्चारण और अभिव्यक्ति सीखें।",
      about_spotlight_b3: "<strong>भयमुक्त बाल मनोविज्ञान:</strong> मातृवत स्नेहपूर्ण देखभाल और प्रत्येक बच्चे पर शिक्षक का व्यक्तिगत ध्यान।",
      about_director_quote: "हमारा मूल सिद्धांत <strong>'खेल-खेल में सीखें'</strong> है। जब बच्चा आनंद लेकर सीखता है, तो बिना किसी तनाव के उसकी सीखने की क्षमता स्वाभाविक रूप से कई गुना बढ़ जाती है।",
      about_director_name: "श्रीमती प्रीति संत भावसार",
      about_director_title: "संस्थापक निदेशक • लर्निफाई पब्लिक स्कूल, गंज बासोदा",

      // 4 Core Pillars
      pillar_1_title: "संज्ञानात्मक मस्तिष्क विकास",
      pillar_1_desc: "पहेलियां, मेंटल मैथ्स गेम्स और तार्किक अभ्यास प्रारंभिक वर्षों में बच्चे के बौद्धिक स्तर को व्यवस्थित रूप से बढ़ाते हैं।",
      pillar_2_title: "गतिविधि-आधारित शिक्षा",
      pillar_2_desc: "रटने की पद्धति की जगह प्रत्यक्ष मॉडल, रोल-प्ले, बाल प्रयोग और कहानियों के माध्यम से गहरी व स्थायी समझ विकसित की जाती है।",
      pillar_3_title: "बाल जागरूकता एवं सुरक्षा",
      pillar_3_desc: "हम बच्चों को व्यक्तिगत सुरक्षा, आपसी सम्मान और सामाजिक व्यवहार सिखाते हैं, साथ ही पूरे परिसर में 24/7 सीसीटीवी से निगरानी रखते हैं।",
      pillar_4_title: "संस्कार एवं नैतिक मूल्य",
      pillar_4_desc: "शैक्षणिक योग्यता के साथ-साथ नैतिक सत्यनिष्ठा, बड़ों का आदर, पर्यावरण के प्रति सजगता और नागरिक अनुशासन का समन्वय।",

      // Safety Spotlight
      safety_pill: "संस्थागत विश्वास एवं सुरक्षा",
      safety_h3: "महिला-नेतृत्व, 100% विद्यार्थी सुरक्षा और सुदृढ़ संस्कार",
      safety_p: "<strong>गंज बासोदा में सर्वश्रेष्ठ स्कूल का चयन</strong> माता-पिता के गहरे विश्वास का निर्णय है। <strong>संस्थापक निदेशक श्रीमती प्रीति संत भावसार</strong> के व्यक्तिगत मार्गदर्शन में लर्निफाई पब्लिक स्कूल एक माँ के स्नेह और उच्च शैक्षणिक मानकों का अनूठा संगम है।",
      safety_b1: "<strong>24/7 सीसीटीवी निगरानी:</strong> सभी कक्षाओं, गलियारों, लैब्स और खेल क्षेत्रों में निरंतर एचडी वीडियो निगरानी व कड़ा प्रवेश नियंत्रण।",
      safety_b2: "<strong>गंज बासोदा में सुरक्षित वाहन सेवा:</strong> सभी वाहनों में सत्यापित महिला सहायिकाएं (दीदियां), जो त्योंदा रोड, घुँघरू गार्डन सहित शहर के सभी मार्गों पर बच्चों की सुरक्षित यात्रा सुनिश्चित करती हैं।",
      safety_b3: "<strong>संस्कार एवं नैतिक आचरण:</strong> दैनिक प्रार्थना सभा, बड़ों का सम्मान, सहपाठियों के प्रति संवेदनशीलता और सामाजिक उत्तरदायित्व का विकास।",
      safety_quote: "\"हमारे विद्यालय में प्रवेश करने वाले प्रत्येक बच्चे को वही सुरक्षा, निःस्वार्थ प्रोत्साहन और नैतिक संस्कार दिए जाते हैं जो हम अपने स्वयं के बच्चों के लिए चाहते हैं।\"",
      safety_director_title: "संस्थापक निदेशक • महिला-नेतृत्व",

      // Offerings Section
      offerings_tag: "प्रमुख कक्षाएं एवं संरचना",
      offerings_title: "प्रत्येक बच्चे के लिए एक सुव्यवस्थित शैक्षणिक यात्रा",
      offerings_subtitle: "प्रारंभिक प्री-स्कूल के पहले कदमों से लेकर कक्षा 8वीं तक, हमारा विद्यालय स्नेह, ज्ञान-खोज और आधुनिक सुविधाओं का निरंतर संगम प्रदान करता है।",
      card1_age: "आयु 2 से 5 वर्ष",
      card1_title: "आधारभूत प्रारंभिक वर्ष",
      card1_sub: "प्ले ग्रुप, नर्सरी, एलकेजी एवं यूकेजी",
      card1_mini: "गतिविधि एवं संवेदी पाठ्यक्रम",
      card1_text: "विशेष रूप से छोटे बच्चों के लिए निर्मित, जहाँ बिना पढ़ाई के बोझ के भावनात्मक सुरक्षा, संवेदी विकास और बौद्धिक जागृति पर ध्यान दिया जाता है।",
      card1_b1: "फोनिक्स एवं प्रारंभिक द्विभाषी शब्दावली",
      card1_b2: "मोंटेसरी संवेदी किट एवं शारीरिक विकास खेल",
      card1_b3: "कठपुतली नाटक, रोल प्ले एवं सर्कल टाइम गतिविधियां",
      card1_b4: "अच्छी आदतें एवं सौम्य सामाजिक व्यवहार",
      card1_link: "आधारभूत शाखा हेतु पूछताछ करें →",

      card2_age: "कक्षा 1ली से 8वीं",
      card2_title: "प्राथमिक एवं माध्यमिक वर्ग",
      card2_sub: "प्राइमरी एवं मिडिल स्कूल स्तर",
      card2_mini: "समग्र पाठ्यक्रम एवं विज्ञान-गणित (STEM)",
      card2_text: "विद्यार्थियों को मूलभूत साक्षरता से सशक्त विश्लेषणात्मक क्षमता, वैज्ञानिक सोच, डिजिटल ज्ञान और नेतृत्व कौशल की ओर अग्रसर करना।",
      card2_b1: "विज्ञान, गणित एवं अंग्रेजी की मजबूत नींव",
      card2_b2: "कंप्यूटर शिक्षा एवं प्रारंभिक डिजिटल कौशल",
      card2_b3: "कला, क्राफ्ट, वाद-विवाद एवं वाक-कला अभ्यास",
      card2_b4: "सतत मूल्यांकन एवं व्यक्तिगत मार्गदर्शन",
      card2_link: "मिडिल विंग हेतु पूछताछ करें →",

      card3_age: "सुरक्षा एवं सुविधाएं",
      card3_title: "परिसर की प्रमुख सुविधाएं",
      card3_sub: "सुरक्षित वाहन सेवा एवं स्मार्ट कक्षाएं",
      card3_mini: "अभिभावक-विश्वसनीय सुरक्षा मानक",
      card3_text: "हमारे परिसर का कोना-कोना बच्चे की सुरक्षा, आराम और प्रेरणा तथा गंज बासोदा के अभिभावकों की निश्चिंतता को ध्यान में रखकर तैयार किया गया है।",
      card3_b1: "महिला सहायिका सहित समर्पित सुरक्षित स्कूल वाहन",
      card3_b2: "हवादार, प्रकाशयुक्त एवं स्मार्ट डिजिटल कक्षाएं",
      card3_b3: "संपूर्ण सीसीटीवी कवरेज एवं सुरक्षित प्रवेश नियंत्रण",
      card3_b4: "शुद्ध आरओ पेयजल एवं स्वच्छ प्रसाधन व्यवस्था",
      card3_link: "परिसर की जानकारी देखें →",

      // Infrastructure Section
      infra_tag: "परिसर का ढाँचा",
      infra_title: "आनंद, सुरक्षा और एकाग्रता के लिए निर्मित",
      infra_subtitle: "गंज बासोदा में आपके बच्चे के सर्वांगीण विकास हेतु तैयार की गई आधुनिक सुविधाओं का अवलोकन करें।",
      infra_item1_title: "आधुनिक स्मार्ट कक्षाएं",
      infra_item1_desc: "दृश्य-श्रव्य (Audio-Visual) शिक्षण साधन, बच्चों के अनुकूल आरामदायक फर्नीचर और भरपूर ताजी हवा युक्त कक्षाएं।",
      infra_item2_title: "समर्पित सुरक्षित स्कूल वाहन सेवा",
      infra_item2_desc: "गंज बासोदा और आसपास के प्रमुख क्षेत्रों में चलने वाले सुरक्षित वाहन, पुलिस-सत्यापित चालक एवं प्रशिक्षित महिला सहायिकाएं।",
      infra_item3_title: "सुसज्जित एक्टिविटी व रीडिंग कॉर्नर",
      infra_item3_desc: "आयु-अनुकूल सचित्र पुस्तकें, विज्ञान किट, ब्लॉक्स और माइंड पहेलियों का संग्रह जो पठन-पाठन की आदत को बढ़ावा देता है।",
      infra_item4_title: "सीसीटीवी निगरानी युक्त सुरक्षित परिसर",
      infra_item4_desc: "पूरे परिसर में 24 घंटे सीसीटीवी कैमरे, नियंत्रित आवागमन और शिक्षकों की सतत देखरेख में बच्चों की पूर्ण सुरक्षा।",
      infra_item5_title: "एक्टिविटी एवं रचनात्मक कला लैब",
      infra_item5_desc: "ऐसा विशेष स्थल जहाँ बच्चे चित्रकला, क्ले मॉडलिंग, वक्तृत्व, योग और सामूहिक गतिविधियों का अभ्यास करते हैं।",
      infra_item6_title: "नियमित अभिभावक-शिक्षक संवाद",
      infra_item6_desc: "आपके बच्चे के मानसिक विकास, सामाजिक तालमेल और शैक्षणिक प्रगति की नियमित व पारदर्शी जानकारी।",

      // Gallery Section
      gallery_tag: "स्कूल जीवन एवं गतिविधियाँ",
      gallery_title: "इंटरएक्टिव स्कूल एवं गतिविधि गैलरी",
      gallery_subtitle: "गंज बासोदा में हमारे जीवंत विद्यालय परिवेश की झलक देखें। किसी भी फोटो पर क्लिक करके बड़े आकार में देखें।",
      gallery_tab_all: "सभी तस्वीरें (15)",
      gallery_tab_classroom: "कक्षाएं एवं शिक्षण",
      gallery_tab_activity: "उत्सव एवं कार्यक्रम",
      gallery_tab_campus: "परिसर का जीवन",
      gallery_tab_faculty: "शिक्षक एवं मार्गदर्शक",

      // Gallery Items
      gallery_item1_title: "इंटरएक्टिव कक्षाएं",
      gallery_item1_desc: "आधुनिक शिक्षण विधियां एवं व्यक्तिगत ध्यान",
      gallery_item1_pill: "कक्षाएं",
      gallery_item2_title: "रचनात्मक प्रोजेक्ट कार्य",
      gallery_item2_desc: "संवेदी मॉडल एवं दिमागी विकास",
      gallery_item2_pill: "कक्षाएं",
      gallery_item3_title: "आधारभूत सर्कल टाइम",
      gallery_item3_desc: "समूह गतिविधियां एवं फोनिक्स खेल",
      gallery_item3_pill: "कक्षाएं",
      gallery_item4_title: "आत्मविश्वास एवं अभिव्यक्ति",
      gallery_item4_desc: "वक्तृत्व कला एवं प्रस्तुति कौशल का विकास",
      gallery_item4_pill: "कक्षाएं",
      gallery_item5_title: "स्वतंत्रता दिवस समारोह",
      gallery_item5_desc: "ध्वजारोहण एवं देशभक्ति का उल्लास",
      gallery_item5_pill: "उत्सव",
      gallery_item6_title: "15 अगस्त सांस्कृतिक कार्यक्रम",
      gallery_item6_desc: "सांस्कृतिक चेतना एवं सामाजिक समरसता",
      gallery_item6_pill: "उत्सव",
      gallery_item7_title: "गांधी जयंती आयोजन",
      gallery_item7_desc: "सत्य, शांति और पर्यावरण के संस्कार",
      gallery_item7_pill: "उत्सव",
      gallery_item8_title: "विद्यालय की उपलब्धियां",
      gallery_item8_desc: "बच्चों की सफलता एवं उत्साह का उत्सव",
      gallery_item8_pill: "उत्सव",
      gallery_item9_title: "प्रातःकालीन प्रार्थना सभा",
      gallery_item9_desc: "सकारात्मक ऊर्जा एवं अनुशासन के साथ दिन की शुरुआत",
      gallery_item9_pill: "परिसर जीवन",
      gallery_item10_title: "खेलकूद एवं व्यायाम",
      gallery_item10_desc: "शारीरिक सामर्थ्य एवं मानसिक संतुलन",
      gallery_item10_pill: "परिसर जीवन",
      gallery_item11_title: "सुरक्षित खेल का आनंद",
      gallery_item11_desc: "स्नेहमयी वातावरण में बच्चों का खेलकूद",
      gallery_item11_pill: "परिसर जीवन",
      gallery_item12_title: "प्राकृतिक अन्वेषण",
      gallery_item12_desc: "प्रकृति के सान्निध्य में सीखने की ललक",
      gallery_item12_pill: "परिसर जीवन",
      gallery_item13_title: "सुरक्षित विद्यालय प्रांगण",
      gallery_item13_desc: "त्योंदा रोड पर स्वच्छ, खुला और सुरक्षित परिसर",
      gallery_item13_pill: "परिसर जीवन",
      gallery_item14_title: "समर्पित शिक्षक वर्ग",
      gallery_item14_desc: "आधुनिक बाल शिक्षण में दक्ष शिक्षक",
      gallery_item14_pill: "शिक्षक",
      gallery_item15_title: "कुशल नेतृत्व एवं मार्गदर्शन",
      gallery_item15_desc: "निदेशिका श्रीमती प्रीति संत भावसार के संरक्षण में",
      gallery_item15_pill: "शिक्षक",

      // Reviews Section
      reviews_tag: "अभिभावकों के विचार",
      reviews_title: "गंज बासोदा के परिवारों का अटूट विश्वास",
      reviews_subtitle: "उन अभिभावकों की वास्तविक राय जिनके बच्चे प्रतिदिन लर्निफाई पब्लिक स्कूल में खुशी, सुरक्षा और ज्ञान का अनुभव करते हैं।",
      reviews_stat_source: "शानदार 5.0 गूगल रेटिंग",
      reviews_stat_count: "16 सत्यापित गूगल समीक्षाओं पर आधारित",
      reviews_stat_badge: "सत्यापित गूगल बिजनेस प्रोफाइल",
      reviews_women_led: "महिला-नेतृत्व वाली शिक्षण संस्था",
      reviews_women_dir: "निदेशिका: <strong>श्रीमती प्रीति संत भावसार</strong> • विद्यार्थी-हित सर्वोपरि",
      reviews_write_btn: "गूगल पर समीक्षा लिखें",
      review_1_name: "अभिभावक समीक्षा",
      review_1_role: "स्थानीय अभिभावक • गंज बासोदा",
      review_1_quote: "\"शिक्षिकाएं बच्चों की बहुत अच्छी देखभाल करती हैं.....बच्चे के दूसरे घर की तरह ❤️। उत्कृष्ट स्नेह, मातृवत देखरेख और अभिभावकों की पूरी निश्चिंतता।\"",
      review_1_focus: "मुख्य पहलू: भावनात्मक सुरक्षा एवं बाल देखभाल",
      review_2_name: "संतुष्ट अभिभावक",
      review_2_role: "अभिभावक • गंज बासोदा",
      review_2_quote: "\"सर्वश्रेष्ठ शिक्षक, सुरक्षित वातावरण और आधुनिक तकनीक के साथ नैतिक शिक्षा। मजबूत प्रारंभिक विकास के लिए लर्निफाई पब्लिक स्कूल की अत्यधिक अनुशंसा करता हूँ।\"",
      review_2_focus: "मुख्य पहलू: योग्य शिक्षक एवं आधुनिक तकनीक",
      review_3_name: "राजेश पटेल",
      review_3_role: "अभिभावक • गंज बासोदा",
      review_3_quote: "\"'खेल-खेल में सीखें' का तरीका बहुत ही सराहनीय है! मेरा बच्चा रोज़ सुबह खुशी-खुशी स्कूल जाता है। बौद्धिक खेलों, संस्कारों और रचनात्मक गतिविधियों ने उसकी पढ़ाई में रुचि जगा दी है।\"",
      review_3_focus: "मुख्य पहलू: खेल-खेल में सीखें पद्धति",
      review_4_name: "अमित वर्मा",
      review_4_role: "अभिभावक • गंज बासोदा",
      review_4_quote: "\"महिला सहायिका के साथ सुरक्षित वाहन सेवा कामकाजी माता-पिता के लिए बहुत बड़ा सहारा है। बेहतरीन सीसीटीवी निगरानी और शिक्षकों का नियमित, पारदर्शी संवाद।\"",
      review_4_focus: "मुख्य पहलू: सुरक्षित वाहन एवं सीसीटीवी सुरक्षा",
      reviews_all_link: "गूगल मैप्स पर सभी 16 सत्यापित समीक्षाएं पढ़ें",

      // Admissions Section
      admissions_tag: "प्रवेश प्रक्रिया",
      admissions_title: "प्रवेश एवं विद्यालय का समय",
      admissions_subtitle: "आगामी शैक्षणिक सत्र के लिए अपने बच्चे का प्रवेश सुनिश्चित करें। हमारे प्रवेश परामर्शदाता से संपर्क करें या कार्यालयीन समय में विद्यालय पधारें।",
      admissions_form_title: "प्रवेश पूछताछ फॉर्म (Admission Inquiry)",
      admissions_form_desc: "कृपया नीचे दी गई जानकारी भरें। हमारे प्रवेश समन्वयक 24 कार्य घंटों में आपसे संपर्क करेंगे।",
      form_parent_label: "माता-पिता / अभिभावक का पूरा नाम",
      form_parent_placeholder: "उदा. राजेश शर्मा",
      form_phone_label: "मोबाइल नंबर",
      form_phone_placeholder: "उदा. 9406037165",
      form_phone_help: "10 अंकों का मोबाइल नंबर जिस पर संपर्क किया जा सके",
      form_age_label: "बच्चे की आयु (वर्षों में)",
      form_age_placeholder: "उदा. 4",
      form_grade_label: "किस कक्षा हेतु आवेदन कर रहे हैं",
      form_grade_default: "कक्षा का चयन करें",
      form_msg_label: "कोई प्रश्न या बस वाहन संबंधी आवश्यकता (वैकल्पिक)",
      form_msg_placeholder: "बताएं कि क्या आपको बस सुविधा चाहिए, बच्चे की पूर्व शिक्षा या मिलने का पसंदीदा समय।",
      form_submit_btn: "व्हाट्सएप द्वारा पूछताछ भेजें",
      form_privacy_note: "🔒 हम आपकी गोपनीयता का सम्मान करते हैं। आपकी जानकारी पूरी तरह सुरक्षित रखी जाती है।",

      // Schedule Box
      schedule_title: "विद्यालय एवं कार्यालय समय",
      schedule_subtitle: "कक्षाएं एवं अभिभावक परामर्श समय",
      schedule_row1_day: "सोमवार – शुक्रवार",
      schedule_row1_time: "सुबह 9:00 – दोपहर 2:00",
      schedule_row1_status: "नियमित कक्षाएं एवं कार्यालय",
      schedule_row2_day: "शनिवार",
      schedule_row2_time: "सुबह 10:00 – दोपहर 1:00",
      schedule_row2_status: "कार्यालय एवं अभिभावक परामर्श",
      schedule_row3_day: "रविवार",
      schedule_row3_time: "अवकाश",
      schedule_row3_status: "साप्ताहिक अवकाश",

      // Helpdesk Box
      helpdesk_title: "प्रवेश सीधी हेल्पलाइन",
      helpdesk_text: "क्या आप प्राचार्या या प्रवेश परामर्शदाता से सीधे बात करना चाहते हैं? कार्य समय में बेझिझक कॉल करें।",
      helpdesk_phone1_label: "मुख्य प्रवेश हेल्पलाइन",
      helpdesk_phone2_label: "प्रशासनिक हेल्पलाइन",
      helpdesk_whatsapp_btn: "व्हाट्सएप पर सीधे संदेश भेजें",

      // Location Section
      location_tag: "विद्यालय का पता",
      location_title: "गंज बासोदा में सुगम व प्रमुख स्थान",
      location_subtitle: "त्योंदा रोड पर होटल योगेश्वरी के ठीक सामने, आसानी से पहुंचने योग्य।",
      location_addr_label: "विद्यालय का पता",
      location_addr_val: "लर्निफाई पब्लिक स्कूल, त्योंदा रोड, होटल योगेश्वरी के सामने, गंज बासोदा, मध्य प्रदेश 464221",
      location_landmark_label: "मुख्य पहचान / लैंडमार्क",
      location_landmark_val: "होटल योगेश्वरी के ठीक सामने (घुँघरू गार्डन के पास)",
      location_maps_btn: "गूगल मैप्स में देखें",

      // FAQ Section
      faq_tag: "अभिभावकों के सामान्य प्रश्न",
      faq_title: "अक्सर पूछे जाने वाले प्रश्न (FAQ)",
      faq_q1: "आपके विद्यालय की सुरक्षित वाहन सेवा गंज बासोदा के किन-किन क्षेत्रों में उपलब्ध है?",
      faq_a1_html: "<p><strong>लर्निफाई पब्लिक स्कूल</strong> गंज बासोदा के सभी प्रमुख आवासीय क्षेत्रों में सुरक्षित स्कूल वाहन सुविधा संचालित करता है। हमारे वाहन <strong>त्योंदा रोड, घुँघरू गार्डन, स्टेशन रोड, राजीव नगर, बरेठ रोड, उदयपुर रोड, मिल रोड</strong> और आसपास की सभी कॉलोनियों को जोड़ते हैं।</p><p>माता-पिता की पूर्ण निश्चिंतता के लिए प्रत्येक वाहन में अनुभवी चालकों के साथ <strong>सत्यापित महिला सहायिकाएं (दीदियां)</strong> उपस्थित रहती हैं, जो बच्चों को सुरक्षित बैठाने और घर तक पहुंचाने की जिम्मेदारी निभाती हैं। वाहन रूट और समय की जानकारी के लिए हमारे ट्रांसपोर्ट डेस्क पर <strong>+91 94060 37165</strong> पर संपर्क करें।</p>",
      faq_q2: "शैक्षणिक सत्र 2026-2027 के लिए प्रवेश प्रक्रिया एवं आयु संबंधी नियम क्या हैं?",
      faq_a2_html: "<p><strong>सत्र 2026-2027</strong> के लिए <strong>प्ले ग्रुप से कक्षा 8वीं</strong> तक के प्रवेश प्रारंभ हैं। हम बिना किसी कठिन परीक्षा के बाल-सुलभ, सहज बातचीत के माध्यम से प्रवेश लेते हैं:</p><ul><li><strong>प्ले ग्रुप:</strong> न्यूनतम 2 से 2.5 वर्ष की आयु</li><li><strong>नर्सरी:</strong> न्यूनतम 3 वर्ष की आयु</li><li><strong>एलकेजी एवं यूकेजी:</strong> 4 से 5 वर्ष की आयु</li><li><strong>कक्षा 1ली से 8वीं:</strong> पूर्व कक्षा एवं आयु के आधार पर प्रवेश।</li></ul><p>अभिभावक <strong>त्योंदा रोड (होटल योगेश्वरी के सामने)</strong> स्थित विद्यालय कार्यालय से कार्य समय (सोम-शुक्र सुबह 9 से 2, शनि सुबह 10 से 1) में फॉर्म प्राप्त कर सकते हैं या <strong>+91 91740 00988</strong> पर कॉल/व्हाट्सएप कर सकते हैं।</p>",
      faq_q3: "\"खेल-खेल में सीखें\" (Learn with Fun) पद्धति पारंपरिक स्कूलों से किस प्रकार भिन्न है?",
      faq_a3_html: "<p>गंज बासोदा के पारंपरिक स्कूलों के विपरीत, जहाँ केवल किताबों से रटने और होमवर्क का भारी दबाव होता है, लर्निफाई <strong>गतिविधि-आधारित एवं बौद्धिक विकास केंद्रित पाठ्यक्रम</strong> अपनाता है।</p><p>हमारी <strong>आधारभूत शाखा (प्ले ग्रुप, नर्सरी, एलकेजी, यूकेजी)</strong> में मोंटेसरी सेंसरी किट्स, फोनिक्स और रचनात्मक खेलों के माध्यम से पढ़ाया जाता है। वहीं <strong>कक्षा 1ली से 8वीं</strong> में यह विज्ञान-गणित के व्यावहारिक प्रयोगों, स्मार्ट-बोर्ड डिजिटल कक्षाओं, द्विभाषी दक्षता और <strong>निदेशिका श्रीमती प्रीति संत भावसार</strong> के नेतृत्व में नैतिक संस्कारों (संस्कार शिक्षा) में तब्दील हो जाता है।</p>",
      faq_q4: "अभिभावकों के मिलने एवं प्रवेश संबंधी कार्यों के लिए विद्यालय का समय क्या है?",
      faq_a4_html: "<p>त्योंदा रोड (होटल योगेश्वरी के सामने) स्थित हमारा प्रवेश एवं प्रशासनिक कार्यालय <strong>सोमवार से शुक्रवार सुबह 9:00 बजे से दोपहर 2:00 बजे तक</strong> तथा <strong>शनिवार को सुबह 10:00 बजे से दोपहर 1:00 बजे तक</strong> खुला रहता है। रविवार और राष्ट्रीय अवकाशों पर कार्यालय बंद रहता है।</p>",

      // Footer
      footer_about: "हमारे विशिष्ट \"खेल-खेल में सीखें\" दर्शन के साथ बाल-मन को संवारना। प्ले ग्रुप से कक्षा 8वीं तक के विद्यार्थियों को बौद्धिक स्पष्टता, रचनात्मक स्वतंत्रता और नैतिक संस्कारों से समृद्ध करना।",
      footer_motto: "ध्येय: <strong>खेल-खेल में सीखें</strong>",
      footer_nav_heading: "त्वरित नेविगेशन",
      footer_grades_heading: "कक्षा वर्ग",
      footer_contact_heading: "संपर्क एवं कार्यालय",
      footer_link_home: "होम",
      footer_link_about: "हमारी शिक्षण पद्धति",
      footer_link_offerings: "शैक्षणिक कार्यक्रम",
      footer_link_infra: "परिसर की सुविधाएं",
      footer_link_gallery: "फोटो गैलरी",
      footer_link_reviews: "अभिभावक समीक्षाएं",
      footer_link_admissions: "प्रवेश पूछताछ",
      footer_link_location: "स्कूल का स्थान",
      footer_grade_play: "प्ले ग्रुप (आयु 2-3 वर्ष)",
      footer_grade_nur: "नर्सरी एवं किंडरगार्टन",
      footer_grade_primary: "प्राइमरी विंग (कक्षा 1–5)",
      footer_grade_middle: "मिडिल विंग (कक्षा 6–8)",
      footer_grade_transport: "सुरक्षित स्कूल बस",
      footer_grade_labs: "ब्रेन डेवलपमेंट लैब्स",
      footer_timing_desc: "सोम–शुक्र: सुबह 9:00 – दोपहर 2:00<br>शनि: सुबह 10:00 – दोपहर 1:00 (रवि: अवकाश)",
      footer_copyright: "सर्वाधिकार सुरक्षित। गंज बासोदा, मध्य प्रदेश।",
      footer_credit: "गतिविधि-आधारित उत्कृष्ट शिक्षा के साथ समर्पित • गंज बासोदा, मध्य प्रदेश",

      // Floating Mobile Bar
      mobile_call: "कॉल करें",
      mobile_whatsapp: "व्हाट्सएप",
      mobile_inquire: "प्रवेश पूछताछ",

      // Modals
      modal_success_title: "व्हाट्सएप द्वारा पूछताछ भेजी गई!",
      modal_success_msg_prefix: "धन्यवाद, ",
      modal_success_msg_mid: "! ",
      modal_success_msg_suffix: " हेतु आपकी प्रवेश पूछताछ व्हाट्सएप के लिए तैयार कर दी गई है।",
      modal_success_info: "यदि व्हाट्सएप स्वतः नहीं खुला, तो सीधे हमारी प्रवेश टीम को <strong>+91 94060 37165</strong> पर संदेश भेजने के लिए नीचे दिए गए बटन पर टैप करें।",
      modal_whatsapp_btn: "व्हाट्सएप में खोलें",
      modal_close_btn: "पूर्ण / बंद करें",
      lightbox_counter_pattern: "{total} में से {current}",

      // Form Validation & Interaction
      val_name_error: "कृपया माता-पिता का पूरा नाम दर्ज करें (न्यूनतम 3 अक्षर)।",
      val_phone_required: "मोबाइल नंबर आवश्यक है।",
      val_phone_invalid: "कृपया बिना किसी स्पेस या चिह्न के 10 अंकों का वैध मोबाइल नंबर दर्ज करें।",
      val_age_error: "बच्चे की आयु 2 से 15 वर्ष के बीच दर्ज करें।",
      val_grade_error: "कृपया उस कक्षा का चयन करें जिसके लिए आप आवेदन कर रहे हैं।",
      val_submitting: "व्हाट्सएप से जोड़ा जा रहा है...",

      // Grade Options
      grade_optgroups: {
        foundational: "आधारभूत शाखा (प्ले ग्रुप – यूकेजी)",
        primary: "प्राइमरी विंग",
        middle: "मिडिल विंग"
      },
      grade_options: {
        "Play Group": "प्ले ग्रुप (आयु 2-3 वर्ष)",
        "Nursery": "नursery (आयु 3-4 वर्ष)",
        "LKG": "एलकेजी (आयु 4-5 वर्ष)",
        "UKG": "यूकेजी (आयु 5-6 वर्ष)",
        "Class 1st": "कक्षा 1ली (Class 1st)",
        "Class 2nd": "कक्षा 2री (Class 2nd)",
        "Class 3rd": "कक्षा 3री (Class 3rd)",
        "Class 4th": "कक्षा 4थी (Class 4th)",
        "Class 5th": "कक्षा 5वीं (Class 5th)",
        "Class 6th": "कक्षा 6वीं (Class 6th)",
        "Class 7th": "कक्षा 7वीं (Class 7th)",
        "Class 8th": "कक्षा 8वीं (Class 8th)"
      }
    }
  };

  // Expose global dictionary
  window.LEARNIFY_I18N = translations;

  /**
   * Helper to retrieve active language from localStorage, URL param, or fallback to 'en'
   */
  window.getSavedLanguage = function () {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const urlLang = urlParams.get('lang');
      if (urlLang && (urlLang === 'en' || urlLang === 'hi')) {
        localStorage.setItem('learnify_lang', urlLang);
        return urlLang;
      }
      const saved = localStorage.getItem('learnify_lang');
      if (saved && (saved === 'en' || saved === 'hi')) {
        return saved;
      }
    } catch (e) {
      // localStorage might be unavailable in restricted environments
    }
    return 'en';
  };

  /**
   * Current active language
   */
  let currentLang = window.getSavedLanguage();

  window.getCurrentLanguage = function () {
    return currentLang;
  };

  /**
   * Translates a single key
   */
  window.t = function (key) {
    if (translations[currentLang] && translations[currentLang][key] !== undefined) {
      return translations[currentLang][key];
    }
    if (translations.en && translations.en[key] !== undefined) {
      return translations.en[key];
    }
    return key;
  };

  /**
   * Apply translations across entire DOM
   */
  window.applyLanguage = function (lang) {
    if (lang !== 'en' && lang !== 'hi') lang = 'en';
    currentLang = lang;

    try {
      localStorage.setItem('learnify_lang', lang);
    } catch (e) {}

    // 1. Update HTML lang and body data-lang
    document.documentElement.lang = lang;
    document.body.setAttribute('data-lang', lang);

    const langData = translations[lang] || translations.en;

    // 2. Update page title & meta description
    if (langData.page_title) {
      document.title = langData.page_title;
    }
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && langData.page_meta_desc) {
      metaDesc.setAttribute('content', langData.page_meta_desc);
    }
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle && langData.page_title) {
      ogTitle.setAttribute('content', langData.page_title);
    }
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc && langData.page_meta_desc) {
      ogDesc.setAttribute('content', langData.page_meta_desc);
    }

    // 3. Update all text nodes with data-i18n
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (langData[key] !== undefined) {
        el.textContent = langData[key];
      }
    });

    // 4. Update all HTML nodes with data-i18n-html
    document.querySelectorAll('[data-i18n-html]').forEach((el) => {
      const key = el.getAttribute('data-i18n-html');
      if (langData[key] !== undefined) {
        el.innerHTML = langData[key];
      }
    });

    // 5. Update placeholders with data-i18n-placeholder
    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (langData[key] !== undefined) {
        el.setAttribute('placeholder', langData[key]);
      }
    });

    // 6. Update titles with data-i18n-title
    document.querySelectorAll('[data-i18n-title]').forEach((el) => {
      const key = el.getAttribute('data-i18n-title');
      if (langData[key] !== undefined) {
        el.setAttribute('title', langData[key]);
      }
    });

    // 7. Update aria-labels with data-i18n-aria
    document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
      const key = el.getAttribute('data-i18n-aria');
      if (langData[key] !== undefined) {
        el.setAttribute('aria-label', langData[key]);
      }
    });

    // 8. Update Select Dropdown options for #target-grade
    const gradeSelect = document.getElementById('target-grade');
    if (gradeSelect && langData.grade_options) {
      const defaultOption = gradeSelect.querySelector('option[value=""]');
      if (defaultOption && langData.form_grade_default) {
        defaultOption.textContent = langData.form_grade_default;
      }

      // Optgroups
      const optgroups = gradeSelect.querySelectorAll('optgroup');
      optgroups.forEach((group) => {
        const groupKey = group.getAttribute('data-i18n-optgroup');
        if (groupKey && langData.grade_optgroups && langData.grade_optgroups[groupKey]) {
          group.label = langData.grade_optgroups[groupKey];
        }
      });

      // Options
      const options = gradeSelect.querySelectorAll('option[value]:not([value=""])');
      options.forEach((opt) => {
        const val = opt.value;
        if (langData.grade_options[val]) {
          opt.textContent = langData.grade_options[val];
        }
      });
    }

    // 9. Update Switcher Buttons active state
    document.querySelectorAll('[data-lang-code]').forEach((btn) => {
      const btnLang = btn.getAttribute('data-lang-code');
      const isActive = btnLang === lang;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });

    // 10. Fire custom event for any listeners (e.g., lightbox, form logic)
    window.dispatchEvent(new CustomEvent('learnify:languageChanged', { detail: { lang } }));
  };
})();
