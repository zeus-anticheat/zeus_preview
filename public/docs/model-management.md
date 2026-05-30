# ML Model Management

The Zeus Platform provides a robust UI for managing Machine Learning models. Models are the core components that evaluate player behavior to detect anomalies and potential hacks.

## Understanding Models

Each model corresponds to a specific gameplay scenario:
- **Combat**: Analyzes hit accuracy, attack reach, interaction frequency, and player viewing angles.
- **Interact**: Looks at click rates, block placement speeds, and interaction sequence timings.
- **Movement**: Evaluates XYZ velocity, air time, fall distance, and teleportation events.
- **Transaction**: Monitors inventory click events and packet sequence integrity.

To learn more about the underlying ML architectures (Fast, Thinking, Balanced, and Adaptive), please refer to our [AI Model Types](./ai-model-types.md) documentation.

## Creating a New Model

1. Navigate to the **Models** section in the UI.
2. Click **Create New Model**.
3. Select the **Base Template** (e.g., `Strict` or `Standard`).
4. Assign a unique name.
5. The model will be initialized with a baseline configuration, which you can later refine.

## Modifying Existing Models

From the Model Dashboard, select a model to view its configurations. You can adjust:
- **Evaluation Context Window**: Determines how much historical activity is required before an inference runs.
- **Warmup Windows**: A buffer time to allow internal buffers to settle before evaluating the player's behavior.
- **Thresholds**: Adjust confidence intervals to dictate when an anomaly triggers an alert.

## Storage and Profiles

Zeus automatically serializes and stores created ML models within the `ml_profiles/` directory in the project's root. This makes it incredibly easy to back up, share, and version control your models across different servers.

> **Note:** Whenever you modify a model through the UI, the global ML configuration is updated dynamically (hot-reloaded) to prevent any server downtime.
