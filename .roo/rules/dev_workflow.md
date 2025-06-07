---
description: Guide for using available MCP Servers and general development workflows.
globs: **/*
alwaysApply: true
---
# Development Workflow and MCP Tools

This guide outlines general development best practices and how to leverage available Model Context Protocol (MCP) servers and their tools.

## Available MCP Servers and Tools

Model Context Protocol (MCP) servers extend capabilities by providing specialized tools and resources. You can interact with these servers using the `use_mcp_tool` for tools and `access_mcp_resource` for resources.

### browser-tools
Provides tools for interacting with a browser instance, primarily for debugging and auditing web pages.
- **`getConsoleLogs`**: Check browser console logs.
- **`getConsoleErrors`**: Check browser console errors.
- **`getNetworkErrors`**: Check network ERROR logs.
- **`getNetworkLogs`**: Check ALL network logs.
- **`takeScreenshot`**: Take a screenshot of the current browser tab.
- **`getSelectedElement`**: Get the selected element from the browser.
- **`wipeLogs`**: Wipe all browser logs from memory.
- **`runAccessibilityAudit`**: Run an accessibility audit on the current page.
- **`runPerformanceAudit`**: Run a performance audit on the current page.
- **`runSEOAudit`**: Run an SEO audit on the current page.
- **`runNextJSAudit`**: Run a Next.js specific audit.
- **`runDebuggerMode`**: Run debugger mode for an application.
- **`runAuditMode`**: Run audit mode to optimize for SEO, accessibility, and performance.
- **`runBestPracticesAudit`**: Run a best practices audit on the current page.

### playwright
Offers a comprehensive suite of tools for browser automation using Playwright, enabling navigation, interaction, and data extraction from web pages.
- **`browser_close`**: Close the page.
- **`browser_resize`**: Resize the browser window.
- **`browser_console_messages`**: Returns all console messages.
- **`browser_handle_dialog`**: Handle a dialog.
- **`browser_file_upload`**: Upload one or multiple files.
- **`browser_press_key`**: Press a key on the keyboard.
- **`browser_navigate`**: Navigate to a URL.
- **`browser_navigate_back`**: Go back to the previous page.
- **`browser_navigate_forward`**: Go forward to the next page.
- **`browser_network_requests`**: Returns all network requests.
- **`browser_pdf_save`**: Save page as PDF.
- **`browser_tab_list`**: List browser tabs.
- **`browser_tab_new`**: Open a new tab.
- **`browser_tab_select`**: Select a tab by index.
- **`browser_tab_close`**: Close a tab.
- **`browser_screen_capture`**: Take a screenshot.
- **`browser_screen_move_mouse`**: Move mouse to a position.
- **`browser_screen_click`**: Click left mouse button.
- **`browser_screen_drag`**: Drag left mouse button.
- **`browser_screen_type`**: Type text.
- **`browser_wait_for`**: Wait for text or time.

### searxng-bridge
Allows performing searches using a configured SearxNG instance.
- **`search`**: Perform a search with various parameters like query, language, categories, time range, etc.

### langgraph Docs
Provides tools to fetch and search documentation for LangGraph.
- **`fetch_langgraph_documentation`**: Fetch entire LangGraph documentation.
- **`search_langgraph_documentation`**: Semantically search within the fetched LangGraph documentation.
- **`search_langgraph_code`**: Search for code within the "langchain-ai/langgraph" GitHub repository.
- **`fetch_generic_url_content`**: Fetch content from any absolute URL.

### sequential-thinking
A tool for dynamic and reflective problem-solving through a structured thought process.
- **`sequentialthinking`**: Helps analyze problems by breaking them down, planning, revising, and verifying hypotheses.

### Neon
Offers tools for managing Neon PostgreSQL databases, including project and branch management, SQL execution, and schema migration.
- **`list_projects`**: Lists Neon projects.
- **`create_project`**: Creates a new Neon project.
- **`delete_project`**: Deletes a Neon project.
- **`describe_project`**: Describes a Neon project.
- **`run_sql`**: Executes a single SQL statement.
- **`run_sql_transaction`**: Executes a SQL transaction (multiple statements).
- **`describe_table_schema`**: Describes the schema of a table.
- **`get_database_tables`**: Gets all tables in a database.
- **`create_branch`**: Creates a branch in a project.
- **`prepare_database_migration`**: Prepares and tests a database schema migration.
- **`complete_database_migration`**: Applies a verified migration to the main branch.
- **`describe_branch`**: Gets a tree view of objects in a branch.
- **`delete_branch`**: Deletes a branch.
- **`get_connection_string`**: Gets a PostgreSQL connection string.
- **`provision_neon_auth`**: Provisions authentication for a Neon project using Stack Auth.
- **`explain_sql_statement`**: Describes the query execution plan.
- **`prepare_query_tuning`**: Analyzes and suggests query performance optimizations.
- **`complete_query_tuning`**: Applies or discards query tuning changes.
- **`list_slow_queries`**: Lists slow queries from the database.
- **`list_branch_computes`**: Lists compute endpoints for a project or branch.

## General Development Best Practices

- **Code Analysis & Refactoring Techniques**:
    - Useful for understanding module structure or planning refactors.
    - Use grep/ripgrep to find exported functions/constants:
      `rg "export (async function|function|const) \w+"` or similar patterns.
    - Can help compare functions between files during migrations or identify potential naming conflicts.

---
*This guide provides an overview of available MCP tools and general best practices. Refer to the specific tool documentation for detailed usage and parameters.*