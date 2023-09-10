import { Box, Button, Container, TextField } from "@mui/material";
import AddPeople from "../component/people/AddPeople";
import {
  FormProvider,
  useForm,
  Controller,
  FieldValues,
  UseFormReturn,
} from "react-hook-form";
import { JSX, ReactNode } from "react";
import react, { useState } from "react";

export interface ProposalFormInput {
  publisher: string;
  title: string;
  price: number;
  quantity: number;
  body: string;
  privilege: string;
  condition: string;
  confirmation: string;
  YouTubeUrl: string;
  docURL: string;
  receivers: Receiver[];
  // address: number;
  // receiverName: string;
  // receiver_price: string;
  // occupation: string;
  // readonly id: number;
}

export type Receiver = {
  address: string;
  receiverName: string;
  price: number;
  occupation: string;
  readonly id: number;
};

const Form = () => {
  // const { control, watch } = useForm<ProposalFormInput>();
  const methods = useForm<ProposalFormInput>({});
  const { handleSubmit, control, watch } = methods;

  const submit = (data: any) => {
    console.log(data); // フォームの内容が入る
  };

  const [peoples, usePeoples] = useState<Receiver[]>([
    {
      address: "",
      receiverName: "",
      price: 0,
      occupation: "",
      id: 1,
    },
    {
      address: "",
      receiverName: "",
      price: 0,
      occupation: "",
      id: 2,
    },
  ]);

  return (
    <Container maxWidth="xs" sx={{ mt: 6 }}>
      <FormProvider {...methods}>
        <Box component="form" onSubmit={handleSubmit(submit)}>
          <Controller
            name="title"
            control={control}
            rules={{
              required: { value: true, message: "入力が必須の項目です" },
              validate: (value) => {
                if (value !== null || "") {
                  return true;
                }
                return "文字を入力してください";
              },
            }}
            render={({ field, fieldState, formState: { errors } }) => (
              <TextField
                {...field}
                type="title"
                size="small"
                sx={{ width: 500 }}
                placeholder="例:NFT"
                error={fieldState.invalid}
                helperText={fieldState.invalid ? errors.title?.message : ""}
              />
            )}
          />
          <Box>
            {/* { 独自コンポーネント } */}
            {peoples.map((people, index) => {
              return <AddPeople key={index} />;
            })}
          </Box>
          <Box textAlign="right">
            <Button variant="contained" onClick={handleSubmit(submit)}>
              送信
            </Button>
          </Box>
        </Box>
      </FormProvider>
    </Container>
  );
};

export default Form;
