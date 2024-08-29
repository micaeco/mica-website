import { Octokit } from "@octokit/rest";

class Github {
  private octokit: Octokit;
  private owner: string;
  private repo: string;

  constructor(owner: string, repo: string) {
    this.octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });
    this.owner = owner;
    this.repo = repo;
  }

  async getFile(path: string): Promise<string> {
    try {
      const response = await this.octokit.repos.getContent({
        owner: this.owner,
        repo: this.repo,
        path,
      });

      if ('content' in response.data) {
        return Buffer.from(response.data.content, 'base64').toString('utf-8');
      } else {
        throw new Error('Not a file');
      }
    } catch (error) {
      console.error(`Error fetching file from ${path}:`, error);
      throw error;
    }
  }

  async getFilesFromDirectory(path: string): Promise<{ [filename: string]: string }> {
    try {
      const response = await this.octokit.repos.getContent({
        owner: this.owner,
        repo: this.repo,
        path,
      });

      if (Array.isArray(response.data)) {
        const filePromises = response.data
          .filter(item => item.type === 'file' && item.name.endsWith('.md'))
          .map(async file => {
            const content = await this.getFile(file.path);
            return [file.name, content] as [string, string];
          });

        const files = await Promise.all(filePromises);
        return Object.fromEntries(files);
      } else {
        throw new Error('Not a directory');
      }
    } catch (error) {
      console.error(`Error fetching files from directory ${path}:`, error);
      throw error;
    }
  }
}

const github = new Github('micaeco', 'mica-documentation');

export async function getFAQs(): Promise<{ [filename: string]: string }> {
  return github.getFilesFromDirectory('Software/Web/Faqs');
}

export async function getBlogPosts(): Promise<{ [filename: string]: string }> {
  return github.getFilesFromDirectory('Software/Web/Blog/published');
}