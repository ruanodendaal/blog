---
title: Connecting Bear Notes to Claude 🧠
description: Ever had that nagging feeling that the brilliant insight you need is buried somewhere in your notes, but you can't quite remember where?
author: ruan
image-name: posts/ai_brain.png
image-alt: Digital notebook connected to AI brain with glowing connections
tags: [ai, rag, side-project, productivity, featured]
---

That was me, staring at my collection of 1,000+ Bear notes, a digital memory vault that had become both invaluable and impenetrable.

The problem wasn't organization. The problem was recall. And it hit me: *I'm literally using AI assistants daily, so why am I still manually hunting through my notes?*

## The note-taking paradox

We take notes to remember things. Then we accumulate so many notes that we... forget what's in them. Ironic, isn't it?

I'm rather fond of Markdown (it's clean, portable, and future-proof), which is why Bear has been my go-to for years. But even with tags and search, finding the right note often felt like archaeology, digging through layers of keywords hoping to unearth what I needed.

Meanwhile, I'd been using AI assistants (most notably Claude) more frequently for various tasks, watching them make connections between ideas and synthesize information in ways that felt surprisingly... human.

> 💡 *The lightbulb moment: What if my AI assistants could search through my notes directly?*

## Building the bridge

For the uninitiated, MCP (Model Control Protocol) is Anthropic's standard for connecting AI assistants to external tools and systems. It's what allows AI models to interact with the real world rather than being trapped in a conversational bubble. Read more [here](https://www.anthropic.com/news/model-context-protocol)

I decided to build a custom MCP server that would connect my Bear Notes database directly to Claude. No middlemen, no cloud dependencies, no sharing my personal notes with third parties.

What's so great about it?

- 🔍✨ Transforms notes into semantic vectors that capture meaning, not just keywords
- 🤖📚 Claude can now retrieve relevant context from notes I haven't explicitly mentioned 
- 🔒🎉 Everything runs locally, no data leaves my machine, no API faff, no cloud dependencies 

## How it actually works 🤓

Under the hood, the system uses the Xenova implementation of transformers.js with the all-MiniLM-L6-v2 model:

- It converts each note into a 384-dimensional vector that captures its semantic essence
- These vectors form a searchable index that understands meaning, not just text matching
- When I ask Claude something, it can query this index to find relevant context from my notes

## Why this matters

This isn't just about retrieving notes more efficiently. It's about a fundamental shift in how we interact with our personal knowledge:

- **From active to passive recall**: Instead of having to remember what I know, I can ask what I know
- **From siloed to connected**: My notes are no longer isolated islands of information but an interconnected knowledge base
- **From keyword to meaning**: Finding information based on concepts and ideas, not just exact words

And perhaps most importantly, it happens entirely on my machine. In an age of cloud-everything, there's something deeply satisfying about a powerful system that doesn't need to phone home.

## The unexpected benefits

Building this system yielded some unexpected advantages beyond just finding notes:

- **Rediscovering forgotten ideas**: I've bumped into old notes that sparked new thinking
- **Connecting disparate concepts**: Claude often finds connections between notes I didn't realize were related
- **Removing mental overload**: I no longer worry about forgetting where I stored information

## Try it yourself

If you're a Bear Notes user with a penchant for tinkering, the entire code is available on [GitHub](https://github.com/ruanodendaal/bear-mcp-server) if you want to dig into the implementation details or contribute to improving it.

The setup is detailed in the README, but the TL;DR is:

```bash
git clone https://github.com/ruanodendaal/bear-mcp-server
cd bear-mcp-server
npm install
npm run index  # This creates vector embeddings of your notes
# Configure your MCP settings and you're good to go
```

## The bigger picture

Beyond the practical utility, this project represents something I believe in deeply: technology should augment our thinking without compromising our privacy or agency.

By connecting my notes to AI in a way that keeps everything local, I've created a system that feels like an extension of my own memory rather than a separate service I'm querying.

Would love to hear your thoughts or answer questions if you decide to build something similar!