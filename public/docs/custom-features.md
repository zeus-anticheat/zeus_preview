# Integrating Custom Player Features

Out of the box, Zeus automatically monitors high-level player behaviors across movement, combat, and interaction telemetry. However, heavily customized servers may introduce mechanics that alter movements—such as custom knockback formulas, spell-casting momentum, or specialized items.

To ensure the neural network understands these external factors, the platform exposes dedicated APIs to transmit custom feature telemetry.

## How Custom Features Synchronize

When a custom feature event is fired, the data is rapidly transferred to the core analysis engine. The true power of this system relies on its temporal integration:

1. **Synchronous Injection**: Custom features are strictly synchronized in real-time with existing player state data. As the player moves, attacks, or jumps, the ML inference engine binds your custom metadata to that exact millisecond tick.
2. **Unified Snapshot Generation**: The inference engine consumes this information alongside natural movement features. This ensures the model does not misclassify a custom movement skill as an anomaly, because the explicit custom context is evaluated simultaneously.

## Providing Custom Telemetry

To add custom metrics to the telemetry stream:
1. **Capture Event**: Monitor for your specific gameplay event or game state change.
2. **Construct Payload**: Group the customized metadata—either numeric metrics or boolean flags—into the standardized external feature format.
3. **Dispatch**: Transmit the serialized telemetry to the engine via the provided adapter bridges. 
4. **Automatic Normalization**: The core platform automatically applies appropriate scaling and bounds to incoming custom payloads, ensuring your new metrics fit uniformly within the ML model's data distribution.
