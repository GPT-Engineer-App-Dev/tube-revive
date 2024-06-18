import { Box, Container, Flex, Image, Text, VStack, HStack, IconButton } from "@chakra-ui/react";
import { FaHome, FaFire, FaRegCompass, FaRegUser } from "react-icons/fa";

const videoData = [
  {
    id: 1,
    title: "Sample Video 1",
    thumbnail: "https://via.placeholder.com/320x180",
    channel: "Channel 1",
    views: "1M views",
    time: "1 day ago",
  },
  {
    id: 2,
    title: "Sample Video 2",
    thumbnail: "https://via.placeholder.com/320x180",
    channel: "Channel 2",
    views: "500K views",
    time: "2 days ago",
  },
  // Add more sample videos as needed
];

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex direction="column">
        {/* Navigation */}
        <Flex justify="space-between" align="center" mb={4}>
          <Text fontSize="2xl" fontWeight="bold">MyTube</Text>
          <HStack spacing={4}>
            <IconButton aria-label="Home" icon={<FaHome />} />
            <IconButton aria-label="Trending" icon={<FaFire />} />
            <IconButton aria-label="Explore" icon={<FaRegCompass />} />
            <IconButton aria-label="Profile" icon={<FaRegUser />} />
          </HStack>
        </Flex>

        {/* Video Thumbnails */}
        <VStack spacing={8}>
          {videoData.map((video) => (
            <Box key={video.id} w="100%">
              <Image src={video.thumbnail} alt={video.title} borderRadius="md" />
              <Flex mt={2} justify="space-between" align="center">
                <Box>
                  <Text fontWeight="bold">{video.title}</Text>
                  <Text fontSize="sm" color="gray.500">{video.channel}</Text>
                  <Text fontSize="sm" color="gray.500">{video.views} • {video.time}</Text>
                </Box>
              </Flex>
            </Box>
          ))}
        </VStack>
      </Flex>
    </Container>
  );
};

export default Index;