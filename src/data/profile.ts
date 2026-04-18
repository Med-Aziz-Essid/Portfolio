export const profile = {
  name: "ESSID Mohamed Aziz",
  nameShort: "Med Aziz Essid",
  title: "IT Engineering Student",
  subtitle: "Cybersecurity Enthusiast",
  location: "Sousse, Tunisia",
  email: "aziz0essid0@gmail.com",
  linkedin: "https://www.linkedin.com/in/med-aziz-essid/",
  github: "https://github.com/",
  summary:
    "Currently pursuing a degree in IT engineering, aspiring cybersecurity engineer with strong understanding of IT infrastructure and passion for securing digital systems. Focused on implementing real-world security solutions against evolving threats.",

  skills: [
    {
      category: "Networking",
      icon: "Network",
      color: "#00d4ff",
      items: ["Cisco IOS", "VLAN Segmentation", "PXE Boot", "Network Diagnostics", "TCP/IP"],
    },
    {
      category: "Programming & Scripting",
      icon: "Code2",
      color: "#7c3aed",
      items: ["PowerShell", "ASP.NET Core MVC", "C#", "Python", "Bash"],
    },
    {
      category: "Systems & Infrastructure",
      icon: "Server",
      color: "#06b6d4",
      items: ["Windows Server", "GPO Management", "Active Directory", "GLPI", "Virtualization"],
    },
    {
      category: "Cybersecurity",
      icon: "Shield",
      color: "#10b981",
      items: ["Ethical Hacking", "Security Monitoring", "Threat Analysis", "Network Security", "SIEM"],
    },
  ],

  experience: [
    {
      company: "DRÄXLMAIER Group",
      role: "IT Intern",
      period: "July 2025",
      location: "Tunisia",
      type: "Internship",
      color: "#00d4ff",
      highlights: [
        "Automated workstation deployment using PXE boot infrastructure",
        "Centralized management with Group Policy Objects (GPO)",
        "PowerShell scripting for IT process automation",
        "GLPI ticketing system implementation and configuration",
        "VLAN segmentation on Cisco switches for network security",
      ],
    },
    {
      company: "WARDA",
      role: "IT & Web Development Intern",
      period: "July 2024",
      location: "Tunisia",
      type: "Internship",
      color: "#7c3aed",
      highlights: [
        "Built full-stack application using ASP.NET Core MVC architecture",
        "Hardware maintenance, setup, and troubleshooting",
        "Network configuration and diagnostics across the organization",
      ],
    },
  ],

  projects: [
    {
      title: "Supreme Auto Infrastructure",
      year: "2025",
      description:
        "Designed and implemented a secure, enterprise-grade IT infrastructure for an automotive company. Includes network segmentation, access control policies, and monitoring systems to protect critical assets.",
      impact: "Zero security incidents post-deployment",
      tags: ["Network Security", "Cisco", "VLAN", "Infrastructure Design", "Access Control"],
      color: "#00d4ff",
      icon: "Car",
      category: "Infrastructure",
    },
    {
      title: "Network Supervision System",
      year: "2025",
      description:
        "Built a real-time network monitoring and alert system capable of detecting anomalies, generating alerts, and providing dashboards for infrastructure health visibility.",
      impact: "40% faster incident response time",
      tags: ["Network Monitoring", "SIEM", "Alerting", "Dashboard", "Python"],
      color: "#7c3aed",
      icon: "Activity",
      category: "Security",
    },
    {
      title: "Delight Events Platform",
      year: "2024",
      description:
        "Full-stack event management web platform built with ASP.NET Core MVC. Features event creation, booking management, user authentication, and an admin dashboard.",
      impact: "Streamlined event operations for 500+ users",
      tags: ["ASP.NET Core", "C#", "SQL Server", "Bootstrap", "MVC"],
      color: "#06b6d4",
      icon: "CalendarDays",
      category: "Web Development",
    },
  ],

  education: [
    {
      degree: "IT Engineering Degree",
      school: "Engineering School",
      period: "2026 – Present",
      status: "In Progress",
    },
    {
      degree: "Classes Préparatoires (Pre-Engineering)",
      school: "Preparatory Institute",
      period: "2023 – 2025",
      status: "Completed",
    },
  ],

  certifications: [
    { name: "AWS Cloud Practitioner Essentials", issuer: "Amazon Web Services", color: "#FF9900", icon: "Cloud" },
    { name: "CCNA 2", issuer: "Cisco", color: "#00d4ff", icon: "Network" },
    { name: "TOEIC", issuer: "ETS Global", color: "#10b981", icon: "Languages" },
    { name: "Data Science Essentials (Python)", issuer: "Cisco", color: "#7c3aed", icon: "BarChart2" },
    { name: "Ethical Hacker", issuer: "Cisco", color: "#ef4444", icon: "Shield" },
    { name: "Introduction to Cybersecurity", issuer: "Cisco", color: "#06b6d4", icon: "Lock" },
  ],

  achievements: [
    { title: "3rd Place — IEEExtreme Programming", desc: "National ranking in Tunisia", icon: "Trophy" },
    { title: "IEEE Student Branch Member", desc: "Active technical community contributor", icon: "Users" },
    { title: "Team Leader — Info Night", desc: "Led cross-functional tech event team", icon: "Star" },
    { title: "Ambassador — Hack Arena Tunisia", desc: "Represented cybersecurity hackathon", icon: "Flag" },
    { title: "Gaming Club Member", desc: "Community & teamwork engagement", icon: "Gamepad2" },
  ],

  languages: [
    { name: "French", level: "Native", percent: 100 },
    { name: "English", level: "Professional", percent: 85 },
    { name: "Italian", level: "Basic", percent: 30 },
    { name: "Arabic", level: "Native", percent: 100 },
  ],
};
