# UI Interaction & Platform Management

The Zeus Platform provides a powerful, highly optimized web application that puts you in full control of your infrastructure's behavioral analysis, dataset collection, and machine learning pipelines. This guide covers the major interfaces and workflows within the Admin Dashboard.

## 1. Dashboard (Network Overview)

![Dashboard Network Overview](/images/ui/network-overview.webp)

The Dashboard provides real-time situational awareness of your connected servers and player base. It is the primary landing view for monitoring network-wide enforcement.

* **Live Network Activity**: View the total count of connected backend servers and active players across your network. You can search, paginate, and monitor individual servers and players.
* **Violating Players**: Displays a list of players flagged for high severity anomalies. You can visually toggle alert sounds and flashes, dismiss specific alerts, or permanently delete all violation history.
* **Integrations API**: Features a quick-reference snippet for an Integrations API endpoint for programmatic retrieval or clearing of violation records.

---

## 2. System Health & Control

Monitor server infrastructure resources and manage server node instances efficiently to prevent memory leaks and ensure peak performance.

* **RAM Usage Tracking**: A real-time gauge displaying the memory footprint utilized by the platform in KB/MB/GB.
* **Server Control**: Remotely Start or Stop the core telemetry server directly from the UI without accessing the command line.

---

## 3. Adaptive Review & Profiles

This module empowers administrators to manage behavioral review profiles and server assignments without leaving the browser:

* **Server Assignments**: Connect live Minecraft servers (`ip:port`) to specific review profiles or choose pure Hermes simulation.
* **Review Profiles**: Create, manage, archive, and restore profiles with version history and training tracking.
* **Flag Review Queue**: Inspect flagged anomalies, filter by player/status, and classify flags as confirmed or false positive to continuously calibrate behavior models.
* **Insights**: View network-wide anomaly trends, confidence distribution, and server health analytics.

---

## 4. Data Analysis

A deep-dive tool intended for visually analyzing exported CSV telemetry datasets:

* **CSV Data Preview**: Load raw behavioral data into a memory-safe browser data table with configurable pagination.
* **Anomaly Visualizations**: Automatically generated insight charts visualizing Anomaly Score Distribution, Trend per Sample, Feature Mean Values, and Variance distributions.
* **Dataset Completeness**: Inspect feature coverage grids and health metrics.

---

## 5. Global Configuration

The central settings hub handles all server configurations including General, Latency, Runtime, Enforcement Action Thresholds, and Discord Integration. For a detailed breakdown, refer to the [Configuration Guide](/docs/configuration).

---

## 6. Replay System (Replay & Evidence Review)

The Replay System provides operators with the ability to visually review player activity and verify suspicious behavior without exposing private detection mechanics. By recording high-fidelity telemetry, it reconstructs a visual representation of anomalies, giving administrators clear, irrefutable evidence before taking enforcement action.

* **Visual Replay Viewer**: Step back and forth through a frame-by-frame 3D reconstruction of player movements, actions, and orientation leading up to and during a flagged anomaly.
* **Telemetry Insights**: Inspect concurrent telemetry graphs mapping speed, acceleration, vector deviation, and input rates directly alongside the visual representation.
* **Evidence Management**: Export localized replay bundles containing raw telemetry and metadata packages. These packages can be shared among administrators for peer-review or archived as historical reference.
* **Privacy-Safe Design**: Replay telemetry focuses purely on physics and spatial coordinates. It never records personal identifier data (PII) or internal server heuristics, keeping the review process compliant with security standards.
