---
tags: ["GPU Systems"]
title: OpenAI cites Kernl in Triton slides
description: >-
  A short note to say how pleasant it is to see our work on Kernl cited in an OpenAI Research Acceleration Team slide
  deck about Triton. Thank you to the team for the nod and for building such an empowering tool.
pubDatetime: 2022-12-12T00:00:00.000Z
draft: false
author: "Michaël Benesty"

postSlug: 2022/openai-triton-slides-mention-kernl
---

Just a quick note: we were delighted to see **Kernl** featured in an OpenAI Research Acceleration Team slide deck about
Triton. The deck highlights Kernl as:

> "Kernl — The first OSS inference engine written in Triton"

You can download the slides locally here: [/files/slides/triton_intel.pdf](/files/slides/triton_intel.pdf)
(source: [https://www.jokeren.tech/slides/triton_intel.pdf](https://www.jokeren.tech/slides/triton_intel.pdf), OpenAI Research Acceleration Team, presenter: Keren Zhou).

<!-- more -->

It’s always motivating to see community work being recognized. Kernl started as a practical way to bring fused GPU
kernels into everyday PyTorch workflows using the OpenAI Triton language, aiming for strong speedups without leaving the
comfort of Python. If you’re curious about the background and benchmarks, our earlier post gives the full story:
[Up to 12X faster GPU inference on Bert, T5 and other transformers with OpenAI Triton kernels](../up-to-12X-faster-gpu-inference-on-bert-t5/index.md).

Many thanks to the Triton and OpenAI teams for building a tool that makes this kind of work accessible—and to everyone
in the community who keeps pushing the ecosystem forward.
