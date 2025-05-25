import { ProfileCard } from "@/components/Contents/ProfileCard/ProfileCard";
import { SimpleGrid } from "@mantine/core";

export default function Home() {
  return (
    <>
      <SimpleGrid cols={{ base: 1, sm: 1, md: 1 }} spacing="lg">
        <ProfileCard />
      </SimpleGrid>
    </>
  );
}
