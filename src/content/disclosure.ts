export const PUBLIC_CONTENT_GUARDRAILS = {
  allowedTopics: [
    "product outcomes",
    "high-level feature categories",
    "safe user workflows",
    "public integration concepts",
    "supported public platform concepts",
    "operator-facing benefits",
  ],
  internalOnlyTopics: [
    "backend security design",
    "authentication/licensing implementation",
    "proprietary detection logic",
    "exact model internals",
    "bypass-relevant signals",
    "unresolved internal concerns",
    "private operational secrets",
  ],
  claimDiscipline: [
    "Avoid absolute promises unless evidence is approved for publication.",
    "Use outcome-focused language instead of implementation-level claims.",
    "State compatibility and performance claims conservatively.",
    "Prefer feature categories over exact detection mechanisms.",
  ],
  reviewChecklist: [
    "Does this copy explain user value before technical detail?",
    "Does this copy avoid backend security design?",
    "Does this copy avoid authentication/licensing implementation?",
    "Does this copy avoid proprietary detection logic?",
    "Does this copy avoid exact model internals?",
    "Does this copy avoid bypass-relevant signals?",
    "Are performance, accuracy, and compatibility claims conservative?",
  ],
} as const;
