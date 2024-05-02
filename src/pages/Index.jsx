import { Box, Flex, Text, Button, Heading, VStack, Input, Tab, TabList, TabPanel, TabPanels, Tabs, Table, Thead, Tbody, Tr, Th, Td, useColorModeValue } from '@chakra-ui/react';
import { FaToggleOn, FaToggleOff } from 'react-icons/fa';

const Index = () => {
  const bg = useColorModeValue('white', 'gray.800');
  const color = useColorModeValue('gray.800', 'white');

  return (
    <Box bg={bg} color={color} minH="100vh">
      <Flex justifyContent="space-between" p={4}>
        <Box>
          <Button variant="ghost">Home</Button>
          <Button variant="ghost">Bots</Button>
          <Button variant="ghost">Settings</Button>
          <Button variant="ghost">Account</Button>
        </Box>
        <Box>
          <Button leftIcon={<FaToggleOn />} variant="ghost">Test Mode</Button>
          <Button colorScheme="blue" color="white">Log out</Button>
        </Box>
      </Flex>
      <Flex justifyContent="space-around" p={4}>
        <Box p={4} boxShadow="md" borderRadius="lg">
          <Text fontSize="xl">✨ Trades</Text>
          <Text fontSize="2xl">$21,359</Text>
        </Box>
        <Box p={4} boxShadow="md" borderRadius="lg">
          <Text fontSize="xl">💰 Profit</Text>
          <Text fontSize="2xl">$5,000</Text>
        </Box>
        <Box p={4} boxShadow="md" borderRadius="lg">
          <Text fontSize="xl">⛰️ Milestones</Text>
          <VStack>
            <Input placeholder="Take profit" />
            <Button colorScheme="blue">Take profit</Button>
          </VStack>
        </Box>
      </Flex>
      <Box p={4} boxShadow="md" borderRadius="lg">
        <Heading size="md">Trading Chart</Heading>
        {/* Placeholder for trading chart */}
      </Box>
      <Tabs variant="enclosed" p={4}>
        <TabList>
          <Tab>Trades</Tab>
          <Tab>Activities</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Input placeholder="Search trades" mb={4} />
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Date</Th>
                  <Th>Name</Th>
                  <Th>Start</Th>
                  <Th>End</Th>
                  <Th>Duration</Th>
                  <Th>Result</Th>
                  <Th>Profit</Th>
                  <Th>% Change</Th>
                </Tr>
              </Thead>
              <Tbody>
                {/* Mock data rows */}
              </Tbody>
            </Table>
          </TabPanel>
          <TabPanel>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Date</Th>
                  <Th>Activity</Th>
                  <Th>Amount</Th>
                </Tr>
              </Thead>
              <Tbody>
                {/* Mock data rows */}
              </Tbody>
            </Table>
          </TabPanel>
        </TabPanels>
      </Tabs>
      <Flex justifyContent="center" p={4} bg="gray.100">
        <Text>© 2023 Crypto Dashboard</Text>
      </Flex>
    </Box>
  );
};

export default Index;