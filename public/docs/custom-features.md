# Custom Telemetry & Feature Sync

Out of the box, Zeus automatically monitors high-level player behaviors across movement, combat, interaction, transaction, and network telemetry. When servers feature customized mechanics—such as external launch pads, knockback modifiers, or specialized item abilities—Zeus provides integration points to coordinate gameplay state.

## How State Synchronizes

When custom gameplay actions occur, data can be transferred to the core engine to provide state context:

1. **Synchronous Injection**: State events are strictly synchronized with incoming player packet streams. As the player moves, attacks, or interacts, state context binds to that exact millisecond tick.
2. **Context-Aware Evaluation**: The engine consumes this metadata alongside raw movement and interaction packets, ensuring customized movements or abilities are evaluated with proper context rather than misidentified as anomalies.

## Providing Custom Telemetry

To add custom metrics to the telemetry stream:
1. **Capture Event**: Monitor for your specific gameplay event or game state change in your server gateway or plugin.
2. **Construct Payload**: Group the custom metadata into the standardized packet format (`PacketPlayerCustomFeature` via `0x20`).
3. **Dispatch**: Transmit the serialized telemetry to the engine via the provided UDP adapter bridges.
4. **Automatic Normalization**: The core platform normalizes incoming payloads, ensuring new metrics fit uniformly within the evaluation pipeline.
