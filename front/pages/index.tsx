import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { TextField } from "@mui/material/";

interface FormInput {
  peopleName: string;
  title: string;
  price: number;
  quantity: number;
  content: string;
  privilege: string;
  constrant: string;
  confirmation: string;
  videoUrl: string;
  docURL: string;
}

export default function App() {
  const {
    handleSubmit,
    control,
    formState: { errors },
    watch,
  } = useForm<FormInput>();
  const onSubmit: SubmitHandler<FormInput> = (data: FormInput) =>
    console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* peopleName */}
      {/* notice: valueの箇所で問題あり */}
      <Controller
        name="peopleName"
        control={control}
        rules={{
          required: { value: true, message: "必須入力" },
          validate: (value) => {
            if (value !== null && value !== "") {
              return true;
            }
            return "文字を入力してください";
          },
        }}
        render={({ field, fieldState }) => (
          <TextField
            {...field}
            type="peopleName"
            size="small"
            sx={{ width: 500 }}
            disabled
            error={fieldState.invalid}
            helperText={fieldState.invalid ? errors.peopleName?.message : ""}
          />
        )}
      />
      {/* title */}
      <Controller
        name="title"
        control={control}
        rules={{
          required: { value: true, message: "必須入力" },
          validate: (value) => {
            if (value !== null || "") {
              return true;
            }
            return "文字を入力してください";
          },
        }}
        render={({ field, fieldState }) => (
          <TextField
            {...field}
            type="title"
            size="small"
            sx={{ width: 500 }}
            error={fieldState.invalid}
            helperText={fieldState.invalid ? errors.title?.message : ""}
          />
        )}
      />
      {/* price */}
      <Controller
        name="price"
        control={control}
        rules={{
          required: { value: true, message: "必須入力" },
          validate: (value) => {
            if (!Number.isNaN(Number(value))) {
              return true;
            }
            return "数値を入力してください(全角不可)";
          },
        }}
        render={({ field, fieldState }) => (
          <TextField
            {...field}
            type="price"
            size="small"
            sx={{ width: 500 }}
            error={fieldState.invalid}
            helperText={fieldState.invalid ? errors.price?.message : ""}
          />
        )}
      />
      {/* quantity */}
      <Controller
        name="quantity"
        control={control}
        rules={{
          required: { value: true, message: "必須入力" },
          validate: (value) => {
            if (!Number.isNaN(Number(value))) {
              return true;
            }
            return "数値を入力してください(全角不可)";
          },
        }}
        render={({ field, fieldState }) => (
          <TextField
            {...field}
            type="quantity"
            size="small"
            sx={{ width: 500 }}
            error={fieldState.invalid}
            helperText={fieldState.invalid ? errors.quantity?.message : ""}
          />
        )}
      />
      {/* content */}
      <Controller
        name="content"
        control={control}
        rules={{
          required: { value: true, message: "必須入力" },
          validate: (value) => {
            if (value !== null || "") {
              return true;
            }
            return "文字を入力してください";
          },
        }}
        render={({ field, fieldState }) => (
          <TextField
            {...field}
            type="content"
            size="small"
            sx={{ width: 500 }}
            error={fieldState.invalid}
            helperText={fieldState.invalid ? errors.content?.message : ""}
          />
        )}
      />
      {/* <Controller
        name="TextField"
        control={control}
        rules={{
          required: { value: true, message: "必須入力" },
          validate: (value) => {
            if (!Number.isNaN(Number(value))) {
              return true;
            }
            return "数値を入力してください(全角不可)";
          },
        }}
        render={({ field, fieldState }) => (
          <TextField
            {...field}
            type="TextField"
            label="TextField"
            fullWidth
            placeholder="0123456789"
            error={fieldState.invalid}
            helperText={fieldState.invalid ? errors.TextField?.message : ""}
          />
        )}
      /> */}
      <input type="submit" />
    </form>
  );
}
