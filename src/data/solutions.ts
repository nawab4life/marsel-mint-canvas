import heroUcc from "@/assets/hero-ucc.jpg";
import heroSecurity from "@/assets/hero-security.jpg";
import heroId from "@/assets/hero-id.jpg";
import heroIt from "@/assets/hero-it.jpg";
import heroAv from "@/assets/hero-av.jpg";

export interface Faq {
  question: string;
  answer: string;
}

export interface SubService {
  slug: string;
  title: string;
  /** Short card summary shown on the parent solution page */
  description: string;
  brands?: string;
  /** SEO */
  metaTitle: string;
  metaDescription: string;
  /** Inner page content */
  tagline: string;
  intro: string;
  body: string[];
  features: string[];
  industries: string[];
  faqs: Faq[];
}

export interface SolutionData {
  slug: string;
  title: string;
  image: string;
  imageAlt: string;
  subServices: SubService[];
  faqs: Faq[];
}

const uccSubServices: SubService[] = [
  {
    slug: "video-conferencing",
    title: "Video Conferencing Systems",
    description:
      "Room-based and personal video conferencing endpoints designed for clear, reliable meetings.",
    brands: "Cisco",
    metaTitle: "Video Conferencing Systems in Dubai — MarselTech",
    metaDescription:
      "Cisco video conferencing installation in Dubai: boardroom and huddle-room endpoints, cameras, microphones and one-touch join for reliable hybrid meetings.",
    tagline: "Meetings that start on time and sound right",
    intro:
      "We design, supply and install video conferencing systems for boardrooms, huddle rooms and training spaces across Dubai and the UAE — sized to the room, not to a catalogue page.",
    body: [
      "A video conferencing system is only as good as the room it sits in. We survey the space first: seating distance, ceiling height, glass surfaces, lighting and existing network capacity all change which camera, microphone and codec make sense. That survey is what stops a well-specified system from sounding hollow or framing half the table.",
      "Deployments are standardised around Cisco endpoints with one-touch join for Microsoft Teams, Webex and Zoom, so staff use the same three-second workflow in every room. We handle the display mounting, cable management, network configuration, calendar integration and user handover, then stay available for support once the room is live.",
    ],
    features: [
      "Room survey covering acoustics, sightlines, lighting and network readiness",
      "Cisco room kits, cameras, table and ceiling microphones sized per room",
      "One-touch join for Microsoft Teams, Webex and Zoom",
      "Display, mount, cabling and power integration with clean finishing",
      "Calendar and room-resource integration",
      "User training, documentation and post-installation support",
    ],
    industries: ["Corporate", "Education", "Healthcare", "Government"],
    faqs: [
      {
        question: "How much does a video conferencing room cost in Dubai?",
        answer:
          "A small huddle room typically lands between AED 12,000 and AED 25,000 including display, camera bar, mounting and installation. Boardrooms with ceiling microphones, dual displays and control panels run higher. We quote per room after a survey rather than by headcount.",
      },
      {
        question: "Will it work with Microsoft Teams and Zoom?",
        answer:
          "Yes. The endpoints we deploy are certified for Microsoft Teams Rooms and support Webex and Zoom, so a guest can join whichever platform the meeting was booked on without swapping cables or laptops.",
      },
      {
        question: "Can you upgrade an existing meeting room?",
        answer:
          "Often, yes. If the display and cabling are sound we reuse them and replace only the codec, camera and audio. We tell you upfront when reuse would compromise the result.",
      },
      {
        question: "Do you provide ongoing support?",
        answer:
          "We offer annual maintenance contracts covering firmware updates, remote diagnostics and on-site response, plus warranty handling through the manufacturer.",
      },
    ],
  },
  {
    slug: "voip-ip-telephony",
    title: "VoIP & IP Telephony",
    description:
      "Cloud and on-premise phone systems with call routing, voicemail and collaboration integration.",
    brands: "Cisco",
    metaTitle: "VoIP & IP Telephony Systems Dubai — MarselTech",
    metaDescription:
      "Cloud and on-premise VoIP phone systems in Dubai. Cisco IP telephony, call routing, IVR, voicemail and TRA-compliant SIP connectivity, installed and supported.",
    tagline: "One number plan, every device",
    intro:
      "We deploy IP telephony for offices, hotels and clinics that need dependable calling with proper call routing, reporting and integration into the tools staff already use.",
    body: [
      "Phone systems fail quietly: dropped calls at peak hours, a reception queue nobody can see, extensions that never made it into the dial plan. We start from your call flows — who answers what, after hours behaviour, escalation paths — and build the dial plan around them before any hardware is ordered.",
      "Systems can be hosted in the cloud or kept on-premise where regulation or connectivity requires it, and we work with UAE-licensed providers for SIP connectivity. Handsets, softphones and mobile clients all share one extension and voicemail box, so staff are reachable without publishing personal numbers.",
    ],
    features: [
      "Cloud, on-premise and hybrid IP-PBX deployments",
      "Dial plans, IVR menus, hunt groups and after-hours routing",
      "Desk handsets, softphones and mobile clients on one extension",
      "Voicemail-to-email, call recording and call reporting",
      "SIP trunk provisioning with UAE-licensed carriers",
      "Number porting and cutover planned outside business hours",
    ],
    industries: ["Corporate", "Hospitality", "Healthcare", "Retail"],
    faqs: [
      {
        question: "Can we keep our existing phone numbers?",
        answer:
          "Yes. Numbers are ported to the new platform and we schedule cutover outside working hours so there is no window where calls go unanswered.",
      },
      {
        question: "Is VoIP legal and reliable in the UAE?",
        answer:
          "Business VoIP is delivered through UAE-licensed providers. We configure the service through a compliant carrier and size your internet link and QoS so voice quality holds under load.",
      },
      {
        question: "Cloud or on-premise — which should we choose?",
        answer:
          "Cloud suits smaller and multi-site teams with predictable monthly cost. On-premise suits sites with strict data-residency rules or a large existing handset estate. We compare both against your five-year cost before recommending one.",
      },
    ],
  },
  {
    slug: "unified-messaging",
    title: "Unified Messaging & Collaboration",
    description:
      "Integrated chat, email, voice and video workflows that reduce context switching.",
    brands: "Cisco",
    metaTitle: "Unified Communications & Collaboration Dubai — MarselTech",
    metaDescription:
      "Unified communications in Dubai: chat, voice, video and email brought into one platform with directory, presence and single sign-on. Deployed and supported by MarselTech.",
    tagline: "Fewer tools, fewer missed messages",
    intro:
      "Unified collaboration puts messaging, calling, meetings and file sharing behind one identity, so conversations stop fragmenting across four apps.",
    body: [
      "Most organisations arrive at collaboration platforms by accident — a chat tool here, a meeting licence there, a phone system nobody integrated. The cost shows up as duplicated licences and staff who cannot tell where a decision was made.",
      "We consolidate that estate: a single directory, presence that reflects the phone system, meetings that dial in from the same client, and single sign-on so access follows joiners and leavers automatically. Rollout is staged team by team with training, so adoption is not left to chance.",
    ],
    features: [
      "Platform consolidation and licence rationalisation",
      "Single directory, presence and single sign-on",
      "Persistent chat, file sharing and meeting workflows",
      "Voice and video integrated into the same client",
      "Staged rollout with team-level training",
      "Adoption review after go-live",
    ],
    industries: ["Corporate", "Education", "Healthcare", "Professional Services"],
    faqs: [
      {
        question: "Do we have to replace everything at once?",
        answer:
          "No. We usually run the new platform alongside existing tools for a defined period, migrate team by team, then decommission old licences once usage has moved.",
      },
      {
        question: "Can it connect to our existing phone system?",
        answer:
          "In most cases yes — the collaboration client registers against the IP-PBX so users keep one extension across desk phone, desktop and mobile.",
      },
      {
        question: "How do you handle staff who resist new tools?",
        answer:
          "Short role-specific training sessions and quick-reference guides during the first two weeks, plus a named contact for questions. Adoption problems are almost always training problems.",
      },
    ],
  },
  {
    slug: "meeting-room-booking",
    title: "Meeting Room Booking Systems",
    description:
      "Room scheduling panels and software to reduce double-bookings and improve space use.",
    brands: "Multiple",
    metaTitle: "Meeting Room Booking Systems Dubai — MarselTech",
    metaDescription:
      "Room booking panels and scheduling software in Dubai. Calendar-synced displays, occupancy sensors and utilisation reporting installed by MarselTech.",
    tagline: "Know which room is actually free",
    intro:
      "Door-mounted booking panels sync with your calendar system so staff can see, claim and release rooms at a glance — and you can see which spaces are genuinely used.",
    body: [
      "Double-bookings and ghost bookings waste more office space than any floor plan. A booking panel outside each room shows current status in colour from down the corridor, allows ad-hoc booking on the spot, and auto-releases the room when nobody checks in.",
      "Panels integrate with Microsoft 365 or Google Workspace calendars, so there is no second system to maintain. Occupancy data feeds a utilisation report that tells you whether you need more rooms, smaller rooms, or better booking discipline.",
    ],
    features: [
      "Door panels with at-a-glance availability colour",
      "Microsoft 365 and Google Workspace calendar sync",
      "On-panel ad-hoc booking and check-in",
      "Auto-release of unclaimed rooms",
      "Occupancy sensors where required",
      "Utilisation reporting for space planning",
    ],
    industries: ["Corporate", "Coworking", "Education", "Government"],
    faqs: [
      {
        question: "Does it need new cabling?",
        answer:
          "Panels are normally powered over Ethernet, so one data drop per door is enough. Where cabling is impractical we can use battery or Wi-Fi panels, with a trade-off in maintenance.",
      },
      {
        question: "Will it work with our existing calendars?",
        answer:
          "Yes — rooms remain resources in Microsoft 365 or Google Workspace. Staff keep booking the way they already do.",
      },
      {
        question: "Can we see how often rooms are used?",
        answer:
          "Yes. Utilisation reports show booked versus occupied hours per room, which is usually the fastest way to justify or avoid a fit-out.",
      },
    ],
  },
  {
    slug: "wireless-presentation",
    title: "Wireless Presentation Systems",
    description: "Cable-free screen sharing for meeting rooms and huddle spaces.",
    brands: "Multiple",
    metaTitle: "Wireless Presentation Systems Dubai — MarselTech",
    metaDescription:
      "Wireless screen sharing for meeting rooms in Dubai. Guest-friendly presentation systems with multi-user sharing and secure network isolation, installed by MarselTech.",
    tagline: "Share a screen without hunting for an adapter",
    intro:
      "Wireless presentation lets staff and visitors put content on the room display in seconds, from any laptop or phone, without dongles or driver installs.",
    body: [
      "Meetings lose their first five minutes to cables. A wireless presentation receiver removes that: click a button or open a browser, and the screen appears. Multi-user modes let two or four sources share the display side by side for design reviews and workshops.",
      "Guest access is the part most installations get wrong. We isolate the presentation network from your corporate LAN so a visitor can present without being handed internal access, and we set moderation controls so nobody hijacks a live screen.",
    ],
    features: [
      "Button, app and browser-based sharing options",
      "Multi-source split-screen presentation",
      "Guest sharing on an isolated network segment",
      "Moderation and screen-lock controls",
      "Works with Windows, macOS, iOS and Android",
      "Integration with existing room displays",
    ],
    industries: ["Corporate", "Education", "Hospitality", "Coworking"],
    faqs: [
      {
        question: "Do visitors need to install software?",
        answer:
          "No. Browser-based and USB-button options let a guest present with no installation, which is the most common requirement in meeting rooms.",
      },
      {
        question: "Is it secure on our corporate network?",
        answer:
          "We place the receiver on a segmented guest VLAN with no route into internal systems, and enable PIN-based session joining.",
      },
      {
        question: "Can it be added to rooms we already have?",
        answer:
          "Yes — it is one of the cheapest upgrades to an existing room, needing only an HDMI input and power on the display side.",
      },
    ],
  },
];

const securitySubServices: SubService[] = [
  {
    slug: "cctv-video-surveillance",
    title: "CCTV & Video Surveillance",
    description:
      "IP cameras, NVRs and video analytics configured for coverage, retention and remote access.",
    brands: "Axis, CP Plus",
    metaTitle: "CCTV Installation Dubai — IP Video Surveillance | MarselTech",
    metaDescription:
      "CCTV installation in Dubai with Axis and CP Plus IP cameras. Coverage design, NVR storage sizing, remote viewing and SIRA-aware deployment by MarselTech.",
    tagline: "Coverage designed from your floor plan",
    intro:
      "We design and install IP CCTV systems for offices, retail, warehouses and hospitality across Dubai — starting from a camera-by-camera coverage plan, not a fixed package.",
    body: [
      "The difference between usable footage and expensive wallpaper is design. We mark camera positions on your floor plan, choose lens and sensor per position so faces and plates are identifiable at the distance that matters, and size storage to the retention period you actually need to keep.",
      "Installation covers cabling, PoE switching, NVR configuration, remote viewing on mobile, and a handover session so your team can retrieve and export footage without calling us. Where SIRA requirements apply to your premises, we specify equipment and retention to suit and coordinate with your approved consultant.",
    ],
    features: [
      "Camera-by-camera coverage plan on your floor plan",
      "Axis and CP Plus IP cameras selected per position",
      "NVR and storage sized to your retention requirement",
      "PoE switching, cabling and containment",
      "Secure remote viewing on desktop and mobile",
      "Footage export training and maintenance options",
    ],
    industries: ["Retail", "Corporate", "Warehousing", "Hospitality", "Education"],
    faqs: [
      {
        question: "How many cameras do we need?",
        answer:
          "It depends on entrances, cash points, blind corners and the level of detail you need at each. A site walk usually reduces the count people expect, because a correctly chosen lens covers more than a badly placed extra camera.",
      },
      {
        question: "How long can footage be stored?",
        answer:
          "We size storage to your requirement — 30 days is common for offices and retail, longer where regulation or insurance demands. Retention depends on camera count, resolution and frame rate, and we show the calculation in the quote.",
      },
      {
        question: "Do you handle SIRA compliance in Dubai?",
        answer:
          "We specify equipment and retention with SIRA requirements in mind and coordinate with your approved consultant for certification where your premises fall under those rules.",
      },
      {
        question: "Can we view cameras from a phone?",
        answer:
          "Yes, with secure remote access on iOS and Android. We configure it without exposing the recorder directly to the internet.",
      },
    ],
  },
  {
    slug: "access-control",
    title: "Access Control",
    description:
      "Card, biometric and mobile credential systems to control who enters your premises.",
    brands: "HID",
    metaTitle: "Access Control Systems Dubai — HID Readers | MarselTech",
    metaDescription:
      "HID access control installation in Dubai. Card, biometric and mobile credentials, door controllers, anti-passback and audit reporting, deployed by MarselTech.",
    tagline: "The right doors, the right people, the right hours",
    intro:
      "Access control turns your door policy into something enforceable and auditable — by person, by door, by time of day.",
    body: [
      "We map doors into zones, decide which credential each zone deserves, then install controllers, readers, locks and exit devices to match. High-assurance areas such as server rooms and cash offices get biometric or dual-credential readers; general office doors work fine on card or mobile.",
      "Fire compliance is designed in from the start: doors on escape routes fail safe and release on alarm. On handover you get a working administration console, documented zones and reporting so HR and facilities can add and revoke access without a service call.",
    ],
    features: [
      "Zone and door schedule design",
      "HID card, mobile and biometric readers",
      "Door controllers, maglocks, strikes and exit devices",
      "Anti-passback, interlocks and time-based rules",
      "Fire-alarm interface and fail-safe escape routes",
      "Audit trails and joiner/leaver administration training",
    ],
    industries: ["Corporate", "Healthcare", "Education", "Warehousing", "Data Centres"],
    faqs: [
      {
        question: "Can we use phones instead of cards?",
        answer:
          "Yes. Mobile credentials are issued and revoked remotely, which removes card printing and the cost of lost badges — usually worth it above roughly 50 users.",
      },
      {
        question: "What happens during a fire alarm or power cut?",
        answer:
          "Doors on escape routes are wired fail-safe and release automatically on alarm or power loss. Secure internal doors can be fail-secure with battery backup where Civil Defence approves.",
      },
      {
        question: "Can it integrate with CCTV and attendance?",
        answer:
          "Yes — badge events can bookmark camera footage and feed a time-and-attendance system so the same swipe serves both purposes.",
      },
    ],
  },
  {
    slug: "intrusion-detection",
    title: "Intrusion Detection & Alarms",
    description:
      "Perimeter and interior alarm systems with monitoring integration.",
    brands: "Honeywell",
    metaTitle: "Intrusion Alarm Systems Dubai — Honeywell | MarselTech",
    metaDescription:
      "Honeywell intrusion detection and burglar alarm systems in Dubai. Perimeter and interior detection, zoned arming and monitoring integration by MarselTech.",
    tagline: "Know the moment something is wrong",
    intro:
      "Intrusion systems detect entry before loss occurs — at the perimeter, at openings and inside protected rooms — and escalate it to someone who can act.",
    body: [
      "We layer detection rather than relying on one sensor type: contacts on doors and windows, motion detection sized to avoid pet and HVAC false alarms, glass-break where windows are exposed, and shock sensors on shutters and safes.",
      "Zoning lets you arm the warehouse while the office is still working, and part-arm overnight without trapping staff. Alarms can annunciate locally, notify key holders by app, and forward to a monitoring station, with CCTV verification so a response is based on a picture rather than a guess.",
    ],
    features: [
      "Honeywell control panels and keypads",
      "Door/window contacts, PIR, glass-break and shock sensors",
      "Zoned and part-set arming schedules",
      "Mobile notifications for key holders",
      "Monitoring-station and CCTV verification integration",
      "Battery backup and tamper protection throughout",
    ],
    industries: ["Retail", "Warehousing", "Corporate", "Residential Communities"],
    faqs: [
      {
        question: "How do you prevent false alarms?",
        answer:
          "Correct detector selection and placement, dual-technology sensors in difficult areas, and CCTV verification before escalation. Most false alarms trace back to a detector aimed at an air-conditioning outlet.",
      },
      {
        question: "Can the alarm be linked to a monitoring service?",
        answer:
          "Yes, panels can signal to a monitoring station over IP and mobile network, with key-holder notification in parallel.",
      },
      {
        question: "Will it work during a power failure?",
        answer:
          "Panels and detectors run on battery backup, typically sized for several hours, with mains-failure reporting included.",
      },
    ],
  },
  {
    slug: "intercom-video-door-entry",
    title: "Intercom & Video Door Entry",
    description:
      "Audio and video intercom systems for entry points and reception areas.",
    brands: "Aiphone",
    metaTitle: "Video Intercom & Door Entry Systems Dubai — MarselTech",
    metaDescription:
      "Aiphone video door entry and intercom installation in Dubai. Entrance panels, indoor monitors, mobile answering and access-control integration by MarselTech.",
    tagline: "See who is at the door before you open it",
    intro:
      "Video door entry gives reception, back-of-house and residential entrances a controlled way to identify and admit visitors.",
    body: [
      "An entrance panel with camera and call button pairs with indoor monitors, reception stations or a mobile app, so calls can be answered from wherever staff actually are. Doors release from the monitor, and events are logged.",
      "Systems scale from a single back door to multi-tenant buildings with directory panels and per-apartment addressing, and integrate with access control so one door serves both credential holders and visitors.",
    ],
    features: [
      "Aiphone entrance panels with camera and night illumination",
      "Indoor monitors, desk stations and mobile answering",
      "Door release and event logging",
      "Multi-tenant directory and per-unit addressing",
      "Integration with access control and CCTV",
      "Weather- and vandal-resistant outdoor hardware",
    ],
    industries: ["Residential Communities", "Corporate", "Healthcare", "Education"],
    faqs: [
      {
        question: "Can calls be answered on a phone?",
        answer:
          "Yes. Mobile answering means an unattended reception or an out-of-hours delivery can still be handled and the door released remotely.",
      },
      {
        question: "Does it work for a multi-tenant building?",
        answer:
          "Yes — directory panels support per-unit calling, and each unit gets its own monitor and door-release rights.",
      },
      {
        question: "Will the camera cope with sun glare at the entrance?",
        answer:
          "We select panels with wide dynamic range and position them to avoid backlight, so faces stay visible in Dubai's daylight conditions.",
      },
    ],
  },
  {
    slug: "command-control",
    title: "Integrated Command & Control",
    description:
      "Unified security dashboards for larger sites that need centralized monitoring.",
    brands: "Multiple",
    metaTitle: "Integrated Security Command & Control Dubai — MarselTech",
    metaDescription:
      "Unified security management platforms in Dubai. Bring CCTV, access control, alarms and intercom into one operator dashboard with mapped alarms and SOP workflows.",
    tagline: "One screen for everything happening on site",
    intro:
      "When a site outgrows separate apps for cameras, doors and alarms, a command-and-control platform brings them into a single operator view with defined response procedures.",
    body: [
      "Operators should not be alt-tabbing during an incident. We integrate video, access, intrusion and intercom into one interface where an alarm drops a pin on a site map, pulls the nearest cameras, and presents the standard operating procedure for that event type.",
      "Every action is timestamped and logged, so post-incident review produces a defensible record rather than a reconstruction. We size the platform and workstations to your site count and design the escalation matrix with your security manager.",
    ],
    features: [
      "Single operator interface across video, access, alarms and intercom",
      "Map-based alarm presentation with nearest-camera call-up",
      "Standard operating procedures per event type",
      "Timestamped audit log and incident reporting",
      "Multi-site and control-room workstation deployment",
      "Escalation matrix designed with your security team",
    ],
    industries: ["Corporate Campuses", "Warehousing", "Healthcare", "Government"],
    faqs: [
      {
        question: "Do we have to replace our existing systems?",
        answer:
          "Usually not. Most mainstream cameras, panels and controllers integrate through supported drivers; we confirm compatibility during survey before proposing anything.",
      },
      {
        question: "Is this worth it for a single building?",
        answer:
          "Rarely. It pays off with multiple buildings, a staffed control room, or compliance requirements for logged incident handling. We will say so if your site does not need it.",
      },
      {
        question: "How long does a deployment take?",
        answer:
          "Typically four to ten weeks depending on how many subsystems are integrated and how much SOP definition is needed.",
      },
    ],
  },
  {
    slug: "remote-monitoring-maintenance",
    title: "Remote Monitoring & Maintenance",
    description:
      "Off-site health checks and troubleshooting to keep systems online.",
    brands: "Multiple",
    metaTitle: "Security System Maintenance & Remote Monitoring Dubai — MarselTech",
    metaDescription:
      "Annual maintenance contracts for CCTV, access control and alarms in Dubai. Remote health monitoring, firmware updates, preventive visits and on-site response.",
    tagline: "Find the failed camera before you need the footage",
    intro:
      "Security systems degrade silently. Remote monitoring and scheduled maintenance keep recorders, cameras and controllers healthy so the evidence exists when it matters.",
    body: [
      "We monitor device availability, recording continuity, disk health and firmware status, and raise a ticket when something drifts rather than waiting for a report. Most faults — a camera offline, a disk failing, a controller unreachable — are visible days before anyone notices on site.",
      "Contracts include preventive visits for cleaning and refocusing, firmware and password hygiene, backup verification, and defined on-site response times, with warranty claims handled through the manufacturer on your behalf.",
    ],
    features: [
      "Remote device and recording-health monitoring",
      "Disk, storage and retention verification",
      "Firmware, patch and credential hygiene",
      "Scheduled preventive visits including camera cleaning and refocusing",
      "Defined on-site response times",
      "Manufacturer warranty handling",
    ],
    industries: ["Retail", "Corporate", "Hospitality", "Warehousing"],
    faqs: [
      {
        question: "Do you maintain systems you did not install?",
        answer:
          "Yes, after a condition survey. We document what is failing or unsupported before taking over so there are no surprises for either side.",
      },
      {
        question: "What response time do you offer?",
        answer:
          "Standard contracts target next-business-day on-site attendance in Dubai, with faster options for critical sites.",
      },
      {
        question: "How is remote access secured?",
        answer:
          "Through controlled VPN or manufacturer cloud services with per-engineer accounts and logged sessions — never open port forwarding.",
      },
    ],
  },
];

const idSubServices: SubService[] = [
  {
    slug: "access-control-systems",
    title: "Access Control Systems",
    description:
      "Door controllers, readers and credentials that manage entry by person, time and zone.",
    brands: "HID",
    metaTitle: "HID Access Control Systems Dubai — MarselTech",
    metaDescription:
      "HID access control in Dubai: door controllers, card and mobile readers, zone scheduling and audit reporting, designed and installed by MarselTech.",
    tagline: "Enforceable door policy, end to end",
    intro:
      "We deploy HID-based access control that matches your organisation chart: who enters which zone, on which days, with which credential.",
    body: [
      "Access control projects fail when the door schedule is an afterthought. We build the zone matrix with your facilities and HR teams first, then choose controllers and readers to fit — including which doors genuinely need a reader on both sides.",
      "Installation covers controllers, readers, locking hardware, power and fire interface, followed by administrator training so your team runs day-to-day access changes internally.",
    ],
    features: [
      "Zone matrix and door schedule workshop",
      "HID controllers, readers and credentials",
      "Locking hardware, REX devices and power supplies",
      "Fire-alarm interfacing and fail-safe escape doors",
      "Role-based administration and audit reports",
      "Administrator training and documentation",
    ],
    industries: ["Corporate", "Education", "Healthcare", "Retail"],
    faqs: [
      {
        question: "How many doors can one system handle?",
        answer:
          "From a single door to several hundred across multiple buildings. The controller architecture changes with scale, which is why we design the topology before quoting hardware.",
      },
      {
        question: "Can access rights follow HR changes automatically?",
        answer:
          "Yes, where an HR or directory system can be integrated, joiners and leavers can drive access provisioning rather than manual edits.",
      },
      {
        question: "What credential types do you support?",
        answer:
          "Encrypted smart cards, fobs, mobile credentials and biometrics — often mixed, with higher assurance reserved for sensitive zones.",
      },
    ],
  },
  {
    slug: "time-attendance",
    title: "Time & Attendance Systems",
    description:
      "Clock-in/clock-out solutions integrated with payroll and HR systems.",
    brands: "HID",
    metaTitle: "Time & Attendance Systems Dubai — MarselTech",
    metaDescription:
      "Biometric and card-based time and attendance systems in Dubai. Shift rules, overtime tracking, exception reports and payroll integration by MarselTech.",
    tagline: "Hours you can pay against with confidence",
    intro:
      "Time and attendance turns door events and clock-ins into shift data your payroll team can actually use, with the exceptions flagged rather than buried.",
    body: [
      "We configure shift patterns, grace periods, break rules and overtime thresholds to match your policy and UAE labour practice, so the report reflects the rules you already operate under.",
      "Terminals can be biometric, card or mobile with geofencing for field staff. Data exports to your payroll or HR platform on a schedule, and exception reports surface missed punches and unapproved overtime before payroll runs.",
    ],
    features: [
      "Biometric, card and mobile clock-in options",
      "Shift patterns, grace periods and break rules",
      "Overtime and absence tracking",
      "Exception reports before payroll cut-off",
      "Payroll and HR system export or integration",
      "Multi-site and multi-department reporting",
    ],
    industries: ["Construction", "Retail", "Hospitality", "Manufacturing", "Education"],
    faqs: [
      {
        question: "Can it integrate with our payroll software?",
        answer:
          "Most platforms accept scheduled file exports, and API integration is available for common HR systems. We confirm the method during scoping.",
      },
      {
        question: "Which is better, fingerprint or face recognition?",
        answer:
          "Face or palm recognition suits dusty sites and high-throughput entrances where fingerprints read poorly; fingerprint remains cost-effective for office environments.",
      },
      {
        question: "Can field staff clock in remotely?",
        answer:
          "Yes, with a mobile app using geofencing so a punch is tied to an approved location.",
      },
    ],
  },
  {
    slug: "visitor-management",
    title: "Visitor Management Systems",
    description:
      "Pre-registration, badge printing and host notifications for visitor entry.",
    brands: "Multiple",
    metaTitle: "Visitor Management Systems Dubai — MarselTech",
    metaDescription:
      "Visitor management in Dubai: pre-registration, self-service check-in kiosks, badge printing, host notification and evacuation reporting installed by MarselTech.",
    tagline: "A reception log you can rely on",
    intro:
      "Visitor management replaces the paper book with pre-registration, printed badges and an accurate live list of who is in the building.",
    body: [
      "Visitors pre-register by email invite, check in at a kiosk or reception tablet, accept site rules, and receive a badge — with the host notified automatically by email or chat.",
      "The live on-site list matters most during evacuation: a roll-call report from any device tells wardens exactly who is unaccounted for. Contractor inductions, document expiry checks and watch-lists can be layered on where required.",
    ],
    features: [
      "Email pre-registration with QR check-in",
      "Self-service kiosk or reception tablet",
      "Badge printing with photo and access rights",
      "Automatic host notification",
      "Live on-site list and evacuation roll-call report",
      "Contractor induction and document expiry checks",
    ],
    industries: ["Corporate", "Healthcare", "Education", "Warehousing"],
    faqs: [
      {
        question: "Can visitor badges open doors?",
        answer:
          "Yes, temporary credentials can be issued with limited zones and automatic expiry at end of day.",
      },
      {
        question: "Does it help with fire evacuation?",
        answer:
          "That is one of its strongest arguments — wardens get a live roll-call list on mobile instead of a paper book left at reception.",
      },
      {
        question: "How is visitor data protected?",
        answer:
          "Records are access-restricted with configurable retention so personal data is purged automatically after your chosen period.",
      },
    ],
  },
  {
    slug: "biometric-identification",
    title: "Biometric Identification",
    description:
      "Fingerprint, face and palm recognition for high-assurance identity verification.",
    brands: "HID",
    metaTitle: "Biometric Access Systems Dubai — Face & Fingerprint | MarselTech",
    metaDescription:
      "Biometric identification in Dubai: fingerprint, face and palm-vein readers for high-security doors and attendance, with template encryption. Installed by MarselTech.",
    tagline: "Identity that cannot be lent to a colleague",
    intro:
      "Biometrics remove the weakest link in credential security — the shared or borrowed card — for the doors and processes where that actually matters.",
    body: [
      "We deploy fingerprint, facial and palm-vein recognition selected for the environment: outdoor and dusty sites, high-throughput turnstiles and clean office doors all favour different modalities and different false-accept tolerances.",
      "Templates are stored encrypted, and can be held on the credential rather than centrally where privacy policy requires. Multi-factor combinations — card plus biometric — are used for the highest-assurance zones such as server rooms and cash handling.",
    ],
    features: [
      "Fingerprint, facial and palm-vein reader options",
      "Modality chosen for throughput and environment",
      "Encrypted template storage, on-card or central",
      "Card-plus-biometric multi-factor for critical zones",
      "Turnstile, gate and door integration",
      "Enrolment process design and staff communication",
    ],
    industries: ["Data Centres", "Healthcare", "Banking", "Manufacturing", "Government"],
    faqs: [
      {
        question: "Is biometric data stored securely?",
        answer:
          "Readers store an encrypted mathematical template, not an image, and templates can be kept on the user's own card instead of a central database where policy requires.",
      },
      {
        question: "What if a fingerprint will not read?",
        answer:
          "We enrol multiple fingers and keep a card or PIN fallback so a worn print never leaves someone locked out.",
      },
      {
        question: "Do biometrics work outdoors in Dubai heat and dust?",
        answer:
          "Facial and palm-vein readers handle dusty, humid and gloved conditions better than optical fingerprint. We choose per location for that reason.",
      },
    ],
  },
  {
    slug: "card-issuance-printing",
    title: "Card Issuance & Printing",
    description: "On-site badge printing and credential personalization.",
    brands: "HID",
    metaTitle: "ID Card Printing & Issuance Dubai — HID | MarselTech",
    metaDescription:
      "ID card printers, ribbons and issuance software in Dubai. Photo badge design, encoding, bulk printing and consumables supply from MarselTech.",
    tagline: "Print, encode and issue in one pass",
    intro:
      "We supply and set up card printers, issuance software and consumables so you can produce encoded, branded ID badges in-house within minutes.",
    body: [
      "A single-pass workflow captures the photo, applies your badge template, encodes the access credential and prints — so a new joiner leaves induction with a working badge instead of a temporary one.",
      "We help design the badge layout, configure the printer and encoder, train reception or HR staff, and keep ribbons, cards and cleaning kits in stock so issuance never stalls.",
    ],
    features: [
      "Single and dual-sided card printers with encoding",
      "Badge template design in your brand",
      "Photo capture and issuance software setup",
      "Bulk printing for campus and event rollouts",
      "Lamination and holographic overlays for durability",
      "Ongoing consumables supply and printer servicing",
    ],
    industries: ["Education", "Corporate", "Healthcare", "Events", "Government"],
    faqs: [
      {
        question: "Can the printer encode access cards as it prints?",
        answer:
          "Yes — printers with an inline encoder write the credential and print the artwork in the same pass.",
      },
      {
        question: "How long do printed cards last?",
        answer:
          "Two to three years in typical office use; laminated cards last considerably longer in industrial and outdoor environments.",
      },
      {
        question: "Do you supply ribbons and blank cards?",
        answer:
          "Yes, consumables are supplied on a standing order so issuance is never blocked by a missing ribbon.",
      },
    ],
  },
];

const itSubServices: SubService[] = [
  {
    slug: "network-cabling",
    title: "Network Infrastructure & Structured Cabling",
    description:
      "Data, voice and fiber cabling with certified termination, testing and labeling.",
    brands: "Multiple",
    metaTitle: "Structured Cabling & Network Installation Dubai — MarselTech",
    metaDescription:
      "Cat6/Cat6A and fibre structured cabling in Dubai. Rack build, certified termination, Fluke testing, labelling and as-built documentation by MarselTech.",
    tagline: "The layer everything else depends on",
    intro:
      "We install structured cabling and network infrastructure for offices, hotels, schools and warehouses — certified, labelled and documented so the next engineer is not guessing.",
    body: [
      "Cabling is the cheapest part of a fit-out to do properly and the most expensive to redo. We plan containment and cable routes with the fit-out contractor, terminate to standard, and Fluke-test every link with results issued as part of handover.",
      "Racks are built and dressed for airflow and future changes, switching is configured with VLANs and PoE budgets sized for cameras, phones and access points, and every outlet is labelled to match an as-built drawing and port schedule.",
    ],
    features: [
      "Cat6, Cat6A and fibre backbone installation",
      "Containment, tray and cable route planning",
      "Rack build, patching and cable dressing",
      "Certified Fluke testing with issued results",
      "Labelling, port schedules and as-built documentation",
      "Switching, VLAN and PoE configuration",
    ],
    industries: ["Corporate", "Hospitality", "Education", "Warehousing", "Retail"],
    faqs: [
      {
        question: "Cat6 or Cat6A — which should we install?",
        answer:
          "Cat6 is adequate for most office desks today. Cat6A is worth the extra for Wi-Fi 6E/7 access points and any run you expect to carry multi-gigabit within the next decade.",
      },
      {
        question: "Do you provide test certificates?",
        answer:
          "Yes. Every link is tested and the results are issued with the as-built pack — insist on this from any contractor.",
      },
      {
        question: "Can you work around an occupied office?",
        answer:
          "Yes, with phased work and out-of-hours scheduling for anything disruptive, which we agree before mobilising.",
      },
    ],
  },
  {
    slug: "servers-storage",
    title: "Servers & Storage",
    description:
      "On-premise server, storage and backup hardware sized for your workloads.",
    brands: "Multiple",
    metaTitle: "Server & Storage Solutions Dubai — HPE, Dell | MarselTech",
    metaDescription:
      "On-premise servers, storage and virtualisation in Dubai. Workload-based sizing, RAID and backup design, rack installation and migration by MarselTech.",
    tagline: "Sized for your workload, not the brochure",
    intro:
      "We specify, install and configure on-premise servers and storage for businesses that need local performance, data residency or independence from a link outage.",
    body: [
      "Sizing starts with the workload: user counts, database size, virtual machine footprint, growth over the refresh cycle. That produces a spec you can defend, rather than an oversized box bought to be safe.",
      "We handle rack installation, virtualisation setup, RAID and storage configuration, migration from the old environment with a rollback plan, and documented backup and restore procedures — tested, not assumed.",
    ],
    features: [
      "Workload-based sizing and refresh planning",
      "Rack and tower servers with UPS provisioning",
      "Virtualisation and hypervisor configuration",
      "RAID, NAS and SAN storage design",
      "Migration with documented rollback",
      "Backup and tested restore procedures",
    ],
    industries: ["Corporate", "Healthcare", "Manufacturing", "Education"],
    faqs: [
      {
        question: "Should we move to the cloud instead?",
        answer:
          "Sometimes. Cloud wins on flexibility and small footprints; on-premise often wins on cost for steady heavy workloads and where data residency is required. We compare both over a five-year horizon.",
      },
      {
        question: "How often should servers be replaced?",
        answer:
          "Typically every five years, aligned with warranty expiry. Running past support turns a hardware fault into an outage of unpredictable length.",
      },
      {
        question: "Do you migrate existing data and applications?",
        answer:
          "Yes, with a scheduled migration window, verification checklist and rollback plan agreed before we start.",
      },
    ],
  },
  {
    slug: "managed-it-support",
    title: "Managed IT Support",
    description:
      "Ongoing monitoring, maintenance and help-desk support for your environment.",
    brands: "Multiple",
    metaTitle: "Managed IT Support Services Dubai — MarselTech",
    metaDescription:
      "Managed IT support in Dubai: help desk, remote monitoring, patching, onboarding and on-site engineer visits under a defined SLA from MarselTech.",
    tagline: "A team that already knows your setup",
    intro:
      "Managed support gives smaller organisations the coverage of an internal IT team — proactive monitoring, a help desk to call, and someone who arrives already knowing your environment.",
    body: [
      "We monitor servers, network devices and endpoints, patch on a schedule, manage antivirus and backups, and resolve most tickets remotely within the SLA. Recurring issues get a root-cause fix rather than a repeated workaround.",
      "Contracts include user onboarding and offboarding, asset and licence tracking, vendor liaison, and scheduled on-site visits — plus quarterly reporting so you can see where time and risk actually sit.",
    ],
    features: [
      "Help desk with defined response and resolution SLAs",
      "Remote monitoring of servers, network and endpoints",
      "Patch, antivirus and backup management",
      "User onboarding and offboarding",
      "Asset, licence and warranty tracking",
      "Scheduled on-site visits and quarterly reporting",
    ],
    industries: ["Corporate", "Professional Services", "Retail", "Clinics"],
    faqs: [
      {
        question: "What does managed IT support cost?",
        answer:
          "Usually a monthly fee per user or per device, set by headcount, device count and SLA. Fixed pricing keeps budgeting predictable and removes the incentive to log fewer tickets.",
      },
      {
        question: "Do you replace or support an internal IT person?",
        answer:
          "Either. Many clients keep an internal generalist and use us for out-of-hours cover, projects and specialist infrastructure work.",
      },
      {
        question: "How fast do you respond?",
        answer:
          "Standard contracts target one-hour response for critical issues and next-business-day on-site attendance in Dubai, with faster tiers available.",
      },
    ],
  },
  {
    slug: "cloud-backup",
    title: "Cloud & Backup Solutions",
    description:
      "Cloud migration, off-site backup and disaster recovery planning.",
    brands: "Multiple",
    metaTitle: "Cloud Migration & Backup Services Dubai — MarselTech",
    metaDescription:
      "Cloud migration, off-site backup and disaster recovery in Dubai. Microsoft 365 migration, 3-2-1 backup design and tested restore procedures by MarselTech.",
    tagline: "Backups that have actually been restored",
    intro:
      "We design backup and disaster recovery around two numbers — how much data you can afford to lose, and how long you can afford to be down — then build to meet them.",
    body: [
      "A backup nobody has restored is a hypothesis. We implement layered backup across local, off-site and cloud copies, then schedule restore tests and document the result so recovery is a rehearsed procedure.",
      "For cloud, we plan and execute migrations to Microsoft 365 and cloud infrastructure with mailbox and file cut-over, identity and licence setup, and clear guidance on what should stay on-premise. Microsoft 365 data itself is backed up separately, because retention policies are not backup.",
    ],
    features: [
      "RPO and RTO definition with stakeholders",
      "Local, off-site and cloud backup layers",
      "Microsoft 365 and cloud infrastructure migration",
      "Microsoft 365 dedicated backup",
      "Ransomware-resistant immutable copies",
      "Scheduled restore testing with documented results",
    ],
    industries: ["Corporate", "Healthcare", "Professional Services", "Retail"],
    faqs: [
      {
        question: "Isn't Microsoft 365 already backed up?",
        answer:
          "Microsoft protects the platform, not your content decisions. Deleted or maliciously altered data beyond the retention window is gone, which is why we add a dedicated 365 backup.",
      },
      {
        question: "How often should we test restores?",
        answer:
          "At least quarterly for critical systems. A test that fails in a scheduled window is useful; the same failure during an incident is not.",
      },
      {
        question: "Can data stay in the UAE?",
        answer:
          "Yes, where residency is required we select regions and providers that keep data in-country and document it.",
      },
    ],
  },
  {
    slug: "it-security",
    title: "IT Security Basics",
    description:
      "Firewalls, endpoint protection and network segmentation for small and mid-size sites.",
    brands: "Multiple",
    metaTitle: "IT Security & Firewall Services Dubai — MarselTech",
    metaDescription:
      "Firewalls, endpoint protection, MFA and network segmentation for Dubai SMEs. Practical IT security hardening and email protection from MarselTech.",
    tagline: "The controls that stop most real attacks",
    intro:
      "Most breaches at small and mid-size organisations exploit basics: no MFA, flat networks, unpatched endpoints, weak email filtering. We fix those first.",
    body: [
      "We deploy and configure next-generation firewalls, endpoint protection, multi-factor authentication and email security, then segment the network so cameras, guest Wi-Fi and payment systems cannot reach each other or your servers.",
      "Hardening follows: removing local admin rights, enforcing patching, disabling legacy protocols and cleaning up dormant accounts. You receive a short report of what was changed, what remains open, and what it would take to close it.",
    ],
    features: [
      "Next-generation firewall deployment and rule review",
      "Endpoint protection and centralised patching",
      "Multi-factor authentication rollout",
      "Email filtering and phishing protection",
      "VLAN segmentation for IoT, CCTV and guest networks",
      "Hardening review with prioritised remediation report",
    ],
    industries: ["Corporate", "Retail", "Clinics", "Professional Services"],
    faqs: [
      {
        question: "Where should a small business start?",
        answer:
          "Multi-factor authentication, tested backups and patched endpoints. Those three prevent or survive the large majority of incidents we see.",
      },
      {
        question: "Do you do penetration testing?",
        answer:
          "We deliver hardening and configuration review rather than formal penetration testing, and will refer you to a specialist tester when that is what you need.",
      },
      {
        question: "Why segment CCTV and IoT devices?",
        answer:
          "Cameras and IoT devices are rarely patched and are a common entry point. On their own VLAN, a compromised device cannot reach your file server.",
      },
    ],
  },
];

const avSubServices: SubService[] = [
  {
    slug: "meeting-room-av",
    title: "Meeting Room & Boardroom AV",
    description:
      "Displays, microphones, speakers and control systems for productive meetings.",
    brands: "Multiple",
    metaTitle: "Boardroom & Meeting Room AV Installation Dubai — MarselTech",
    metaDescription:
      "Meeting room and boardroom AV in Dubai: displays, ceiling microphones, speakers and Crestron control, designed and installed room by room by MarselTech.",
    tagline: "Rooms that work on the first press",
    intro:
      "We design boardroom and meeting room AV where the technology disappears: one obvious control, audio that covers the table, and an image everyone can read.",
    body: [
      "Display size is set from the furthest seat, microphone type from ceiling height and table layout, and speaker placement from room acoustics — hard surfaces and glass in Dubai fit-outs make this the difference between clear and exhausting.",
      "Control is standardised on a single touch panel or simplified keypad, so presets handle source switching, volume, shades and lighting. We commission the room, label everything, and train the people who use it daily.",
    ],
    features: [
      "Room-by-room display sizing and sightline check",
      "Ceiling, table and wireless microphone systems",
      "Speaker layout and acoustic treatment guidance",
      "Crestron and equivalent control with simple presets",
      "Cable management, floor boxes and clean finishing",
      "Commissioning, labelling and user training",
    ],
    industries: ["Corporate", "Government", "Education", "Hospitality"],
    faqs: [
      {
        question: "What display size suits our boardroom?",
        answer:
          "Rule of thumb: the furthest viewer should be no more than four to six times the display height away. A 20-seat boardroom typically needs 85 inches or dual displays.",
      },
      {
        question: "Ceiling microphones or table microphones?",
        answer:
          "Ceiling arrays keep the table clean and suit fixed layouts; table microphones give better rejection in noisy or high-ceilinged rooms. We choose after listening to the room.",
      },
      {
        question: "Can you integrate with video conferencing?",
        answer:
          "Yes — most boardrooms are specified as a single AV and conferencing system so the same audio serves in-room and remote participants.",
      },
    ],
  },
  {
    slug: "digital-signage",
    title: "Digital Signage",
    description:
      "Screens, media players and content management for lobbies, retail and public areas.",
    brands: "Multiple",
    metaTitle: "Digital Signage Solutions Dubai — LG & Samsung | MarselTech",
    metaDescription:
      "Digital signage in Dubai: commercial LG and Samsung displays, video walls, media players and content management with scheduling, installed by MarselTech.",
    tagline: "The right message, on the right screen, at the right hour",
    intro:
      "We install digital signage for lobbies, retail floors, restaurants and wayfinding — commercial-grade displays with a content system your marketing team can run alone.",
    body: [
      "Commercial panels matter here: consumer TVs fail early under 16-hour duty cycles and lack the brightness for sunlit lobbies. We specify panel brightness and orientation per location, including high-brightness units for shop windows.",
      "The content management platform handles scheduling, playlists, zones and multi-site groups, with templates so daily updates take a minute. We install mounts, players and network, then train your team on publishing.",
    ],
    features: [
      "Commercial LG and Samsung displays and video walls",
      "Brightness and orientation matched per location",
      "Media players and network provisioning",
      "Cloud content management with scheduling and playlists",
      "Wayfinding, menu-board and queue-display layouts",
      "Branded templates and publishing training",
    ],
    industries: ["Retail", "Hospitality", "Corporate", "Healthcare", "Education"],
    faqs: [
      {
        question: "Can we use normal TVs?",
        answer:
          "Not advisable. Commercial displays are rated for extended daily operation, portrait mounting and higher brightness, and are warranted for that use — consumer sets are not.",
      },
      {
        question: "Who updates the content?",
        answer:
          "Your team, from a browser. We set up templates and permissions during handover; we can also manage content under a service agreement.",
      },
      {
        question: "Will screens be readable in a sunlit lobby?",
        answer:
          "With the right brightness rating, yes. We measure ambient light and specify high-brightness panels for glass-facing positions.",
      },
    ],
  },
  {
    slug: "public-address",
    title: "Public Address & Paging Systems",
    description:
      "Zoned paging, announcements and emergency broadcast systems.",
    brands: "Multiple",
    metaTitle: "Public Address & Paging Systems Dubai — MarselTech",
    metaDescription:
      "PA and voice-alarm systems in Dubai: zoned paging, background music, emergency broadcast and intelligibility-tested speaker layouts from MarselTech.",
    tagline: "Announcements people can actually understand",
    intro:
      "Public address systems only earn their place if speech is intelligible in every zone — which is a design outcome, not a product feature.",
    body: [
      "We design speaker layouts for even coverage rather than maximum volume, calculate zone amplification, and specify equipment appropriate to the building so an announcement is clear in a warehouse aisle and a marble lobby alike.",
      "Systems support zoned paging, background music with priority override, and emergency broadcast integration with fire detection where required, using monitored circuits and battery backup so the system works during the incident it exists for.",
    ],
    features: [
      "Zoned paging with priority override",
      "Speaker layout designed for speech intelligibility",
      "Background music distribution",
      "Emergency broadcast and fire-system integration",
      "Monitored circuits, backup power and amplifier redundancy",
      "Microphone stations and scheduled announcements",
    ],
    industries: ["Retail", "Warehousing", "Education", "Hospitality", "Healthcare"],
    faqs: [
      {
        question: "Can one system do music and emergency announcements?",
        answer:
          "Yes, with priority routing that mutes music instantly for a page or alarm. Life-safety zones require certified equipment and monitored circuits.",
      },
      {
        question: "How many zones do we need?",
        answer:
          "Zoning follows how the building is used and evacuated — typically per floor, per department, or per tenancy, so a page reaches only the area that needs it.",
      },
      {
        question: "Why do announcements sound unclear in our building?",
        answer:
          "Usually too few speakers driven too loud in a reverberant space. More speakers at lower volume almost always fixes intelligibility.",
      },
    ],
  },
  {
    slug: "audio-systems",
    title: "Audio Systems",
    description:
      "Background music, foreground audio and acoustic treatment for commercial spaces.",
    brands: "Multiple",
    metaTitle: "Commercial Audio Systems Dubai — Restaurants & Retail | MarselTech",
    metaDescription:
      "Commercial audio systems in Dubai for restaurants, retail and gyms: zoned background music, foreground sound and acoustic treatment installed by MarselTech.",
    tagline: "Sound that suits the room and the hour",
    intro:
      "We install commercial audio for restaurants, retail, gyms and hotels — zoned, level-controlled and tuned so the space feels right at every time of day.",
    body: [
      "Coverage comes first: enough speakers, correctly placed, so there are no loud spots at the bar and dead spots at the back. Zones then let a terrace, dining room and private area each run their own source and level.",
      "Where hard surfaces make a space tiring, we advise on acoustic treatment alongside the system, and configure day-part scheduling so levels rise and fall with the trading pattern instead of relying on staff.",
    ],
    features: [
      "Zoned distribution with independent source and level",
      "Ceiling, surface and landscape speaker options",
      "System tuning and DSP configuration",
      "Day-part volume scheduling",
      "Licensed streaming music source integration",
      "Acoustic treatment guidance for hard-surfaced spaces",
    ],
    industries: ["Restaurants & Cafes", "Retail", "Fitness", "Hospitality"],
    faqs: [
      {
        question: "How many speakers does a restaurant need?",
        answer:
          "More than most people expect, at lower volume each. Even coverage at a comfortable level always beats a few speakers pushed hard.",
      },
      {
        question: "Can different areas play different music?",
        answer:
          "Yes — each zone can carry its own source and volume, controlled from a wall panel or app with staff limits.",
      },
      {
        question: "Do you handle music licensing?",
        answer:
          "We integrate licensed commercial streaming services; the subscription and any local performance licensing stays in your name.",
      },
    ],
  },
  {
    slug: "hospitality-av",
    title: "Hospitality AV",
    description:
      "Guest room entertainment, IPTV and common-area AV for hotels and residences.",
    brands: "Multiple",
    metaTitle: "Hotel IPTV & Hospitality AV Dubai — MarselTech",
    metaDescription:
      "Hospitality AV in Dubai: hotel IPTV, guest-room entertainment, casting, banquet AV and common-area systems with PMS integration, delivered by MarselTech.",
    tagline: "Guest technology that needs no explanation",
    intro:
      "Hospitality AV covers guest rooms, banqueting and public areas — systems a guest can operate on arrival and housekeeping can reset in seconds.",
    body: [
      "In-room, we deploy hotel-grade displays with IPTV, welcome screens and guest casting from personal devices, integrated with the PMS so the guest name, folio and language follow check-in.",
      "Front of house, banquet and ballroom AV covers projection, line-array audio, staging inputs and simple operator control for events, while lobby, restaurant and pool areas get zoned audio and signage. Rollouts are phased floor by floor to protect occupancy.",
    ],
    features: [
      "Hotel IPTV and welcome-screen deployment",
      "Guest casting from personal devices",
      "PMS integration for guest name, language and folio",
      "Banquet and ballroom projection, audio and staging inputs",
      "Zoned audio and signage for lobby, F&B and pool areas",
      "Phased floor-by-floor rollout with minimal room downtime",
    ],
    industries: ["Hospitality", "Serviced Apartments", "Residential Communities"],
    faqs: [
      {
        question: "Can guests cast from their own phones?",
        answer:
          "Yes, with secure per-room pairing so a guest cannot cast into a neighbouring room.",
      },
      {
        question: "Does it integrate with our PMS?",
        answer:
          "Common property management systems are supported, giving personalised welcome screens and folio-linked services.",
      },
      {
        question: "How disruptive is a retrofit?",
        answer:
          "We work floor by floor, typically a handful of rooms per day, coordinated with your occupancy forecast.",
      },
    ],
  },
];

export const SOLUTIONS: Record<string, SolutionData> = {
  ucc: {
    slug: "ucc",
    title: "UCC Solutions",
    image: heroUcc,
    imageAlt:
      "Corporate meeting room with video conferencing and unified communications equipment",
    subServices: uccSubServices,
    faqs: [
      {
        question: "What does UCC stand for?",
        answer:
          "Unified Communications and Collaboration — voice, video, messaging and meeting-room technology delivered as one connected system rather than separate tools.",
      },
      {
        question: "How long does a UCC rollout take?",
        answer:
          "A single meeting room is typically installed in a day. A multi-floor office with telephony and room systems usually runs three to eight weeks including survey, cabling and training.",
      },
      {
        question: "Do you support the systems after installation?",
        answer:
          "Yes. Annual maintenance contracts cover firmware, remote diagnostics, on-site response and manufacturer warranty handling.",
      },
      {
        question: "Can you integrate UCC with our existing Microsoft 365 or Google Workspace tenant?",
        answer:
          "Yes. Room systems, calendaring, presence and single sign-on are configured against your existing tenant so staff keep the same identity and the same meeting platform they already use, with no duplicate licences.",
      },
      {
        question: "What network and bandwidth requirements should our IT team plan for?",
        answer:
          "Voice and video are latency-sensitive, so we specify QoS marking on the LAN and a sized internet uplink with prioritised voice traffic. We document the VLAN, PoE budget and switch port configuration needed during the survey so your IT team can plan capacity.",
      },
      {
        question: "Is the VoIP calling legally compliant in the UAE?",
        answer:
          "Business VoIP is delivered through UAE-licensed carriers under the TDRA framework. We configure SIP trunks through a compliant provider and document the arrangement so your procurement and legal teams have what they need.",
      },
      {
        question: "Can we keep our existing phone numbers and extensions?",
        answer:
          "Yes. Numbers are ported to the new platform and extensions are mapped from your current dial plan, with cutover scheduled outside working hours so there is no window where calls go unanswered.",
      },
      {
        question: "How do you handle moves, adds and changes after go-live?",
        answer:
          "Minor changes — new extensions, room reconfigurations, new hunt groups — are handled under the support contract, usually remotely. We also train an administrator so day-to-day changes can be made internally without a service call.",
      },
      {
        question: "What warranty and support SLAs do you offer?",
        answer:
          "Manufacturer warranty applies to hardware and is handled on your behalf. Our maintenance contracts add defined response times — typically one-hour remote response and next-business-day on-site in Dubai — with optional faster tiers for critical sites.",
      },
      {
        question: "Can the system scale as we add floors or staff?",
        answer:
          "Yes. The platforms we deploy are licence-based and scale per user and per room, so you add endpoints and capacity incrementally rather than replacing the core. We document the growth path at handover.",
      },
      {
        question: "Do you provide documentation and as-built drawings?",
        answer:
          "Yes. Handover includes the dial plan, port schedule, IP addressing, room configurations, admin credentials and a quick-reference guide for each room — the pack your IT or facilities team needs to run the system.",
      },
      {
        question: "How do you train staff so adoption actually happens?",
        answer:
          "Short role-specific sessions during the first two weeks, laminated quick-reference cards in each room, and a named contact for questions. We also run an adoption review after go-live to catch teams still on the old tools.",
      },
      {
        question: "Can you work alongside our fit-out or IT contractor?",
        answer:
          "Yes. We coordinate containment, power, mounting positions and network drops with the fit-out and IT contractors during the build, which is far cheaper than retrofitting cabling or power after the ceiling is closed.",
      },
    ],
  },
  security: {
    slug: "security",
    title: "Security Solutions",
    image: heroSecurity,
    imageAlt: "Security control room with CCTV video wall",
    subServices: securitySubServices,
    faqs: [
      {
        question: "Do you handle SIRA approval for CCTV in Dubai?",
        answer:
          "We specify equipment, camera positions and retention with SIRA requirements in mind and coordinate with your approved consultant where certification is required for your premises.",
      },
      {
        question: "Can you upgrade an existing analogue CCTV system?",
        answer:
          "Often yes — existing coax can carry HD signals, or be reused during a staged migration to IP. We survey before recommending a full replacement.",
      },
      {
        question: "Do you offer maintenance contracts?",
        answer:
          "Yes, covering remote health monitoring, preventive visits, firmware updates and defined on-site response times.",
      },
    ],
  },
  id: {
    slug: "id",
    title: "ID Solutions",
    image: heroId,
    imageAlt: "ID card printer producing employee access badges",
    subServices: idSubServices,
    faqs: [
      {
        question: "Can access control and attendance share the same badge?",
        answer:
          "Yes. One credential can open doors and register attendance, which removes duplicate hardware and duplicate enrolment.",
      },
      {
        question: "Is biometric data safe to store?",
        answer:
          "Readers store encrypted templates rather than images, and templates can be held on the user's card instead of centrally where privacy policy requires.",
      },
      {
        question: "How quickly can a new employee be enrolled?",
        answer:
          "Minutes. With on-site card printing and encoding, a new joiner can leave induction with a working, correctly zoned badge.",
      },
    ],
  },
  it: {
    slug: "it",
    title: "IT Solutions",
    image: heroIt,
    imageAlt: "Data center aisle with network switches and structured cabling",
    subServices: itSubServices,
    faqs: [
      {
        question: "Do you support businesses without an internal IT team?",
        answer:
          "Yes — managed support gives you a help desk, monitoring and scheduled on-site visits under a defined SLA, which is how most of our SME clients operate.",
      },
      {
        question: "Can you take over an environment someone else built?",
        answer:
          "Yes, after a documentation and condition review so both sides know what is being adopted and what needs remediation.",
      },
      {
        question: "Do you provide test certificates for cabling?",
        answer:
          "Every link is certified and tested, with results and as-built documentation issued at handover.",
      },
    ],
  },
  av: {
    slug: "av",
    title: "AV Solutions",
    image: heroAv,
    imageAlt: "Large LED video wall and professional audio system in an auditorium",
    faqs: [
      {
        question: "Can you work with our interior fit-out contractor?",
        answer:
          "Yes. We prefer to be involved during fit-out so containment, power and mounting positions are right the first time.",
      },
      {
        question: "Do you supply commercial-grade displays only?",
        answer:
          "For anything running long hours we do. Consumer panels are not warranted for commercial duty cycles and fail early.",
      },
      {
        question: "Do you provide training for staff?",
        answer:
          "Yes, plus laminated quick-reference guides in the room and remote support for the first weeks after handover.",
      },
    ],
    subServices: avSubServices,
  },
};

export const SOLUTION_SLUGS = Object.keys(SOLUTIONS);

export function getSolution(slug: string): SolutionData | undefined {
  return SOLUTIONS[slug];
}

export function getSubService(
  solutionSlug: string,
  serviceSlug: string,
): { solution: SolutionData; service: SubService } | undefined {
  const solution = SOLUTIONS[solutionSlug];
  const service = solution?.subServices.find((s) => s.slug === serviceSlug);
  if (!solution || !service) return undefined;
  return { solution, service };
}
