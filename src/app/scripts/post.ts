import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark';
import html from 'remark-html';

const postDirectory = path.join(process.cwd(), '_post');

export async function GetPosts() {
    const fileNames = fs.readdirSync(postDirectory);
    const allPostData = fileNames.map((fileName: string) => {
        const id = fileName.replace(/\.md$/, '');
        const fullPath = path.join(postDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf-8');
        const matterResult = matter(fileContents);

        return {
            id,
            ...matterResult.data
        };
    });

    return allPostData;
}


export async function GetPostsId(id: string) {
    const contentDirectory = path.join(process.cwd(), '_post');
    const fullPath = path.join(contentDirectory, `${id}.md`);
    if (!fs.existsSync(fullPath)){
        return null
    }
    const fileContents = fs.readFileSync(fullPath, 'utf-8');
    console.log(fileContents)
    const matterResult = matter(fileContents);

    const processedContent = await remark().use(html).process(matterResult.content);
    const contentHtml = processedContent.toString();

    return contentHtml;
}