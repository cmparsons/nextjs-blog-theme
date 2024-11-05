import { defineStackbitConfig } from '@stackbit/types';
import { GitContentSource } from '@stackbit/cms-git';

export default defineStackbitConfig({
  stackbitVersion: '~0.6.0',
  nodeVersion: '18',
  ssgName: 'nextjs',
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ['posts'],
      models: [
        {
          name: 'Post',
          type: 'page',
          urlPath: '/posts/{slug}',
          filePath: 'posts/{slug}.mdx',
          fields: [
            { name: 'title', type: 'string', required: true },
            {
              name: 'description',
              type: 'string',
            },
            {
              name: 'date',
              type: 'string',
            },
          ],
        },
      ],
    }),
  ],
});
