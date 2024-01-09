'use client'

import { Box, Button, Card, CardBody, CardHeader, FormControl, FormLabel, Heading, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, StackDivider, Text, useDisclosure } from "@chakra-ui/react";
import { todos } from "./_partials/Header/data";
import { useEffect, useState } from "react";

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [isEditOpen, setIsEditOpen] = useState(false)
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [todos, setTodos] = useState([])

  function fetchdata() {
    let todosjson = JSON.parse(localStorage.getItem('data'))
    setTodos(todosjson)
  }

  useEffect(() => {
    fetchdata()
  }, [todos])


  return (
    <main className="px-5 py-10 min-h-screen">
      <Card>
        <CardHeader className="flex justify-between">
          <Heading size={'lg'}>To-do list</Heading>
          <Button colorScheme={'blue'} onClick={onOpen}>Add activity</Button>
        </CardHeader>
        
        <CardBody>
          <Stack divider={<StackDivider/>} spacing={'5'}>
            {todos?.map((todo, index) => {
                return(
                  <Box key={index} className="flex justify-between">
                    <Box className="flex flex-col">
                      <Heading fontSize={'lg'}>{todo?.title}</Heading>
                      <Text fontSize={'md'} pt={'1'}>{todo?.desc}</Text>
                    </Box>

                    <Box className="flex items-center">
                      <Button className="ml-2" onClick={() => setIsEditOpen(true)} colorScheme={'yellow'}>Edit</Button>
                      <Button className="ml-2" onClick={() => {
                        todos.splice(index, 1)
                        setTodos(todos)
                        localStorage.setItem('data', JSON.stringify(todos))
                      }} colorScheme={'red'}>Delete</Button>
                    </Box>
                  </Box>
                )
            })}
          </Stack>
        </CardBody>
      </Card>

      {/* Modal create */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton/>
          <ModalBody>
            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input placeholder="Enter the title" onChange={(e) => {setTitle(e.target.value)}} type="text"></Input>
            </FormControl>
            <FormControl>
              <FormLabel>Description</FormLabel>
              <Input placeholder="Enter the description" onChange={(e) => {setDesc(e.target.value)}} type="text"></Input>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='red' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button colorScheme={'blue'} onClick={() => {
              let temp = {title: title,desc: desc}
              setTodos([...todos, temp])
              onClose()
              localStorage.setItem('data', JSON.stringify([...todos, temp]))
            }}>
            Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* Modal edit */}
      <Modal isOpen={isEditOpen} onClose={() => setIsEditOpen(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton/>
          <ModalBody>
            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input placeholder="Enter the title" onChange={(e) => {setTitle(e.target.value)}} type="text"></Input>
            </FormControl>
            <FormControl>
              <FormLabel>Description</FormLabel>
              <Input placeholder="Enter the description" onChange={(e) => {setDesc(e.target.value)}} type="text"></Input>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='red' mr={3} onClick={() => setIsEditOpen(false)}>
              Close
            </Button>
            <Button colorScheme={'blue'} onClick={() => {
              let temp = {title: title,desc: desc}
              setTodos([...todos, temp])
              onClose()
              localStorage.setItem('data', JSON.stringify([...todos, temp]))
            }}>
            Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>


    </main>
  )
}
