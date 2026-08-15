import type { Metadata } from "next";

import LegalShell, { type Section } from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Privacy Policy — Quanta",
  description:
    "What Quanta collects when you run compute, why it is collected, and the control you keep over it.",
};

const SECTIONS: Section[] = [
  {
    title: "Scope",
    body: [
      "This policy covers the personal data Quanta handles when you visit the site, create an account, connect a wallet or run a compute job.",
      "It does not cover the content of your workloads. Code, datasets and model weights you submit are processed on your instructions and are described separately in section 3.",
    ],
  },
  {
    title: "What we collect",
    body: [
      "Account data — the email address you sign up with, authentication factors, and the public key and fingerprint of any SSH key you register. We never receive your private key.",
      "Wallet data — the public address you connect, and the on-chain transactions associated with settling your jobs. We do not hold your seed phrase or private keys, and cannot move funds on your behalf.",
      "Job metadata — GPU class, region, container image reference, start and stop times, resource usage, spend and job status. This is what makes metering and receipts possible.",
      "Technical data — IP address, browser and device information, and security events such as failed sign-ins, kept to protect the platform.",
    ],
  },
  {
    title: "Your workload content",
    body: [
      "What runs inside a job is yours. It is executed in a hardware-isolated container on an encrypted ephemeral volume, and that volume is destroyed when the job exits.",
      "Operators supplying capacity do not get shell access to your workload. We access job content only where you explicitly ask us to for support, or where we are compelled by law.",
      "Logs you stream are relayed to you. Retention of anything you export to your own storage is under your control, not ours.",
    ],
  },
  {
    title: "Why we process it",
    body: [
      "To provide the service — scheduling jobs, giving terminal access, metering usage and settling payment.",
      "To keep the platform secure — detecting abuse, investigating incidents and enforcing the acceptable use terms.",
      "To meet legal obligations — accounting records and responses to lawful requests.",
      "To communicate — service notices, security alerts, and product updates you have asked to receive.",
      "Where the law requires a legal basis, we rely on performance of our contract with you, our legitimate interest in running a secure platform, your consent for optional messages, and compliance with legal obligations.",
    ],
  },
  {
    title: "Who it is shared with",
    body: [
      "Operators receive only what is needed to schedule and run your job — the resource requirements and the image to run, not your identity.",
      "Infrastructure and tooling providers process data on our behalf under contract, and may not use it for their own purposes.",
      "Authorities receive data only where a valid legal obligation applies.",
      "We do not sell personal data.",
    ],
  },
  {
    title: "On-chain data is public",
    body: [
      "Settlement happens on a public blockchain. Your wallet address, transaction amounts and timestamps are visible to anyone and cannot be edited or deleted by us or by you.",
      "Consider this before connecting a wallet that is linked to your identity elsewhere.",
    ],
  },
  {
    title: "Retention",
    body: [
      "Account data is kept while your account is open, and for a limited period afterwards where records are needed for accounting or dispute resolution.",
      "Job metadata and receipts are kept for the period required by financial record-keeping rules.",
      "Security logs are kept on a short rolling window unless an incident requires otherwise.",
      "Ephemeral job volumes are destroyed at job exit and are not backed up.",
    ],
  },
  {
    title: "Security",
    body: [
      "Traffic between you and the platform is encrypted in transit. Job volumes are encrypted and wiped on exit. Multi-factor authentication is available and required for sensitive terminal flows, and SSH access is scoped per job.",
      "No system is perfectly secure. If a breach affects your data, we will notify you and any relevant regulator as required.",
    ],
  },
  {
    title: "Your rights",
    body: [
      "Depending on where you live, you may have the right to:",
      [
        "Access the personal data we hold about you.",
        "Correct data that is inaccurate or incomplete.",
        "Delete your data, subject to records we must keep.",
        "Receive your data in a portable format.",
        "Object to or restrict certain processing.",
        "Withdraw consent for optional communications at any time.",
      ],
      "On-chain records are the exception: they are outside our control and cannot be erased.",
    ],
  },
  {
    title: "Cookies",
    body: [
      "We use the cookies required to keep you signed in and to protect the platform against abuse. Optional analytics, if introduced, will be described here and offered on an opt-in basis.",
    ],
  },
  {
    title: "International transfers",
    body: [
      "The network spans multiple regions, so your job metadata may be processed outside your own country. Where required, transfers are covered by appropriate safeguards. If a job must stay in a particular region, set that constraint when you create it.",
    ],
  },
  {
    title: "Changes and contact",
    body: [
      "We will update this policy as the platform changes, and the date at the top of this page will change with it. Material changes will be announced before they take effect.",
      "Privacy questions and rights requests can be raised from your account dashboard.",
    ],
  },
];

export default function Privacy() {
  return (
    <LegalShell
      title="Privacy Policy"
      intro="What Quanta collects when you run compute, why it is collected, who it reaches, and the control you keep over it."
      updated="16 August 2026"
      sections={SECTIONS}
    />
  );
}
