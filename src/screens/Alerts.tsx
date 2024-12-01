import { Alert, Box, CheckIcon, CloseIcon, HStack, IconButton, Slide, Stack, Text, VStack } from "native-base";

export function Alerts({alertStatus}:any) {
    return ( 
        <Slide in={alertStatus.isShow} placement="top">
        <Box w="100%" position="absolute" p="2" borderRadius="xs" alignItems="center" justifyContent="center" 
        safeArea>
          <Alert w="100%" status={alertStatus.status}>
          <HStack space={2} maxW="400">
            <Alert.Icon  mt="1" />   
            <Text fontSize="md" color="coolGray.800">
                 {alertStatus.title}
          </Text>    
          </HStack>
          </Alert>          
        </Box>
      </Slide>

    // <Stack space={3} w="100%" maxW="400">
    //     {alertStatus.map((status:any,index:any) => {
    //     return (
    //           <Alert w="100%" status={status.status} key={index}>
    //           <VStack space={2} flexShrink={1} w="100%">
    //             <HStack flexShrink={1} space={2} justifyContent="space-between">
    //               <HStack space={2} flexShrink={1}>
    //                 <Alert.Icon mt="1" />
    //                 <Text fontSize="md" color="coolGray.800">
    //                   {status.title}
    //                 </Text>
    //               </HStack>
    //               <IconButton variant="unstyled" _focus={{
    //             borderWidth: 0
    //           }} icon={<CloseIcon size="3" />} _icon={{
    //             color: "coolGray.600"
    //           }} />
    //             </HStack>
    //           </VStack>
    //         </Alert>
    //     );
    //   })}
    //   </Stack>
    );
  }