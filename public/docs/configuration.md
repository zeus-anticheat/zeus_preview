# Configuration Overview

The **Configuration** page in the Zeus Dashboard provides administrators with comprehensive control over the core parameters of the Zeus Platform. Settings can be configured directly via the web dashboard or in `config.yaml`. Below is a detailed explanation of all active configuration sections:

## 1. General
*Manages system resources and network bindings.*
- **Host**: The IP address or hostname to which the Zeus system server binds to listen for incoming connections.
- **Port**: The primary network port configured for UDP telemetry exchange and event communication from server gateways.
- **UI Port**: The dedicated network port for the web-based Dashboard interface.
- **Max RAM Limit (GB)**: The maximum amount of memory (in Gigabytes) that the Zeus system process is permitted to consume.

## 2. Latency
*Controls latency sampling to account for network jitter and prevent false flags during connection instability.*
- **Ping Interval (ms)**: The frequency (in milliseconds) at which the system measures player network latency.
- **Timeout (ms)**: The maximum allowed time to wait for a response before a packet or connection is considered timed out.
- **Max Samples**: The maximum number of historical ping samples stored in the rolling memory window.
- **Spike Threshold (ms)**: The network spike threshold. If a player's ping suddenly breaches this value above their average, the system detects a temporary lag spike and applies leniency.

## 3. Runtime
*Configures multi-threading, concurrency, and session recording.*
- **Worker Threads**: The number of background parallel processing threads utilizing multi-core CPUs.
- **Shard Count**: The number of data shards. Sharding divides player workloads across threads to prevent resource contention during high player concurrency.
- **Replay Auto-Record**: Automatically captures `.zrec` high-fidelity physics recordings for forensic replay and verification in the Replay Lab.

## 4. Enforcement Action Thresholds
*Defines cumulative violation point thresholds and automated punishment actions across check categories.*
- **Decay/Cooldown Settings**:
  - **Decay Rate**: The amount of violation points subtracted periodically when a player behaves normally, helping them recover from previous infractions.
  - **Decay Interval (Seconds)**: The frequency at which the Decay Rate is applied to subtract points.
  - **Safe Threshold**: Once a player's violation points drop fully to or below this threshold, their risk profile resets completely.
- **Module-Specific Thresholds (Movement, Combat, Interact, Transaction, Networking)**:
  - **Warn At**: The point threshold that triggers a staff warning.
  - **Kick At**: The point threshold that forcibly kicks the offending player.
  - **Ban At**: The point threshold resulting in a permanent network ban.

## 5. Discord Integration
*Connects Zeus directly to your Discord server for real-time staff alerts, join/leave logging, and management commands.*
- **Enable Discord Integration**: Master toggle to enable or disable the bot integration.
- **Bot Connection**:
  - **Bot Token**: Your Discord application bot token.
  - **Guild ID**: (Optional) Registers slash commands directly to a specific Discord guild for instant availability.
- **Channels**:
  - **Support Channel ID**: Dedicated channel for system alerts, tickets, and operational notices.
  - **Log Channel ID**: Channel for logging player join and leave events.
  - **Alert Channel ID**: Channel for streaming violation warnings and enforcement actions.
- **Alerts & Notifications**:
  - **Alert Minimum Severity**: The lowest severity level (Info, Warning, Kick, Ban) required to trigger a Discord alert.
  - **Notify on Join / Leave**: Toggles player join and leave notifications.
- **Commands**:
  - **Enable Slash Commands**: Toggles interactive in-Discord management commands.
  - **Allowed Role IDs**: Restricts bot command access to specific Discord staff role IDs.

## 6. Adaptive Review
*Manages machine learning behavioral review profiles and server assignments.*
Server assignments are managed locally per connected Minecraft server (`ip:port`). Each server can operate in deterministic Hermes simulation mode or be assigned an Adaptive Review profile for automated anomaly scoring and false-flag triage. For detailed profile workflows, see the [Adaptive Review Guide](/docs/model-management).
