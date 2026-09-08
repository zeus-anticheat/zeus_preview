# Introduction to Zeus Platform

Zeus is a next-generation **Machine Learning Anti-Cheat** platform designed to secure Minecraft servers with unprecedented precision. Moving beyond traditional heuristic checks, Zeus leverages deep neural networks, telemetry analysis, and dynamic anomaly detection to instantly neutralize modern threats.

## High-Level Architecture

The platform is designed to be highly modular and incredibly performant, executing all ML inference and data-processing tasks out-of-band to guarantee zero TPS impact on the primary game server.

1. **High-Performance Engine**: The core infrastructure processes telemetry data to construct a frame-by-frame representation of player activity. It handles high-complexity scenarios such as liquid interactions, climbing states, and velocity responses seamlessly.
2. **Data Normalization**: The data refinery pipeline transforms volatile player state variables into scaled, ML-friendly formats. Features are normalized dynamically to ensure AI models converge and infer with peak precision.
3. **Dynamic Inference**: Employs sophisticated deep-learning models to analyze patterns of behavior. The engine can dynamically adjust evaluation depth for ambiguous movements to ensure a reliable legitimacy verdict.
4. **Seamless Integration**: Native integrations securely intercept telemetry streams directly from the server event pipelines and relay them to the analysis core in real-time.

## Ecosystem & Supported Platforms

Zeus connects to multiple server runtimes via specialized, lightweight gateways:
- **Paper / Spigot / Folia**: Modern adapter supporting versions 1.14 through 1.21.x, as well as legacy 1.8 - 1.13.x support.
- **Fabric**: Dedicated exact-version Fabric adapters for modded and modern vanilla-compatible setups.
- **Out-of-Band Rust Core**: Independent analysis engine running alongside servers without causing TPS drops or tick lag.

If you are looking to integrate or configure the platform, proceed to our technical guides below.
