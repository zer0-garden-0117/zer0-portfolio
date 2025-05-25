import { IconAt, IconBrandX, IconBrandGithub } from '@tabler/icons-react';
import { Anchor, Avatar, Card, Center, Group, Text } from '@mantine/core';

export function ProfileCard() {
  return (
    <Center>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Group wrap="nowrap">
        <Avatar
          src="/icon.jpg"
          size={94}
          radius="md"
        />
        <div>
          <Text fz="lg" fw={500} >
            zer0
          </Text>

          <Group wrap="nowrap" gap={10} mt={3}>
            <IconAt stroke={1.5} size={16} />
            <Text fz="xs" c="dimmed">
              大阪府在住。エンジニアの端くれ
            </Text>
          </Group>

          <Group wrap="nowrap" gap={10} mt={5}>
            <IconBrandX stroke={1.5} size={16} />
            <Anchor href="https://x.com/zer0aiart" target="_blank">
              <Text fz="xs">
                @zer0aiart
              </Text>
            </Anchor>
          </Group>

          <Group wrap="nowrap" gap={10} mt={5}>
            <IconBrandGithub stroke={1.5} size={16} />
            <Anchor href="https://github.com/zer0-garden-0117" target="_blank">
              <Text fz="xs">
                zer0-garden-0117
              </Text>
            </Anchor>
          </Group>
        </div>
      </Group>
      </Card>
    </Center>
  );
}