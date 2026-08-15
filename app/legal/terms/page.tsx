import type { Metadata } from "next";

import LegalShell, { type Section } from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Terms of Service — Quanta",
  description:
    "The terms that govern your use of Quanta's on-demand GPU compute platform.",
};

const SECTIONS: Section[] = [
  {
    title: "Agreement to these terms",
    body: [
      "These terms form an agreement between you and Quanta. They apply when you create an account, submit a compute job, connect a wallet or otherwise use the platform. If you are agreeing on behalf of a company, you confirm that you are authorised to bind it.",
      "If you do not accept these terms, do not use the service.",
    ],
  },
  {
    title: "The service",
    body: [
      "Quanta is a pay-per-job GPU compute platform. You describe a workload, we match it against capacity offered by independent operators on the network, and the job runs on the node that meets your constraints.",
      "Capacity is not reserved for you unless a job is running. Availability of a specific GPU class, memory configuration or region is never guaranteed, and the network composition may change at any time.",
    ],
  },
  {
    title: "Accounts and access",
    body: [
      "You may create an account with an email address or a connected wallet. You are responsible for everything that happens under your account, including jobs launched, spend incurred and data submitted.",
      "Security of your credentials is your responsibility:",
      [
        "Keep your password, recovery email and multi-factor secrets private.",
        "SSH keys are generated locally by you. Quanta stores only the public key and its fingerprint, and cannot recover a lost private key.",
        "A connected wallet controls funds. Signing a transaction is your action alone and cannot be reversed by us.",
        "Tell us immediately if you believe your account or wallet has been compromised.",
      ],
    ],
  },
  {
    title: "Jobs, quotes and payment",
    body: [
      "Before a job runs you are shown a price for it. Nothing is scheduled and nothing is charged until you approve that quote. Once approved, the job is metered for the time it actually occupies a GPU.",
      "When a job closes, completed compute is settled and any unused balance is returned. Spend caps you set are enforced by the scheduler: a job that would exceed its cap is stopped rather than allowed to continue.",
      "Settlement happens on-chain. Network fees, exchange rates and confirmation times are outside our control, and transactions cannot be reversed once broadcast.",
    ],
  },
  {
    title: "Acceptable use",
    body: [
      "You may not use Quanta to:",
      [
        "Break the law, infringe someone else's rights, or process material you have no right to process.",
        "Attack, probe or attempt to escape the isolation of the node your job runs on, or reach other tenants, operators or the control plane.",
        "Run workloads whose purpose is to disrupt third-party systems, including denial-of-service traffic and credential stuffing.",
        "Mine cryptocurrency, unless a written agreement with us says otherwise.",
        "Resell or sublicense capacity as your own service without our written agreement.",
        "Circumvent metering, spend caps, quotas or any other technical limit.",
      ],
      "We may investigate suspected breaches and cooperate with lawful requests from competent authorities.",
    ],
  },
  {
    title: "Your workloads and data",
    body: [
      "You keep all rights in the code, models, datasets and outputs you bring to the platform. You grant us only the limited licence needed to host, transmit and execute them so the service can run.",
      "Job volumes are ephemeral and encrypted, and are destroyed when the job exits. Do not treat a running job as durable storage: export anything you need to keep before the job closes.",
      "You are responsible for having the rights to the data you process, and for meeting the obligations that attach to it, including any data-protection duties owed to the people it describes.",
    ],
  },
  {
    title: "Availability and warranties",
    body: [
      "The service is provided as-is. We do not warrant that it will be uninterrupted, that a given node will remain healthy for the length of a job, or that results will be free of error.",
      "Where a service level is offered, it is described in a separate written agreement and only the terms of that agreement apply to it.",
    ],
  },
  {
    title: "Limitation of liability",
    body: [
      "To the extent permitted by law, neither party is liable for indirect or consequential loss, loss of profits, loss of revenue, or loss or corruption of data arising from the service.",
      "Our total liability for any claim is limited to the amount you paid for compute in the three months before the event giving rise to it.",
      "Nothing in these terms excludes liability that cannot lawfully be excluded.",
    ],
  },
  {
    title: "Suspension and termination",
    body: [
      "You may stop using the service and close your account at any time. Jobs already running will be settled.",
      "We may suspend or terminate access where there is a breach of these terms, a security or legal risk, or non-payment. Where circumstances allow, we will give notice first and a chance to fix the problem.",
    ],
  },
  {
    title: "Changes to these terms",
    body: [
      "We may update these terms as the service evolves. Material changes will be announced before they take effect, and the date at the top of this page will change. Continuing to use the service after that date means you accept the revised terms.",
    ],
  },
  {
    title: "Governing law and contact",
    body: [
      "These terms are governed by the law of the jurisdiction in which Quanta is established, and disputes are subject to the courts of that jurisdiction. The specific jurisdiction is to be confirmed before launch.",
      "Questions about these terms can be raised from your account dashboard.",
    ],
  },
];

export default function Terms() {
  return (
    <LegalShell
      title="Terms of Service"
      intro="These terms describe what you can expect from Quanta, and what we expect from you when you run compute on the network."
      updated="16 August 2026"
      sections={SECTIONS}
    />
  );
}
