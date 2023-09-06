import { Box, Button, Container } from "@mui/material";
import AddPeople from "../component/people/AddPeople";
import { FormProvider, useForm } from "react-hook-form";

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
  address: number;
  receiverName: string;
  receiver_price: string;
  occupation: string;
  readonly id: number;
}

export type Receiver = {
  address: number;
  receiverName: string;
  price: string;
  occupation: string;
  readonly id: number;
};

const Form = () => {
  const methods = useForm<ProposalFormInput>({});
  const { handleSubmit } = methods;

  const submit = (data: any) => {
    console.log(data); // フォームの内容が入る
  };

  return (
    <Container maxWidth="xs" sx={{ mt: 6 }}>
      {/* { FormProviderでフォームの全体を囲む } */}
      <FormProvider {...methods}>
        <Box component="form" onSubmit={handleSubmit(submit)}>
          <Box>
            {/* { 独自コンポーネント } */}
            <AddPeople />
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
