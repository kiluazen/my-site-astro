import { JSDOM } from 'jsdom';

interface Metadata {
  title: string;
  publishDate: string;
  description: string;
  image?: string;
}

export function parseHTML(htmlContent: string): Metadata {
  const dom = new JSDOM(htmlContent);
  const scriptElement = dom.window.document.querySelector('script[type="application/json"]');

  if (!scriptElement) {
    throw new Error('No script tag with type "application/json" found.');
  }

  try {
    const metadata = JSON.parse(scriptElement.textContent || '{}');
    return metadata as Metadata;
  } catch (error) {
    throw new Error('Failed to parse metadata JSON.');
  }
}