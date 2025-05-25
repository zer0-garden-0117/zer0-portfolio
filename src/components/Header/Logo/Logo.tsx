import { Box, Text } from '@mantine/core';
import { useRouter } from 'next/navigation';
import { TextAnimate } from '@gfazioli/mantine-text-animate';

export interface LogoProps {
  width?: string;
  height?: string;
}

export const Logo: React.FC<LogoProps> = () => {
  const router = useRouter()

  const onClickLogo = () => {
    router.push("/");
  };

  return (
    <Box
      onClick={onClickLogo}
      style={{
        cursor: 'pointer',
        display: 'inline-block',
        fontSize: '24px'
      }}
    >
      <TextAnimate.TextTicker
        value="zer0 portfolio"
        c="gray"
        speed={0.2}
        size="xl" 
        fw={700}
      />
    </Box>
  );
};