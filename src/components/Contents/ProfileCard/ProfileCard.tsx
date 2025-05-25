import { IconAt, IconBrandX, IconBrandGithub, IconExternalLink } from '@tabler/icons-react';
import { Anchor, Avatar, Card, Center, Group, Text } from '@mantine/core';

export function ProfileCard() {
  return (
    <Center>
      <Card padding="lg" radius="md">
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
              大阪府/日本
            </Text>
          </Group>

          <Group wrap="nowrap" gap={10} mt={5}>
            <IconBrandX stroke={1.5} size={16} />
            <Anchor href="https://x.com/zer0aiart" target="_blank">
              <Group wrap="nowrap" gap={3} >
                <Text fz="xs">
                  @zer0aiart
                </Text>
                <IconExternalLink stroke={1.5} size={12} />
              </Group>
            </Anchor>
          </Group>

          <Group wrap="nowrap" gap={10} mt={5}>
            <IconBrandGithub stroke={1.5} size={16} />
            <Anchor href="https://github.com/zer0-garden-0117" target="_blank">
             <Group wrap="nowrap" gap={3} >
              <Text fz="xs">
                zer0-garden-0117
              </Text>
              <IconExternalLink stroke={1.5} size={12} />
              </Group>
            </Anchor>
          </Group>
        </div>
      </Group>
      </Card>
    </Center>
  );
}