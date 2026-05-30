# AI Model Types

The Zeus Platform leverages a variety of Machine Learning architectures to balance performance, latency, and analysis depth. By selecting different model types, server administrators can tailor the analysis engine to their specific hardware profiles and detection requirements.

These model types correspond directly to the `ModelKind` configuration options available in the platform's ML engine.

---

## 1. Fast
**Architecture:** Stateless Evaluation

Optimized for ultra-low latency and high-throughput evaluation, **Fast** models are ideal for instant real-time telemetry processing without performance hits. By utilizing simple, highly optimized processing pipelines, these models can process hundreds of events per tick per player, acting as a lightweight, first-line anomaly detector.

*   **Best For:** High-volume combat checks, initial telemetry screening, and low-spec host environments.
*   **Latency Profile:** Sub-millisecond execution.

---

## 2. Thinking (Low)
**Architecture:** Sequential Memory

These models maintain temporal state over time, providing memory-aware reasoning and context evaluation for sequential behavioral anomalies. Unlike static point-in-time checks, **Thinking (Low)** models analyze the transition between actions, making them highly effective at identifying subtle patterns that only appear across multiple consecutive ticks.

*   **Best For:** Tracking movement sequences, detecting subtle reach or click timing patterns, and context-dependent checks.
*   **Latency Profile:** Low to moderate, deferred out-of-band.

---

## 3. Thinking (High)
**Architecture:** Full-Context Retrospective

Deep **Thinking (High)** models evaluate sequence data forwards and backwards, enabling exhaustive retrospective analysis. By processing entire windows of telemetry in both directions, these models build a complete, highly contextual picture of player behavior to eliminate false positives and catch sophisticated, intermittent anomalies.

*   **Best For:** Comprehensive combat and movement auditing, retrospective analysis of flagged sessions, and high-accuracy verification.
*   **Latency Profile:** Moderate, scheduled asynchronously.

---

## 4. Balanced (Low/High)
**Architecture:** Hybrid Pipelines

Blending fast evaluation with selective deep analysis, the **Balanced** models prioritize key events efficiently. They dynamically route typical telemetry through high-speed paths while escalating complex, borderline, or suspicious activity to deeper analysis pipelines.

*   **Best For:** General-purpose, set-and-forget configurations across all telemetry checks.
*   **Latency Profile:** Dynamic (ultra-fast for standard play, low-to-moderate during escalation).

---

## 5. Adaptive
**Architecture:** Dynamic Baselines

These models adapt dynamically to server-specific baselines and local players' behaviors in real-time. By continuously updating their internal decision structures as they ingest streaming data, **Adaptive** models learn the natural operational baseline of your specific community without requiring manual retraining.

*   **Best For:** Dynamic thresholding, localized baseline calibration, and adaptation to custom server mechanics or custom player movements.
*   **Latency Profile:** Extremely efficient real-time learning.