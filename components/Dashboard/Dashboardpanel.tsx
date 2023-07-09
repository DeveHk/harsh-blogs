import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import Logout from "./Logout";

import { useRouter } from "next/router";
const Dashboardpanel = () => {
  function validateName(value: any) {
    let error;
    if (!value) {
      error = "Field is required";
    }
    return error;
  }
  function validateBlog(value: any) {
    let error;
    if (!value || value.length < 100) {
      error = "100 words";
    }
    return error;
  }
  const router = useRouter();
  return (
    <div className="h-full w-full ">
      <div className="w-full flex justify-end px-10  ">
        <div className="w-20 flex justify-center rounded-xl h-fit bg-white bg-opacity-25">
          <Logout router={router}></Logout>
        </div>
      </div>
      <div className="h-full mx-10 mt-10 bg-white p-8 rounded-xl max-w-[500px]">
        <Formik
          initialValues={{ name: "Sasuke" }}
          onSubmit={(values, actions) => {
            console.log(values);
            setTimeout(() => {
              actions.setSubmitting(false);
            }, 1000);
          }}
        >
          {(props) => (
            <Form>
              <Field name="name" validate={validateName}>
                {({ field, form }: any) => (
                  <FormControl
                    isInvalid={form.errors.name && form.touched.name}
                  >
                    <FormLabel>First name</FormLabel>
                    <Input {...field} placeholder="name" />
                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name="tag" validate={validateName}>
                {({ field, form }: any) => (
                  <FormControl isInvalid={form.errors.tag && form.touched.tag}>
                    <FormLabel>Title</FormLabel>

                    <RadioGroup>
                      <Stack direction="row">
                        <Radio value="1">First</Radio>
                        <Radio value="2">Second</Radio>
                        <Radio value="3">Third</Radio>
                      </Stack>
                    </RadioGroup>
                    <FormErrorMessage>{form.errors.tag}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name="title" validate={validateName}>
                {({ field, form }: any) => (
                  <FormControl
                    isInvalid={form.errors.title && form.touched.title}
                  >
                    <FormLabel>Title</FormLabel>
                    <Input {...field} placeholder="title" />
                    <FormErrorMessage>{form.errors.title}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="tagline" validate={validateName}>
                {({ field, form }: any) => (
                  <FormControl
                    isInvalid={form.errors.tagline && form.touched.tagline}
                  >
                    <FormLabel>Tag Line</FormLabel>
                    <Input {...field} placeholder="tagline" />
                    <FormErrorMessage>{form.errors.tagline}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="blog" validate={validateBlog}>
                {({ field, form }: any) => (
                  <FormControl
                    isInvalid={form.errors.blog && form.touched.blog}
                  >
                    <Text mb="8px"></Text>
                    <Textarea
                      {...field}
                      placeholder="Here is a sample placeholder"
                      size="sm"
                    />
                    <FormErrorMessage>{form.errors.blog}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Button
                mt={4}
                colorScheme="teal"
                isLoading={props.isSubmitting}
                type="submit"
              >
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Dashboardpanel;
