# Configuration Overview

The **Configuration** page in the Zeus Dashboard provides administrators with comprehensive control over the core parameters of the Zeus Platform. Below is a detailed explanation of all metrics and settings, categorized by their respective sections:

## 1. General
*This section manages system resources and connection bindings.*
- **Host**: The IP address or hostname to which the Zeus system server will bind to listen for incoming connections.
- **Port**: The primary network port configured for internal data exchange and event communication.
- **UI Port**: The dedicated network port for the web-based Dashboard interface.
- **Max RAM Limit (GB)**: The maximum amount of memory (in Gigabytes) that the Zeus system process is permitted to consume.

## 2. Latency
*Controls ping monitoring to prevent false positive anomalies caused by network instability.*
- **Ping Interval (ms)**: The frequency (in milliseconds) at which the system pings players to measure their network latency.
- **Timeout (ms)**: The maximum allowed time to wait for a response before a packet or connection is considered timed out.
- **Max Samples**: The maximum number of historical ping samples stored in the memory window to calculate a player's rolling average latency.
- **Spike Threshold (ms)**: The network spike threshold. If a player's ping suddenly breaches this value above their average, the system detects a temporary lag spike and applies leniency to AI evaluations.

## 3. Runtime
*Configures multi-threading and data processing capabilities.*
- **Worker Threads**: The number of background parallel processing threads. Increasing this utilizes multi-core CPUs for higher overall performance.
- **Shard Count**: The number of data shards. Sharding divides processing workloads out to prevent resource locks during high player concurrency.
- **Network Receivers**: The number of dedicated network threads responsible for exclusively receiving, decoding, and parsing incoming event packets.

## 4. Analysis
*Defines rules for data sampling in the Machine Learning collector.*
- **Min Samples**: The minimum number of statistical event samples required before the machine learning engine begins producing anomaly evaluations.
- **Max Samples**: The maximum memory window size. This dictates the maximum number of past samples passed to the ML models for trend prediction.
- **Sample Interval**: The extraction interval or gap between collected data samples (used for saving system resources compared to continuous tick-by-tick logging).

## 5. ML Settings
*The core component of the platform, managing Machine Learning (ML) rules, collector limits, and AI calibration.*

- **ML Analysis Active**: The global toggle to enable or disable the entire ML behavioral analysis engine.
- **Feature Collector**:
  - **Limited Mode Buffer**: When running in limited resource mode, this limits the maximum ring-buffer size of historical timesteps retained per player.
  - **Diagnostic Log Interval**: The frequency (in ticks) at which diagnostic logs about the collector's health and throughput are printed to the console.
- **Clean Memory DB**:
  - **Dataset Clean-up Threshold**: The strictness of the anomaly filter used for data pruning (0.0 to 1.0, where higher values retain more data).
  - **Feature Selection Limits**: The maximum number of prioritized characteristics used to train the model cleanly, discarding noisy data arrays.
- **Background Auto-Calibration**:
  - **Processing Interval (sec)**: The downtime (in seconds) between automatic background calibration cycles to realign models with server behavior trends.
  - **Min Samples Per Level**: The minimum required samples required in a specific Effect Level for the auto-calibration engine to treat it as a valid training baseline.

**[Specific ML Configurations (Movement, Combat, Interact, Transaction, Networking)]**

1. **Adaptive Engine (Smart Threshold Interpolation)**
   - **Active**: Toggles the adaptive engine specifically for this analysis module.
   - **Sensitivity**: The strictness of the anomaly detection. Higher values make the system more aggressive but increase the risk of false positives.
   - **Variance**: The allowable variance boundary for distribution tracking.
   - **Capacity / Window / Warmup**: Configures model capacity, evaluation timeframe (Window), and the amount of initial bypass events before strictly enforcing rules (Warmup).
   
2. **Severity Points**
   - **Mild / Moderate / Severe**: The violation score weight incremented upon detecting anomalous behavior at different severity classifications. (e.g., Mild +1, Severe +5).

3. **Adaptive Ping/TPS Thresholds (Lag Mitigation)**
   - **Max Ping / Min TPS**: The extreme constraints where punishments and ML evaluations are ignored outright to protect lagging players.
   - **High Ping / Low TPS**: The start limits where the server is considered struggling.
   - **Multiplier**: A damage-control coefficient. (e.g., a multiplier of 0.2 means only 20% of the violation points are applied during lag).

## 6. Enforcement
*Defines the thresholds and actions for automated punishments.*
- **Decay/Cooldown Settings**:
  - **Decay Rate**: The amount of violation points subtracted periodically when a player behaves normally, helping them recover from previous infractions.
  - **Decay Interval (Seconds)**: The frequency at which the Decay Rate is applied to subtract points.
  - **Safe Threshold**: Once a player's violation points drop fully to or below this threshold, their risk profile resets completely.
- **Module-Specific Thresholds (Movement, Combat, Interact, Transaction, Networking)**:
  - **Warn At**: The point threshold that triggers a silent or public staff warning.
  - **Kick At**: The point threshold that forcibly kicks the offending player.
  - **Ban At**: The point threshold resulting in a permanent network ban.

## 7. Profiles Management
Allows administrators to manage and switch entire configuration profiles tailored for specific game modes. For instance, you can designate a strict ML profile for competitive environments like "KitPvP" while swapping to a more relaxed profile for casual "Survival" servers.
