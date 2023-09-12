import { Box, Button, Container, TextField } from "@mui/material";
import AddPeople from "../component/people/AddPeople";
import {
  FormProvider,
  useForm,
  Controller,
  useFieldArray,
} from "react-hook-form";

export interface PurchaseFormInput {
  product_name: string;
  price: number;
  quantity: number;
  receivers: Receiver[];
}

export type Receiver = {
  receiver_name: string;
  age: number;
  occupation: string;
};

const Form = () => {
  const methods = useForm<PurchaseFormInput>({
    defaultValues: {
      receivers: [
        {
          receiver_name: "",
          age: 20,
          occupation: "",
        },
      ],
    },
  });
  const { handleSubmit, control } = methods;

  const { fields, append, remove } = useFieldArray({
    control,
    name: "receivers",
  });

  const removeIndex = (index: number) => {
    remove(index);
  };

  const submit = (data: any) => {
    if (data.receivers.length == 0) {
      console.log("データがありません");
      return;
    }
    console.log(data); // フォームの内容が入る
  };

  return (
    <Container maxWidth="xs" sx={{ mt: 6 }}>
      <FormProvider {...methods}>
        <Box component="form" onSubmit={handleSubmit(submit)}>
          <Controller
            name="product_name"
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
                type="product_name"
                size="small"
                sx={{ width: 500 }}
                placeholder="例:NFT"
                error={fieldState.invalid}
                helperText={
                  fieldState.invalid ? errors.product_name?.message : ""
                }
              />
            )}
          />
          <Box>
            {fields.map((field, index) => {
              return (
                <AddPeople
                  key={field.id}
                  index={index}
                  removeIndex={removeIndex}
                />
              );
            })}
          </Box>
          <button
            type="button"
            onClick={() => {
              append({
                receiver_name: "",
                age: 20,
                occupation: "",
              });
            }}
          >
            append
          </button>
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
