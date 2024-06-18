import { Box, Container, Flex, Image, Text, VStack, HStack, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import YouTubeLogo from "../assets/youtube-logo.svg";
import { FaHome, FaFire, FaRegCompass, FaRegUser } from "react-icons/fa";

const Index = () => {
  const [videoData, setVideoData] = useState([
    {
      id: 1,
      title: "Sample Video 1",
      thumbnail: "/video-thumbnail-1.jpg",
      channel: "Channel 1",
      views: "1M views",
      time: "1 day ago",
    },
    {
      id: 2,
      title: "Sample Video 2",
      thumbnail: "/video-thumbnail-2.jpg",
      channel: "Channel 2",
      views: "500K views",
      time: "2 days ago",
    },
    // Add more sample videos as needed
  ]);

  return (
    <Container maxW="container.xl" p={4}>
      <Flex direction="row">
        {/* Side Panel */}
        <Flex direction="column" w="250px" p={4} borderRight="1px solid #e2e8f0">
          <Button leftIcon={<FaHome />} variant="ghost" justifyContent="flex-start" mb={4}>
            Home
          </Button>
          <Button leftIcon={<FaFire />} variant="ghost" justifyContent="flex-start" mb={4}>
            Trending
          </Button>
          <Button leftIcon={<FaRegCompass />} variant="ghost" justifyContent="flex-start" mb={4}>
            Explore
          </Button>
          <Button leftIcon={<FaRegUser />} variant="ghost" justifyContent="flex-start" mb={4}>
            Profile
          </Button>
        </Flex>

        {/* Main Content */}
        <Flex direction="column" flex="1" ml={4}>
          {/* Navigation */}
          <Flex justify="space-between" align="center" mb={4}>
            <HStack spacing={2}>
              <Image src={YouTubeLogo} alt="YouTube Logo" boxSize="80px" />
            </HStack>
          </Flex>

          {/* Video Thumbnails */}
          <VStack spacing={8}>
            {videoData.map((video) => (
              <Box key={video.id} w="100%" _hover={{ transform: "scale(1.02)", transition: "0.3s" }}>
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
      </Flex>
    </Container>
  );
};

export default Index;