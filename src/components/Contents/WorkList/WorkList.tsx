import { IconExternalLink } from '@tabler/icons-react';
import { Anchor, Card, Group, Text } from '@mantine/core';

type WorkItem = {
  title: string;
  url: string;
  domain: string;
  description: string;
  techStack: string;
  githubUrl?: string;
};

export function WorkList() {
  const works: WorkItem[] = [
    {
      title: 'zer0 graffit1',
      url: 'https://www.zer0-graffit1.click',
      domain: 'zer0-graffit1.click',
      description: 'zer0の落書き帳。',
      techStack: '(構成：Next.js + Markdown + MantineUI + Giscus)',
      githubUrl: 'https://github.com/zer0-garden-0117/zer0-graffit1',
    },
    {
      title: 'ANGEL SANDBOX',
      url: 'https://www.angel-sandbox.com',
      domain: 'angel-sandbox.com',
      description: 'AIイラストのポートフォリオサイト。',
      techStack: '(構成：Next.js + MantineUI + SpringBoot + DynamoDB + S3)',
      githubUrl: 'https://github.com/zer0-garden-0117/angel-sandbox',
    },
    {
      title: 'Cross Media Uploader',
      url: 'https://github.com/zer0-garden-0117/cross-media-uploader',
      domain: 'github.com',
      description: '複数のSNSに同時投稿するツール。',
      techStack: '(構成：Shell Script + PyQt6)',
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

              <Text fz="md" mt={5}>
                {work.description}
              </Text>
              <Text fz="md" mt={5}>
                {work.techStack}
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