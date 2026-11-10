import fs from "node:fs";
import path from "node:path";

const knowledgeDir = path.join(process.cwd(), "knowledge");

const knowledgeFiles = [
  "profile.md",
  "experience.md",
  "skills.md",
  "expertise.md",
  "projects.md",
  "education.md",
  "contact.md",
] as const;

function safeReadFile(fileName: string): string | null {
  try {
    const filePath = path.join(knowledgeDir, fileName);
    const content = fs.readFileSync(filePath, "utf-8").trim();

    return content.length > 0 ? content : null;
  } catch (error) {
    console.error(
      `[knowledge] Could not read ${fileName}:`,
      error instanceof Error ? error.message : error,
    );

    return null;
  }
}

export function loadKnowledge(): string {
  const sections = knowledgeFiles
    .map((file) => {
      const content = safeReadFile(file);

      if (!content) {
        return null;
      }

      return `===== ${file} =====\n${content}`;
    })
    .filter((section): section is string => section !== null);

  return sections.join("\n\n");
}