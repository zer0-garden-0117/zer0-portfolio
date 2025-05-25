import { ProfileCard } from "@/components/Contents/ProfileCard/ProfileCard";
import { WorkList } from "@/components/Contents/WorkList/WorkList";
import { SimpleGrid, Space, Title } from "@mantine/core";

export default function Home() {
  return (
    <>
      <SimpleGrid cols={{ base: 1, sm: 1, md: 1 }} spacing="xl" >
        <ProfileCard />
      </SimpleGrid>
      <Title order={2} mr={10} mt={10} mb={10} ml={10} c={"var(--mantine-color-dimmed)"} size={20} fw={700}>
        Works
      </Title>
      <SimpleGrid cols={{ base: 1, sm: 1, md: 2 }} spacing="md" ml={10} mr={10}>
        <WorkList />
      </SimpleGrid>
    </>
  );
}
