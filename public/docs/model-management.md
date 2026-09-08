# Adaptive Review & Profiles

The Zeus Platform provides an integrated UI for managing Adaptive Review profiles and server assignments. Adaptive Review learns community baselines and assists operators in evaluating suspicious gameplay behavior.

## Understanding Profiles

Profiles adapt to server-specific playstyles and game modes:
- **Hermes Simulation Only**: Deterministic, zero-ML physics evaluation path using exact server ticks.
- **Adaptive Review Profile**: Collects flag reviews, learns community baselines, and prioritizes suspicious behavior without manual threshold guessing.

## Creating a Profile

1. Navigate to **Adaptive Review Profiles** in the dashboard sidebar.
2. Click **Create profile**.
3. Provide a descriptive name for your profile (e.g., `KitPvP Standard`, `Survival Balanced`).
4. Once created, the profile starts in `untrained` status until sufficient review data is collected.

## Training and Version Management

1. Review incoming flags in the **Flag Review** tab and classify them as confirmed anomalies or false flags.
2. When sufficient labels have been collected, initiate a training job via **Train profile**.
3. Once training succeeds, activate the new model version or roll back to any previous version with a single click.

## Server Assignment

Server assignments are managed locally on each Zeus instance under **Adaptive Review -> Servers**:
- Select any live connected Minecraft server (`ip:port`).
- Assign an existing profile or keep it on pure Hermes simulation.
- Settings are saved locally in `config.yaml` without requiring server restarts.

## Recoverable Trash

Deleted profiles are moved to **Profile Trash** where they can be restored within 24 hours before permanent removal.
