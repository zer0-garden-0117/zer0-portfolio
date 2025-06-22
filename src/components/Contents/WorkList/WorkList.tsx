import { IconExternalLink } from '@tabler/icons-react';
import { Anchor, Card, Group, Text } from '@mantine/core';

type WorkItem = {
  title: string;
  url: string;
  domain: string;
  description: string;
  techStack: string;
  lang: string;
  githubUrl?: string;
};

export function WorkList() {
  const works: WorkItem[] = [
    {
      title: 'ANGEL SANDBOX',
      url: 'https://www.angel-sandbox.com',
      domain: 'angel-sandbox.com',
      description: '生成AIを使って生成した画像を投稿する個人サイト。',
      techStack: '構成：Next.js, SpringBoot, Cognito, DynamoDB, S3',
      lang: '言語：TypeScript, Kotlin',
      githubUrl: 'https://github.com/zer0-garden-0117/angel-sandbox',
    },
    {
      title: 'zer0 graffit1',
      url: 'https://www.zer0-graffit1.click',
      domain: 'zer0-graffit1.click',
      description: 'tech系の落書き帳。',
      techStack: '構成：Next.js, Markdown, Giscus', 
      lang: '言語：TypeScript',
      githubUrl: 'https://github.com/zer0-garden-0117/zer0-graffit1',
    },
    {
      title: 'Cross Media Uploader',
      url: 'https://github.com/zer0-garden-0117/cross-media-uploader',
      domain: 'github.com',
      description: '複数のSNSに同時投稿するデスクトップ型アプリ。',
      techStack: '構成：Nextron',
      lang: '言語：TypeScript',
      githubUrl: 'https://github.com/zer0-garden-0117/cross-media-uploader',
    },
  ];

  return (
    <>
      {works.map((work, index) => (
        <Card key={index} shadow="sm" padding="lg" radius="md" withBorder>
          <Group wrap="nowrap">
            <div>
              <Text fz="xl" fw={500}>
                {work.title}
              </Text>
              <Anchor href={work.url} target="_blank">
                <Group wrap="nowrap" gap={3}>
                  <Text fz="xs">{work.domain}</Text>
                  <IconExternalLink stroke={1.5} size={12} />
                </Group>
              </Anchor>

              <Text fz="md" mt={5} c="dimmed">
                {work.description}
              </Text>
              <Text fz="md" mt={5} c="dimmed">
                {work.techStack}
              </Text>
              <Text fz="md" mt={5} c="dimmed">
                {work.lang}
              </Text>

              {work.githubUrl && (
                <Group wrap="nowrap" gap={10} mt={5}>
                  <Anchor href={work.githubUrl} target="_blank">
                    <Group wrap="nowrap" gap={3}>
                      <Text fz="xs">View on Github</Text>
                      <IconExternalLink stroke={1.5} size={12} />
                    </Group>
                  </Anchor>
                </Group>
              )}
            </div>
          </Group>
        </Card>
      ))}
    </>
  );
}