# Projects

## The Buying Studio — Explainable AI Buying Decision Assistant

A full-stack, AI-assisted laptop recommendation system that combines deterministic rule-based filtering, preference scoring, and LLM-powered natural language explanations to support informed purchasing decisions.

### What I Built
- Designed a modular Python backend with FastAPI for requirement validation, budget constraints, product shortlisting, evidence provenance, and specification-based comparison.
- Integrated Google Gemini for optional, context-aware product explanations using structured prompts, evidence grounding, uncertainty handling, and a deterministic fallback mechanism.
- Built a responsive React and TypeScript interface with product comparisons, saved selections, and real-time API communication.
- Implemented 123 Python unit tests and 42 end-to-end HTTP assertions to validate business rules, API functionality, AI grounding, and application reliability.
- Separated decision logic from the AI layer so the application keeps working when the LLM API is unavailable.

### Impact
Delivers transparent, explainable recommendations that respect hard constraints, flag missing specifications, and continue working without the LLM. Functional demo on provenance-aware synthetic data, with live marketplace integration planned.

### Technologies
Python 3.12, FastAPI, React.js, TypeScript, Vite, Google Gemini API, REST APIs, Git, GitHub

## GenomeIQ — Genomic Data Analysis Solution (Final Year Project)

An end-to-end automated system using Machine Learning to classify raw genomic data and streamline gene identification.

### What I Built
- Engineered an ML-powered platform with an SVM classifier and Python backend for automated genomic classification.
- Built a React frontend that connects complex backend algorithms with a practical research workflow.
- Used MongoDB for application data.
- Presented the project's technical feasibility and social impact to Khyber Pakhtunkhwa government officials, receiving formal appreciation and consideration for regional implementation.

### Impact
Automated the genomic classification workflow and demonstrated AI's potential in bioinformatics. The project received formal appreciation from Khyber Pakhtunkhwa government officials and was considered for regional implementation.

### Technologies
Python, React, HTML5, CSS3, MongoDB, SVM Classifier, Machine Learning

## AI-Powered LinkedIn Content Automation

An AI-powered LinkedIn content automation workflow built with Make.com that automates topic research, content generation, hashtag creation, and LinkedIn publishing while keeping a human in control of topic selection.

### What I Built
- Built a Make.com workflow that researches relevant and current topics in a selected content niche.
- Used AI to generate five potential LinkedIn post topics, each with a one-line description, for human review.
- Passed the human-selected topic to an LLM that writes an engaging, structured LinkedIn post.
- Generated relevant hashtags to complement each post.
- Integrated the LinkedIn API to publish the completed post automatically.
- Kept a human-in-the-loop approval step so the user controls the content direction.

### Impact
Transforms topic research into ready-to-publish LinkedIn content with minimal manual intervention, reducing repetitive research and writing effort while preserving human control over content direction. The result is a reusable AI-powered content pipeline.

### Technologies
Make.com, AI / LLM, LinkedIn API, Workflow Automation, No-Code Automation

## Kubernetes Platform Migration

Migrated a monolithic legacy stack to a containerized Kubernetes platform without disrupting service.

### What I Built
- Built GitOps-driven cluster provisioning with Terraform and Argo CD.
- Introduced Helm charts for consistent application packaging and deployment.
- Established autoscaling policies for the containerized platform.

### Impact
Standardized releases with GitOps, consistent Helm packaging, and autoscaling, reducing manual deployment overhead and improving rollout consistency.

### Technologies
Terraform, Kubernetes, Helm, Argo CD, AWS

## CI/CD Pipeline Overhaul

Replaced manual, error-prone releases with automated multi-stage CI/CD pipelines.

### What I Built
- Designed multi-stage Jenkins pipelines with parallel test execution and artifact caching.
- Added automated rollbacks to reduce deployment risk.

### Impact
Automated multi-stage builds, tests, and rollbacks, replacing manual releases with a repeatable pipeline.

### Technologies
Jenkins, Docker, GitLab CI, SonarQube

## Observability Stack Rollout

Implemented centralized monitoring, logging, and alerting across environments.

### What I Built
- Deployed Prometheus, Grafana, Loki, and the ELK Stack for centralized observability.
- Added alerting runbooks to support incident response.

### Impact
Centralized logs, metrics, and alerts with runbooks, improving incident visibility and response.

### Technologies
Prometheus, Grafana, Loki, ELK Stack
