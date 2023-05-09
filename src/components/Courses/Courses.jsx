import {
  Button,
  Container,
  Heading,
  HStack,
  Image,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';

const Course = ({
  views,
  title,
  imageSrc,
  id,
  addToPlaylistHandler,
  creator,
  description,
  lectureCount,
}) => {
  return (
    <VStack className="course" alignItems={['center', 'flex-start']}>
      <Image src={imageSrc} boxSize="60" objectFit={'contain'} />
      <Heading
        textAlign={['center', 'left']}
        maxWidth="200px"
        size={'sm'}
        fontFamily={'sans-serif'}
        noOfLines={3}
        children={title}
      />
      <Text children={description} />
    </VStack>
  );
};
const Courses = () => {
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('');
  const categories = [
    'Web development',
    'Artificial Intellegence',
    'Data Structure & Algorithm',
    'App Development',
    'Data Science',
    'Game Development',
  ];

  return (
    <Container minHeight={'95vh'} maxWidth="container.lg" paddingY={'8'}>
      <Heading margin={'8'} children="All Courses" />
      <Input
        value={keyword}
        onChange={e => setKeyword(e.target.value)}
        placeholder="Search a course..."
        type="text"
        focusBorderColor="yellow.500"
      />
      <HStack
        overflowX={'auto'}
        paddingY="8"
        css={{ '&::-webkit-scrollbar': { display: 'none' } }}
      >
        {categories.map((item, index) => (
          <Button key={index} onClick={() => setCategory(item)} minWidth={'60'}>
            <Text children={item} />
          </Button>
        ))}
      </HStack>
      <Stack
        direction={['column', 'row']}
        flexWrap="wrap"
        justifyContent={['flex-start', 'space-evenly']}
        alignItems={['center', 'flex-start']}
      >
        <Course
          title={'Sample'}
          description={'Sample'}
          views={23}
          imageSrc={'Sample'}
          id={'Sample'}
          creator={'Sample'}
          lectureCount={'Sample'}
        />
      </Stack>
    </Container>
  );
};

export default Courses;
