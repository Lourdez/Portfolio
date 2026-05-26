# Lourdez Parker — Portfolio

> DevOps Engineer | Healthcare IT Infrastructure | PACS · RIS · DICOM · HL7

---

## About

Production-focused DevOps Engineer specializing in healthcare imaging infrastructure. I build and maintain the infrastructure that keeps medical imaging pipelines running — PACS, RIS, DICOM, and HL7 systems — with real uptime responsibility, not sandbox environments.

📍 Tamil Nadu, India → Targeting Amsterdam · Zurich · Basel  
🎯 Senior / Architect — AI Medical Imaging  
🗣️ German (targeting B2)

---

## Tech Stack

| Domain | Technologies |
|---|---|
| **Healthcare & Imaging** | DICOM, DCMTK, WADO, HL7, Mirth Connect, PACS/RIS, OrthoView, Nexus Proxy |
| **Cloud & Infrastructure** | AWS EC2, OCI, CloudFront, ELB, Elastic IP, AWS Client VPN, ACM |
| **OS & Networking** | Ubuntu 24.04, Nginx, OpenResty, BIND9, Postfix, IIS, Windows Server 2022 |
| **Databases** | PostgreSQL 16, PostGIS, Redis, PgPool-II, HA Replication |
| **CI/CD & Automation** | Jenkins, GitLab, Python, Bash, rsync, Webhook Trigger, pnpm |
| **Security & Identity** | SSL/TLS, Let's Encrypt, Keycloak, OIDC SSO, OAuth 2.0, JWT/JWKS |
| **Messaging** | RabbitMQ, Apache Kafka, KRaft Mode |
| **Email** | SendGrid, SPF/DKIM/DMARC, GoDaddy DNS, M365, Direct Send |
| **Containers** | Docker, systemd (~35 services), Hyper-V |

---

## Experience

### LiveMedica LLC — DevOps Engineer
`May 2025 – Present` · Healthcare IT / Radiology Imaging Platform

- Deployed and maintain enterprise PACS/RIS platform on AWS EC2 and OCI
- Set up AWS Client VPN with mutual certificate auth (easy-rsa, ACM CLI)
- Deployed OrthoView 7.6.1 on Windows Server 2022 with WebSwing, IIS reverse proxy, and Keycloak OIDC SSO
- Installed Nexus PACS Proxy (Pukka-J) for DICOM traffic brokering between OrthoView and enterprise PACS nodes
- Rebuilt 1,250-line bash installer into 12-phase modular Python installer with AI self-healing recovery loop
- Designed 3-node PostgreSQL 16 streaming replication with PgPool-II — automated failover ~15–20s
- Led crypto-mining malware incident response across multiple EC2 instances — forensic triage under active persistence
- Built Jenkins pipelines for 7 services with atomic deploy pattern and Generic Webhook Trigger

### GUVI Geek Tech — Tech Support DevOps Intern
`Sep 2023 – Jun 2024` · Ed-Tech SaaS Platform

---

## Projects

| # | Project | Stack |
|---|---|---|
| 01 | **LiveMedica AI-Enabled Linux Installer** — Modular 12-phase Python installer with AI self-healing | Python, Bash, systemd, AWS |
| 02 | **OrthoView + WebSwing + Keycloak OIDC** — Full PACS/orthopedic planning deployment on Windows Server 2022 | Windows Server, WebSwing, Keycloak, IIS, DICOM |
| 03 | **PostgreSQL 16 HA Cluster** — 3-node streaming replication + PgPool-II, S3 AES256 backup | PostgreSQL 16, PgPool-II, Bash, AWS S3 |
| 04 | **LUECI HP — DICOM Chrome Extension** — Multi-monitor viewer with ONNX on-device ML model | Chrome Extensions, ONNX Runtime, JavaScript |
| 05 | **Jenkins CI/CD — Healthcare Microservices** — Atomic deploy pipelines for 7 services | Jenkins, GitLab, Groovy, pnpm, rsync |
| 06 | **AWS PACS Infrastructure** — End-to-end DICOM/WADO infra with CloudFront, EC2, HL7 gateway | AWS, OCI, Nginx, Let's Encrypt, Docker |

---

## Certifications

**Actively Pursuing**
- AWS Solutions Architect – Associate (SAA-C03)
- German Language – B2 (Goethe-Institut)

**Planned**
- CPSA – Certified PACS System Analyst (PARCA)
- CIIP – Certified Imaging Informatics Professional (ABII / SIIM)
- CKA – Certified Kubernetes Administrator (CNCF)

**Domain Knowledge**
- DICOM / HL7 Healthcare Interoperability — Production Implementation
- PACS / RIS / Modality Worklist Workflows — Production Implementation

---

## Education

| Degree | Institution |
|---|---|
| PG (MCA) | SRM DDE |
| UG (BCA) | Kodaikanal Christian College |

---

## Contact

- **Email:** lourdezparker@gmail.com
- **LinkedIn:** [Lourdez Parker](https://www.linkedin.com/in/lourdez-parker-)
- **GitHub:** [github.com/Lourdez](https://github.com/Lourdez)
- **Location:** Tamil Nadu, India — Open to relocation: Amsterdam · Zurich · Basel

---

## This Repository

| Branch | Framework |
|---|---|
| `main` | React 19 + Vite + Tailwind CSS |
| `develop` | Vue 3 + Vite + Tailwind CSS |

Built with **Vue 3** (Composition API) + **Vite** + **Tailwind CSS**
