import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import * as site from "./site";

type Leaf = { path: string; value: string };

function collectStrings(value: unknown, path: string, out: Leaf[]): Leaf[] {
  if (typeof value === "string") out.push({ path, value });
  else if (Array.isArray(value)) value.forEach((v, i) => collectStrings(v, `${path}[${i}]`, out));
  else if (value && typeof value === "object")
    for (const [k, v] of Object.entries(value)) collectStrings(v, `${path}.${k}`, out);
  return out;
}

const strings = collectStrings(site, "site", []);
const looksLikeUrl = (s: Leaf) =>
  /(url|src)$/i.test(s.path) || /^[a-z]+:\/\/|^www\.|^\/\S*$/i.test(s.value);

describe("site.ts content", () => {
  it("has no empty strings", () => {
    const empty = strings.filter((s) => s.value.trim() === "").map((s) => s.path);
    expect(empty).toEqual([]);
  });

  it("has no TODO or T1–T10 placeholders", () => {
    const bad = strings.filter((s) => /\[TODO|\[T(10|[1-9])\]|lorem ipsum/i.test(s.value));
    expect(bad.map((s) => s.path)).toEqual([]);
  });

  it("only uses https:// or root-relative URLs", () => {
    const urls = strings.filter(looksLikeUrl);
    expect(urls.length).toBeGreaterThan(5);
    for (const u of urls) expect(u.value, u.path).toMatch(/^(https:\/\/|\/)/);
  });

  it("uses the canonical links", () => {
    expect(site.profile.links.github).toBe("https://github.com/herryvo06");
    expect(site.profile.links.linkedin).toBe("https://www.linkedin.com/in/herryvo/");
    expect(site.profile.links.site).toBe("https://herryvo06.github.io");
    expect(site.profile.email).toBe("syquocuyvo@gmail.com");
    expect(site.profile.resumeUrl).toBe("/resume.pdf");
  });

  it("formats experience dates like the résumé", () => {
    for (const r of site.roles) {
      expect(r.start).toMatch(/^[A-Z][a-z]{2} \d{4}$/);
      expect(r.end).toMatch(/^([A-Z][a-z]{2} \d{4}|Present)$/);
      expect(r.stack.length).toBeGreaterThan(0);
    }
  });

  it("puts a number in every role and finished case study", () => {
    for (const r of site.roles) expect(r.line, r.title).toMatch(/\d/);
    for (const c of site.caseStudies.filter((c) => c.status === "done")) {
      expect(c.results.length, c.slug).toBeGreaterThan(0);
      expect(c.links.length, c.slug).toBeGreaterThan(0);
    }
  });

  it("keeps index.html meta tags in sync with seo", () => {
    const html = readFileSync(resolve(process.cwd(), "index.html"), "utf8");
    expect(html).toContain(`<title>${site.seo.title}</title>`);
    expect(html).toContain(`content="${site.seo.description}"`);
  });
});
