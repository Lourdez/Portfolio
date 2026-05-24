export const personalInfo = {
  name: "Lourdez",
  lastName: "Parker",
  role: "DevOps Engineer | Healthcare IT Infrastructure",
  tagline:
    "Building reliable, secure infrastructure for medical imaging systems — PACS, RIS, DICOM. Production uptime, not sandbox experiments.",
  email: "lourdezparker@gmail.com",
  linkedin: "https://www.linkedin.com/in/lourdez-parker-",
  location: "Tamil Nadu, India",
  targets: "Amsterdam, Zurich, Basel",
  language: "German (targeting B2)",
  goal: "Senior/Architect — AI Medical Imaging",
};

export const aboutText = [
  `I'm a pragmatic, production-focused DevOps Engineer specializing in healthcare imaging infrastructure — PACS, RIS, DICOM, and HL7 systems. I build and maintain the infrastructure that keeps medical imaging pipelines running with real uptime responsibility — not sandbox environments.`,
  `Based in Tamil Nadu, India. Actively pursuing European medtech roles — Amsterdam, Zurich, Basel. Learning German toward professional certification. Aspiring toward senior/architect-level specialization in AI-driven medical imaging.`,
];

export const pacsComponents = [
  {
    name: "DICOM",
    desc: "Digital Imaging and Communications in Medicine — the global standard protocol for medical image storage and transmission.",
  },
  {
    name: "RIS",
    desc: "Radiology Information System — manages patient scheduling, worklists, and radiology reports; communicates with PACS via HL7/DICOM.",
  },
  {
    name: "DCMTK",
    desc: "Open-source toolkit for DICOM protocol implementation — essential for testing and integration.",
  },
  {
    name: "WADO",
    desc: "Web Access to DICOM Objects — HTTP-based retrieval of DICOM images for web-based diagnostic viewers.",
  },
  {
    name: "Modalities",
    desc: "Imaging machines (CT, MRI, X-ray) that push images to PACS via DICOM C-STORE.",
  },
  {
    name: "Worklist (MWL)",
    desc: "DICOM Modality Worklist — ensures patient data flows from RIS to the imaging machine before the scan.",
  },
  {
    name: "Hanging Protocol",
    desc: 'Rules defining how images are displayed in a diagnostic viewer — e.g., "prior CT on left, current on right."',
  },
  {
    name: "PACS Proxy (Nexus/Pukka-J)",
    desc: "A DICOM traffic broker that routes studies between multiple PACS nodes and viewer clients like OrthoView.",
  },
  {
    name: "OrthoView",
    desc: "Orthopedic surgical planning application connecting to PACS for relevant imaging studies and templating.",
  },
];

export const skills = [
  {
    title: "Healthcare & Imaging",
    icon: "Activity",
    tags: [
      "DICOM", "DCMTK", "WADO", "HL7", "Mirth Connect", "PACS/RIS",
      "OrthoView", "Nexus Proxy", "C-STORE", "C-FIND", "C-MOVE", "MWL",
      "Hanging Protocols", "WebSwing",
    ],
  },
  {
    title: "Cloud & Infrastructure",
    icon: "Cloud",
    tags: [
      "AWS EC2", "OCI", "CloudFront", "ELB", "Elastic IP",
      "AWS Client VPN", "easy-rsa", "ACM", "Netplan",
    ],
  },
  {
    title: "OS & Networking",
    icon: "Server",
    tags: [
      "Ubuntu 24.04", "Nginx", "OpenResty", "BIND9", "Postfix", "IIS",
      "Windows Server 2022", "MTU/VLAN", "NoMachine NX",
    ],
  },
  {
    title: "Databases",
    icon: "Database",
    tags: [
      "PostgreSQL 16", "PostGIS", "Redis", "PgPool-II", "HA Replication",
      "pg_dump", "S3 Backup", "AES256",
    ],
  },
  {
    title: "CI/CD & Automation",
    icon: "GitBranch",
    tags: [
      "Jenkins", "GitLab", "Webhook Trigger", "Python", "Bash", "rsync",
      "Symlink Deploy", "pnpm",
    ],
  },
  {
    title: "Security & Identity",
    icon: "Shield",
    tags: [
      "SSL/TLS", "Let's Encrypt", "Keycloak", "OIDC SSO", "OAuth 2.0",
      "JWT/JWKS", "pg_hba", "Incident Response",
    ],
  },
  {
    title: "Messaging & Streaming",
    icon: "Radio",
    tags: ["RabbitMQ", "Apache Kafka", "KRaft Mode"],
  },
  {
    title: "Email Infrastructure",
    icon: "Mail",
    tags: [
      "SendGrid", "SPF/DKIM/DMARC", "GoDaddy DNS", "M365", "Direct Send",
      "Port 25",
    ],
  },
  {
    title: "Containers & Services",
    icon: "Box",
    tags: ["Docker", "systemd", "~35 Services", "Hyper-V"],
  },
];

export const experience = [
  {
    company: "LiveMedica LLC",
    role: "DevOps Engineer",
    period: "May 2025 – Present",
    context: "Healthcare IT / Radiology Imaging Platform",
    categories: [
      {
        title: "Infrastructure & Cloud",
        items: [
          "Deployed and maintain enterprise PACS/RIS platform on AWS EC2 and OCI",
          "Configured OCI Reserved Public IP (netplan YAML, MTU 9000 for DICOM traffic)",
          "Set up AWS Client VPN with mutual certificate authentication (easy-rsa, ACM CLI)",
          "Managed CloudFront distribution, Let's Encrypt wildcard SSL, dual-cert Nginx for domain and direct IP access",
          "Resolved EC2 Wayland/NoMachine NX display issues (GNOME compositor, Xwayland rootless)",
        ],
      },
      {
        title: "PACS & Imaging Systems",
        items: [
          "Deployed OrthoView 7.6.1 on Windows Server 2022 (EC2) with WebSwing Java viewer, IIS reverse proxy, and Keycloak OIDC SSO",
          "Resolved WebSwing Session 0 isolation issue preventing Java process spawn after OIDC authentication — fixed via dedicated service account + webswing.config tuning",
          "Installed Nexus PACS Proxy (Pukka-J) — DICOM traffic broker routing C-FIND/C-MOVE between OrthoView and enterprise PACS nodes",
          "Configured DICOM AE titles, C-MOVE return ports, QR SCP association authorization, and pipeline nodes in Nexus",
          "Deployed HL7/Mirth Connect gateway (Docker + Nginx) for ADT/ORM message routing; resolved ESM/JWT version conflict",
          "Developed LUECI HP Chrome extension for multi-monitor DICOM display with on-device ONNX ML model; submitted to Chrome Web Store (v1.3.1)",
        ],
      },
      {
        title: "Installer & Automation",
        items: [
          "Rebuilt 1,250-line monolithic bash installer into 12-phase modular Python installer covering full stack",
          "Implemented AI self-healing recovery loop: captures failures, consults known-fixes DB, uses AI agent for novel failures",
          "Auto-credential generation, phase tracking, error trapping with retry/backoff, idempotency guards",
          "OAuth client registration for 21 packages via standalone oauth.sh",
        ],
      },
      {
        title: "CI/CD",
        items: [
          "Built Jenkins pipelines for 7 services: api-pacs, api-ris, api-settings, api-user, ui-ris, ris-ui, ui-viewer",
          "Atomic deploy pattern (stop → clean → rsync → symlink swap → start); disableConcurrentBuilds()",
          "Configured Generic Webhook Trigger for dynamic branch patterns — eliminated per-release config changes",
          "Fixed pnpm global store ownership conflict by configuring dedicated store at /var/lib/jenkins/.pnpm-store",
        ],
      },
      {
        title: "Databases",
        items: [
          "Designed 3-node PostgreSQL 16 streaming replication with PgPool-II — automated failover ~15–20s",
          "Automated S3 backup pipeline (AES256, STANDARD_IA, daily 2 AM cron)",
          "Routine DB cloning via pg_dump/pg_restore and CREATE DATABASE TEMPLATE for test environments",
        ],
      },
      {
        title: "Security & Incident Response",
        items: [
          "Led crypto-mining malware incident response across multiple EC2 instances — forensic triage under active persistence",
          "Killed processes, removed crontabs, chattr +i hardening, restricted pg_hba.conf, rotated credentials",
        ],
      },
      {
        title: "Email & DNS",
        items: [
          "Manages 3 SendGrid accounts; diagnosed M365 quarantine — migrated to notify.livemedica.com with full SPF/DKIM/DMARC setup",
          "Resolved O365 routing (Authoritative → Internal Relay + outbound connector to smtp-relay.google.com)",
          "Configured Postfix/GitLab email via M365 Direct Send (IP whitelist, port 25)",
          "Manages BIND9 with split-horizon DNS (internal zones + external forwarding)",
        ],
      },
      {
        title: "On-Premises",
        items: [
          "Manages Hyper-V VMs (Ubuntu + Windows), virtual switch allocation, paused-critical state recovery",
          "BIND9 DNS server, Postfix relay, GitLab CE",
        ],
      },
    ],
  },
  {
    company: "GUVI Geek Tech",
    role: "Tech Support DevOps Intern",
    period: "Sep 2023 – Jun 2024",
    context: "Ed-Tech SaaS Platform",
    categories: [
      {
        title: "",
        items: ["Provided technical support and assisted DevOps operations"],
      },
    ],
  },
];

export const projects = [
  {
    number: "01",
    title: "LiveMedica AI-Enabled Linux Installer",
    desc: "Modular 12-phase Python installer with AI self-healing recovery loop. Covers full LiveMedica stack: Node.js, Nginx, PostgreSQL+PostGIS, Redis, RabbitMQ, Kafka, DCMTK, 30+ microservices, 35 systemd services.",
    stack: ["Python", "Bash", "systemd", "AWS"],
  },
  {
    number: "02",
    title: "OrthoView + WebSwing + Keycloak OIDC",
    desc: "Full deployment of OrthoView 7.6.1 orthopedic planning platform on Windows Server 2022 (EC2) — WebSwing Java viewer, Keycloak OIDC SSO, IIS reverse proxy, Nexus PACS Proxy DICOM brokering.",
    stack: ["Windows Server", "WebSwing", "Keycloak", "IIS", "DICOM"],
  },
  {
    number: "03",
    title: "PostgreSQL 16 HA Cluster",
    desc: "3-node streaming replication + PgPool-II, automated failover (15–20s), S3 backup pipeline with AES256 encryption and STANDARD_IA storage class.",
    stack: ["PostgreSQL 16", "PgPool-II", "Bash", "AWS S3"],
  },
  {
    number: "04",
    title: "LUECI HP — DICOM Chrome Extension",
    desc: "Multi-monitor DICOM viewer extension with persistent window layouts and automatic hanging protocol matching via on-device ONNX ML model. Submitted to Chrome Web Store.",
    stack: ["Chrome Extensions", "ONNX Runtime", "JavaScript"],
  },
  {
    number: "05",
    title: "Jenkins CI/CD — Healthcare Microservices",
    desc: "Atomic deploy pipelines for 7 services with Generic Webhook Trigger (dynamic branch patterns), race condition prevention, pnpm monorepo support.",
    stack: ["Jenkins", "GitLab", "Groovy", "pnpm", "rsync"],
  },
  {
    number: "06",
    title: "AWS PACS Infrastructure",
    desc: "End-to-end DICOM/WADO infrastructure — CloudFront, EC2, Let's Encrypt wildcard SSL, dual-cert Nginx, HL7 gateway, OCI DICOM networking (MTU 9000).",
    stack: ["AWS", "OCI", "Nginx", "Let's Encrypt", "Docker"],
  },
];

export const certifications = {
  active: [
    { name: "AWS Solutions Architect – Associate", org: "SAA-C03" },
    { name: "German Language – B2", org: "Goethe-Institut Target" },
  ],
  planned: [
    { name: "CPSA – Certified PACS System Analyst", org: "PARCA" },
    { name: "CIIP – Certified Imaging Informatics Professional", org: "ABII / SIIM" },
    { name: "CKA – Certified Kubernetes Administrator", org: "CNCF" },
  ],
  domain: [
    { name: "DICOM / HL7 Healthcare Interoperability", org: "Production Implementation" },
    { name: "PACS / RIS / Modality Worklist Workflows", org: "Production Implementation" },
  ],
};

export const education = [
  { degree: "PG (MCA)", school: "SRM DDE" },
  { degree: "UG (BCA)", school: "Kodaikanal Christian College" },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "PACS", href: "#pacs" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certs", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];
