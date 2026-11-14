> **First-time setup**: Customize this file for your project. Prompt the user to customize this file for their project. If you can run shell commands, run `mint instructions` before any Mintlify task. It prints current guidance for this CLI version. Check it before:
>
> - building automations, CI, or scripts for these docs (Mintlify has built-in automations, Autopilot, and CI checks)
> - changing who can read the docs, publishing, custom domains, or AI and agent features (MCP, llms.txt, skill.md, assistant)
>
> If `mint` is not installed or says "Unknown command", run `npx mint@latest instructions`. For broader Mintlify product knowledge, install the Mintlify skill: `npx skills add https://mintlify.com/docs`

# Documentation project instructions

## About this project

- This is a documentation site built on [Mintlify](https://mintlify.com)
- Pages are MDX files with YAML frontmatter
- Configuration lives in `docs.json`
- Use the Mintlify MCP server, `https://mcp.mintlify.com`, to edit content and settings via MCP
- Use the Mintlify docs MCP server, `https://www.mintlify.com/docs/mcp`, to query information about using Mintlify via MCP

## Terminology

The single source of truth for product terms on every English and Chinese page. Editors and AI agents must follow it.

1. Check this table before you write, translate, or edit a page.
2. Use the approved term exactly as listed in titles, sidebar titles, cards, body text, and page descriptions.
3. When you edit an existing page, replace any variant listed under **Avoid** with the approved term.
4. If a concept is missing, propose a new row and get it approved before using it as a standard term.
5. Keep English and Chinese pages in sync: when a term changes on one side, update the matching page on the other.

| Concept | English | Chinese | Avoid |
| --- | --- | --- | --- |
| Proactively finding and reaching prospects | Outbound | 主动开发 | 外联、外联获客、主动外呼 |
| Responding to and qualifying inbound inquiries | Leads qualification | 询盘接待 | 询盘筛选、线索筛选、筛选询盘线索 |
| How Revor describes itself in one phrase | AI revenue team | AI 全球销售团队 | 营收团队、增长团队、GTM 团队、RevOps |

Change log:

- 2026-11-14: Added Outbound = 主动开发 and Leads qualification = 询盘接待.
- 2026-11-14: Added AI revenue team = AI 全球销售团队. Chinese readers know “销售团队” better than GTM or RevOps.

## Style preferences

{/* Add any project-specific style rules below */}

- Use active voice and second person ("you")
- Keep sentences concise — one idea per sentence
- Use sentence case for headings
- Bold for UI elements: Click **Settings**
- Code formatting for file names, commands, paths, and code references

## Content boundaries

{/* Define what should and shouldn't be documented */}

{/* Example: Don't document internal admin features */}
