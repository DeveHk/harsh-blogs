import {
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  HStack,
  Input,
  Radio,
  RadioGroup,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import { v4 as uuidv4 } from "uuid";

import Axios from "axios";
import { useRouter } from "next/router";
import Logout from "./Logout";
const Dashboardpanel = () => {
  /*const [title,setTitle]=useState("");
  const [tagline, setTagline] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
  const [hash, setHash] = useState("");
  const [, setTitle] = useState("");
  const [title, setTitle] = useState("");
  const [title, setTitle] = useState("");
  const [title, setTitle] = useState("");
  const [title, setTitle] = useState("");
  const [title, setTitle] = useState("");
  const [title, setTitle] = useState("");
  */
  const router = useRouter();
  const validator = (value: any) => {
    let error;
    if (!value) {
      error = "required *";
    }
    return error;
  };

  const toast = useToast();
  return (
    <div className="h-full w-full  flex items-center flex-col">
      <div className="w-full flex justify-end px-10  ">
        <div className="w-20 flex justify-center rounded-xl h-fit bg-white bg-opacity-25">
          <Logout router={router}></Logout>
        </div>
      </div>

      <div className="h-full mx-10 mt-10 bg-black bg-opacity-60 shadow-inner mb-10  shadow-white  backdrop-blur-[10px] text-white font-sans p-8 rounded-xl max-w-[500px]  w-[">
        <Formik
          initialValues={{
            id: uuidv4(),
            user_id: JSON.parse(localStorage.getItem("currentUserData") || " ")
              .userID,
            created_at: new Date().toUTCString(),
            tl: 1 + Math.floor(Math.random() * 3),
            by: JSON.parse(localStorage.getItem("currentUserData") || " ")
              .username,
            title: "",
            domain: "",
            tagline: "",
            conten: "",
            content: [""],
            has: "",
            hash: [""],
            type: ["T", "N", "F"].at(Math.floor(Math.random() * 3)),
            img: "https://nhhfwmgerhjxhljmmeii.supabase.co/storage/v1/object/public/blogImage/postimg.svg",
            des: "web dev",
            rating: 1001,
          }}
          onSubmit={(values, actions) => {
            values.content = values.conten?.split("\n");
            values.conten = "";
            values.hash = values.has
              ?.split("#")
              .map((element) => element.trim());
            values.has = "";
            console.log(values);

            const res = Axios.post("/api/blog/create", {
              values,
            }).then((res) => {
              console.log(res);
              actions.resetForm();
              actions.setSubmitting(false);
              toast({
                title: `Blog Created`,
                description: "Thankew for your contribution",
                status: "success",
                duration: 3000,
                position: "top-right",
                isClosable: true,
              });
              values.id = uuidv4();
              //router.reload();
            });
          }}
        >
          {(props) => (
            <Form className="space-y-5">
              {/*Title*/}
              <Field name="title" validate={validator}>
                {({ field, form }: any) => (
                  <FormControl
                    isInvalid={form.errors.title && form.touched.title}
                  >
                    <FormLabel>Title</FormLabel>
                    <Input {...field} placeholder="Form Title" />
                    <FormHelperText>
                      Give a catchy title to your blog.
                    </FormHelperText>
                    <FormErrorMessage>{form.errors.title}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              {/*Category*/}
              <Field name="domain" validate={validator}>
                {({ field, form }: any) => (
                  <FormControl
                    isInvalid={form.errors.domain && form.touched.domain}
                  >
                    <FormLabel>Domain</FormLabel>
                    <RadioGroup defaultValue="">
                      <HStack spacing="24px">
                        <Radio {...field} value="Technology">
                          Technology
                        </Radio>
                        <Radio {...field} value="Finance">
                          Finance
                        </Radio>
                        <Radio {...field} value="Design">
                          Design
                        </Radio>
                      </HStack>
                    </RadioGroup>
                    <FormHelperText>Select one of the category</FormHelperText>
                    <FormErrorMessage>{form.errors.domain}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              {/*Tagline*/}
              <Field name="tagline" validate={validator}>
                {({ field, form }: any) => (
                  <FormControl
                    isInvalid={form.errors.tagline && form.touched.tagline}
                  >
                    <FormLabel>Tag Line</FormLabel>
                    <Input {...field} placeholder="Tag line" />
                    <FormHelperText>One line description</FormHelperText>
                    <FormErrorMessage>{form.errors.tagline}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              {/*Content*/}
              <Field name="conten" validate={validator}>
                {({ field, form }: any) => (
                  <FormControl
                    isInvalid={form.errors.conten && form.touched.conten}
                  >
                    <FormLabel>Content</FormLabel>
                    <Textarea
                      {...field}
                      placeholder="Content of blog"
                      size="sm"
                    />
                    <FormErrorMessage>{form.errors.conten}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              {/*Hash Tags*/}
              <Field name="has" validate={validator}>
                {({ field, form }: any) => (
                  <FormControl isInvalid={form.errors.has && form.touched.has}>
                    <FormLabel>Hash Tags</FormLabel>
                    <Input {...field} placeholder="Tag line" />
                    <FormHelperText>
                      &apos;#tag&apos; for easy access
                    </FormHelperText>
                    <FormErrorMessage>{form.errors.has}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              {/*Photo*/}
              {/*<Field name="img" validate={validator}>
                {({ field, form }: any) => (
                  <FormControl isInvalid={form.errors.img && form.touched.img}>
                    <FormLabel>Image</FormLabel>
                    <Input
                      {...field}
                      accept="image/png, image/jpeg, image/svg"
                      type="file"
                      placeholder="Form Title"
                    />
                    <FormHelperText>
                      Give a catchy title to your blog.
                    </FormHelperText>
                    <FormErrorMessage>{form.errors.img}</FormErrorMessage>
                  </FormControl>
                )}
                </Field>*/}

              <Button
                mt={4}
                colorScheme="teal"
                isLoading={props.isSubmitting}
                type="submit"
              >
                Publish
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Dashboardpanel;
/*{/* Title }
        <FormControl>
          <FormLabel>Title</FormLabel>
          <Input type="text" />
          <FormHelperText>Give a catchy title to your blog.</FormHelperText>
        </FormControl>
        {/* Category }
        <FormControl>
          <FormLabel>Category</FormLabel>
          <RadioGroup defaultValue="">
            <HStack spacing="24px">
              <Radio value="Technology">Technology</Radio>
              <Radio value="Finance">Finance</Radio>
              <Radio value="Design">Design</Radio>
            </HStack>
          </RadioGroup>
          <FormHelperText>Select one of the category</FormHelperText>
        </FormControl>
        {/* Tagline }
        <FormControl>
          <FormLabel>Tagline</FormLabel>
          <Input type="text" />
          <FormHelperText>One line description</FormHelperText>
        </FormControl>
        {/* Content }
        <FormControl>
          <FormLabel>Content</FormLabel>
          <Input type="text" />
          <Textarea
            value={value}
            onChange={handleInputChange}
            placeholder="Here is a sample placeholder"
            size="sm"
          />{" "}
        </FormControl>*/
